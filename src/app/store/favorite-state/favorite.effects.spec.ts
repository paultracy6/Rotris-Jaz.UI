import { TestBed, waitForAsync } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Action } from "@ngrx/store";
import { Observable, of, throwError } from "rxjs";
import { IFavoriteService } from "src/app/abstractions/view-services/favorites-service.interface";
import { INotificationService } from "src/app/abstractions/view-services/notification-service.interface";
import * as actions from "./favorite.actions";
import { FavoriteEffects } from "./favorite.effects";
import { HttpErrorResponse } from "@angular/common/http";
import { isEmpty } from "rxjs/operators";
import { Favorite } from 'src/app/abstractions/views/favorite';
import { FavoriteType } from "src/app/enums/favorite-type.enum";

describe('FavoriteEffects', () => {
  let effects: FavoriteEffects;
  let actions$: Observable<Action>;
  let favoriteService: jasmine.SpyObj<IFavoriteService> = jasmine.createSpyObj('favoriteService', ['getFavorites$', 'unfavorite$', 'addFavorite$']);
  let notificationService: jasmine.SpyObj<INotificationService> = jasmine.createSpyObj('notificationService', ['showError']);

  const favorite: Favorite = {
    type: FavoriteType.Suite,
    name: "",
    id: 0
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoriteEffects,
        provideMockActions(() => actions$),
        { provide: IFavoriteService, useValue: favoriteService },
        { provide: INotificationService, useValue: notificationService }
      ]
    });

    effects = TestBed.inject(FavoriteEffects);

    spyOn(actions.favoriteActions, 'getFavoritesSuccess').and.callThrough();
    favoriteService.getFavorites$.calls.reset();
    favoriteService.unfavorite$.calls.reset();
    favoriteService.addFavorite$.calls.reset();
    notificationService.showError.calls.reset();
  });

  it('should be created', () => expect(effects).toBeTruthy());

  describe('when getFavorites$ is called', () => {
    it('should call favorite service and return favorites', waitForAsync(() => {
      //Arrange
      const action = {userId:'user1'}
      favoriteService.getFavorites$.and.returnValue(of([]));
      actions$ = of(actions.favoriteActions.getFavorites(action));

      //Act
      effects.getFavorites$
      .subscribe(results => {
        //Assert
        expect(favoriteService.getFavorites$).toHaveBeenCalledOnceWith(action.userId);
        expect(results).toEqual({favorites: [], type: '[FAVORITES] Get Favorites Success'});
      });
    }));
    it('should call notification service when error', waitForAsync(() => {
      const action = {userId:'user1'}
      favoriteService.getFavorites$.and.returnValue(throwError(() => ''));
      actions$ = of(actions.favoriteActions.getFavorites(action));

      effects.getFavorites$
      .pipe(isEmpty())
      .subscribe(_ =>
        expect(notificationService.showError).toHaveBeenCalledOnceWith('An error occured while getting favorites.'));
    }));
  });

  describe('when unFavorite$ is called', () =>{
    it('should remove the favorite', waitForAsync(() => {
      const action = {id:5}
      favoriteService.unfavorite$.and.returnValue(of(5));
      actions$ = of(actions.favoriteActions.unfavorite(action));
      const successSpy = spyOn(actions.favoriteActions, 'unfavoriteSuccess');

      effects.unFavorite$
      .subscribe(_ => {
        expect(successSpy).toHaveBeenCalledOnceWith(action);
      });
    }));
    it('should call notification service when error', waitForAsync(() => {
      const action = {id:5}
      favoriteService.unfavorite$.and.returnValue(throwError(() => ''));
      actions$ = of(actions.favoriteActions.unfavorite(action));

      effects.unFavorite$
      .subscribe(_ => {
        expect(notificationService.showError).toHaveBeenCalledOnceWith('An error occured while removing favorite.');
      });

    }));
  });

  describe('when addFavorite$ is called', () => {
    it('should return the added the favorite', waitForAsync(() => {
      var action = {favorite: favorite}
      favoriteService.addFavorite$.and.returnValue(of({...favorite, id:10}));
      actions$ = of(actions.favoriteActions.addFavorite(action));

      effects.addFavorite$
      .subscribe(result =>
        expect(result).toEqual({favorite: {...favorite, id:10}, type: '[FAVORITES] Add Favorite Success'})
      );
    }));
    it('should call the notification service when error', waitForAsync(() => {
      var action = {favorite: favorite}
      favoriteService.addFavorite$.and.returnValue(throwError(() => ''));
      actions$ = of(actions.favoriteActions.addFavorite(action));

      effects.addFavorite$
      .subscribe(_ => {
        expect(notificationService.showError).toHaveBeenCalledOnceWith('An error occured while adding favorite.');
      });
    }));
  });

});
