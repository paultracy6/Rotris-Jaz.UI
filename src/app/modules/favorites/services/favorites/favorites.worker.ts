import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Favorite } from 'src/app/abstractions/views/favorite';
import { IFavoritesWorker } from 'src/app/abstractions/workers/favorites-worker.interface';
import * as actions from 'src/app/store/favorite-state/favorite.actions';
import * as selectors from 'src/app/store/favorite-state/favorite.selectors';
import { FavoriteState } from 'src/app/store/favorite-state/favorite.state';

@Injectable()
export class FavoritesWorker implements IFavoritesWorker {
  constructor(private readonly _store: Store<FavoriteState>) { }

  favorites$: Observable<ReadonlyArray<Favorite>> = this._store.select(
    selectors.getFavorites
  );

  initialize(): void {
    this._store.dispatch(actions.favoriteActions.getFavorites({ userId: '1' }));
  }

  unfavorite(id: number): void {
    this._store.dispatch(actions.favoriteActions.unfavorite({ id: 1 }));
  }
}
