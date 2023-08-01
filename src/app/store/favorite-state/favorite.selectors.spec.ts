import { Favorite } from 'src/app/abstractions/views/favorite';
import { FavoriteType } from 'src/app/enums/favorite-type.enum';
import * as selectors from './favorite.selectors';
import { FavoriteState } from './favorite.state';

describe('FavoriteSelectors', () => {
  const initialState: FavoriteState = {
    favorites: []
  };
  const defaultFavorite: Favorite = {
    type: FavoriteType.Suite,
    name: '',
    id: 0
  };
  it('should getFavorites', () => {
    // Arrange
    const favorite: Favorite = { ...defaultFavorite, name: 'my favorite', id: 1 };

    // Act
    const results = selectors.getFavorites.projector({ ...initialState, favorites: [favorite] });

    // Assert
    expect(results.length).toBe(1);
    expect(results[0]).toEqual(favorite);
  });
});