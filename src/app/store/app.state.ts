import { MenuState } from "./menu-state/menu.state";
import { FavoriteState } from './favorite-state/favorite.state';

export interface AppState {
  menuState: MenuState;
  favoriteState: FavoriteState;
}
