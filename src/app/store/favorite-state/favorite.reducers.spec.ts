import { Action } from "@ngrx/store";
import { Favorite } from "src/app/abstractions/views/favorite";
import { FavoriteType } from "src/app/enums/favorite-type.enum";
import * as actions from './favorite.actions';
import * as reducers from './favorite.reducers';
import { FavoriteState } from "./favorite.state";

describe('FavoriteReducers', () => {
  const initialState: FavoriteState = {
    favorites: []
  };
  const defaultFavorites: Favorite[] = [];
  const defaultFavorite: Favorite = {
    type: FavoriteType.Suite,
    name: "",
    id: 0
  };

  it('should be created', () => {
    // Arrange
    const action: Action = { type: '[FAVORITES]' };

    // Act
    const state = reducers.favoritesReducer(initialState, action);

    // Assert
    expect(initialState).toBeTruthy();
  });

  describe('on getFavoriteSuccess', () => {
    it('should change the state', () => {
      const expectedFavorite: Favorite = { ...defaultFavorite, id: 10, name: 'abcd' };
      const expectedFavorites: Favorite[] = [...defaultFavorites, expectedFavorite];
      const action = actions.favoriteActions.getFavoritesSuccess({ favorites: expectedFavorites });

      const state = reducers.favoritesReducer({ ...initialState }, action);

      expect(state.favorites).toEqual(expectedFavorites);
    });
  });

  describe('on addFavoriteSuccess', () => {
    it('should add favorite to the state', () => {
      const addedFavorite: Favorite = { ...defaultFavorite, id: 11, name: 'abcd' };
      const action = actions.favoriteActions.addFavoriteSuccess({ favorite: addedFavorite });
      initialState.favorites = [];

      const state = reducers.favoritesReducer({ ...initialState }, action);

      expect(state.favorites).toHaveSize(1);
      expect(state.favorites[0]).toEqual(addedFavorite);
    });
  });

  describe('on unFavoriteSuccess', () => {
    it('should remove the favorite from the state', () => {
      const newState: FavoriteState = { ...initialState };
      const existingFavorite: Favorite = { ...defaultFavorite, id: 12, name: 'abcd' };
      newState.favorites.push(existingFavorite);
      const action = actions.favoriteActions.unfavoriteSuccess({ id: 12 });

      const state = reducers.favoritesReducer(newState, action);

      expect(state.favorites).toHaveSize(0);
    });
  });
});
