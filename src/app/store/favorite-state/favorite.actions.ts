import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Favorite } from 'src/app/abstractions/views/favorite';

export const favoriteActions = createActionGroup({
  source: 'FAVORITES',
  events: {
    'Get Favorites': props<{ userId: string }>(),
    'Get Favorites Success': props<{ favorites: Array<Favorite> }>(),
    'Unfavorite': props<{ id: number }>(),
    'Unfavorite Success': props<{ id: number }>(),
    'Unfavorite Fail': emptyProps(),
    'Add Favorite': props<{ favorite: Favorite }>(),
    'Add Favorite Success': props<{ favorite: Favorite }>(),
    'Add Favorite Fail': emptyProps()
  },
});
