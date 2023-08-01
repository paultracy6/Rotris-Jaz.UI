import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import * as favorites from './favorite-state/favorite.reducers';
import * as menu from "./menu-state/menu.reducers";

export const reducers: ActionReducerMap<AppState> = {
  menuState: menu.menuReducer,
  favoriteState: favorites.favoritesReducer
};
