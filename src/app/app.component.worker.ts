import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MenuItem } from "./abstractions/views/menu-item";
import { IAppWorker } from "./abstractions/workers/app-worker.interface";
import * as actions from "./store/menu-state/menu.actions";
import * as selectors from "./store/menu-state/menu.selectors";
import { MenuState } from "./store/menu-state/menu.state";

@Injectable()
export class AppWorker implements IAppWorker {
  public constructor(private readonly _store: Store<MenuState>) {
  }

  menuItems$: Observable<readonly MenuItem[]> = this._store.select(selectors.getMenuItems);

  initialize(): void {
    this._store.dispatch(actions.menuActions.loadMenu());
  }

  menuItemSelected(menuItem: MenuItem): void {
    this._store.dispatch(actions.menuActions.menuItemSelected({ payload: menuItem }));
  }
}