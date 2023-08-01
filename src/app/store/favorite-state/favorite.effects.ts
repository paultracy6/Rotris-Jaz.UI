import { INotificationService } from "src/app/abstractions/view-services/notification-service.interface";
import { IFavoriteService } from "src/app/abstractions/view-services/favorites-service.interface";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as actions from "./favorite.actions";
import { Favorite } from "src/app/abstractions/views/favorite";
import { mergeMap, map, catchError } from "rxjs/operators";
import { EMPTY } from 'rxjs';

@Injectable()
export class FavoriteEffects{
  constructor (private readonly _favoriteService: IFavoriteService,
    private readonly _actions$: Actions,
    private readonly _notificationService: INotificationService) {}

    getFavorites$ = createEffect(() => this._actions$.pipe(
      ofType(actions.favoriteActions.getFavorites),
      mergeMap(action =>
        this._favoriteService.getFavorites$(action.userId)
        .pipe(
          map((favorites: Favorite[]) => actions.favoriteActions.getFavoritesSuccess({favorites: favorites})),
          catchError(_ => {
            this._notificationService.showError('An error occured while getting favorites.');
            return EMPTY;
          })
        )
      )
    ));
    unFavorite$ = createEffect(() => this._actions$.pipe(
      ofType(actions.favoriteActions.unfavorite),
      mergeMap(action =>
        this._favoriteService.unfavorite$(action.id)
        .pipe(
          map(_ => actions.favoriteActions.unfavoriteSuccess({id: action.id})),
          catchError(_ => {
            this._notificationService.showError('An error occured while removing favorite.');
            return EMPTY;
          })
        )
      )
    ));
    addFavorite$ = createEffect(() => this._actions$.pipe(
      ofType(actions.favoriteActions.addFavorite),
      mergeMap(action =>
        this._favoriteService.addFavorite$(action.favorite)
        .pipe(
          map(favorite => actions.favoriteActions.addFavoriteSuccess({favorite: favorite})),
          catchError(_ => {
            this._notificationService.showError('An error occured while adding favorite.');
            return EMPTY;
          })
        )
      )
    ));
}
