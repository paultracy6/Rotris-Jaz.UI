import { TestBed, waitForAsync } from "@angular/core/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from "@ngrx/store";
import { Observable, of, throwError } from "rxjs";
import { IMenuService } from "src/app/abstractions/view-services/menu-service.interface";
import { INotificationService } from "src/app/abstractions/view-services/notification-service.interface";
import * as actions from "./menu.actions";
import { MenuEffects } from "./menu.effects";

describe('MenuEffects', () => {
  let effects: MenuEffects;
  let actions$: Observable<Action>;
  let menuService: jasmine.SpyObj<IMenuService> = jasmine.createSpyObj('menuService', ['getAsync$', 'menuItemSelected']);
  let notificationService: jasmine.SpyObj<INotificationService> = jasmine.createSpyObj('notificationService', ['showError']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuEffects,
        provideMockActions(() => actions$),
        { provide: IMenuService, useValue: menuService },
        { provide: INotificationService, useValue: notificationService }
      ]
    });

    effects = TestBed.inject(MenuEffects);

    spyOn(actions.menuActions, 'menuLoadSuccess').and.callThrough();
    menuService.getAsync$.calls.reset();
  });

  it('should be created', () => expect(effects).toBeTruthy());

  describe('when loadMenu$ is called', () => {
    it('should call menuService.getAsync$', waitForAsync(() => {
      // Arrange
      menuService.getAsync$.and.returnValue(of([]));
      actions$ = of(actions.menuActions.loadMenu);

      // Act
      effects.loadMenu$
        .subscribe(results => {
          // Assert
          expect(results.payload).toEqual([]);
          expect(menuService.getAsync$).toHaveBeenCalledTimes(1);
        });
    }));

    it('should trigger menu load failed action', waitForAsync(() => {
      // Arrange
      menuService.getAsync$.and.returnValue(throwError(() => { message: 'test error' }));
      actions$ = of(actions.menuActions.loadMenu);

      // Act
      effects.loadMenu$.subscribe();

      expect(notificationService.showError).toHaveBeenCalledTimes(1);

    }));
  });

  describe('when menuItemSelected$ is called', () => {
    it('should call menuService.menuItemSelected', waitForAsync(() => {
      // Arrange
      actions$ = of(actions.menuActions.menuItemSelected);

      // Act
      effects.menuItemSelected$
        .subscribe(results => {
          // Assert
          expect(menuService.menuItemSelected).toHaveBeenCalledOnceWith(results.payload);
        });
    }));
  });
});
