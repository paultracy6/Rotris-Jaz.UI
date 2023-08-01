import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoriteState } from './favorite.state';

export const favoriteFeature =
  createFeatureSelector<FavoriteState>('favoriteState');

export const getFavorites = createSelector(
  favoriteFeature,
  (state: FavoriteState) => state.favorites
);
