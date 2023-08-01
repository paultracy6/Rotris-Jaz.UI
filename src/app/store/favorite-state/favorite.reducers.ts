import { FavoriteState } from './favorite.state';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './favorite.actions';
import { state } from '@angular/animations';

export const favoriteState: FavoriteState = {
  favorites: []
};
const _favoritesReducer = createReducer(
  favoriteState,
  on(actions.favoriteActions.getFavoritesSuccess, (_state, {favorites}) => ({..._state, favorites: favorites})),
  on(actions.favoriteActions.addFavoriteSuccess, (_state, {favorite}) => ({..._state, favorites: [..._state.favorites, favorite]})),
  on(actions.favoriteActions.unfavoriteSuccess, (_state, {id}) => ({..._state, favorites: _state.favorites.filter(f => f.id !== id)}))
);
export function favoritesReducer(state: FavoriteState | undefined, action: Action) {
  return _favoritesReducer(state,action);
};
