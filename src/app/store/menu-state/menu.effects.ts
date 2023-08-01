import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { IMenuService } from "src/app/abstractions/view-services/menu-service.interface";
import { INotificationService } from "src/app/abstractions/view-services/notification-service.interface";
import { MenuItem } from "src/app/abstractions/views/menu-item";
import * as actions from "./menu.actions";

@Injectable()
export class MenuEffects {
  constructor(private readonly _actions$: Actions,
    private readonly _menuService: IMenuService,
    private readonly _notificationService: INotificationService) { }

  loadMenu$ = createEffect(() => this._actions$.pipe(
    ofType(actions.menuActions.loadMenu),
    switchMap(() =>
      this._menuService.getAsync$()
        .pipe(
          map((menuItems: MenuItem[]) => actions.menuActions.menuLoadSuccess({ payload: menuItems })),
          catchError((error: HttpErrorResponse) => {
            this._notificationService.showError(error.message);
            return EMPTY;
          })
        ))
  ));

  menuItemSelected$ = createEffect(() => this._actions$.pipe(
    ofType(actions.menuActions.menuItemSelected),
    switchMap((action) => {
      this._menuService.menuItemSelected(action.payload);
      return of(actions.menuActions.menuItemSelectedSuccess({ payload: action.payload }));
    })
  ));
}
