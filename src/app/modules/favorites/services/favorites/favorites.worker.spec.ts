import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FavoriteState } from 'src/app/store/favorite-state/favorite.state';
import { FavoritesWorker } from './favorites.worker';
import * as selectors from 'src/app/store/favorite-state/favorite.selectors';
import * as actions from 'src/app/store/favorite-state/favorite.actions';

describe('FavoritesWorker', () => {
  let service: FavoritesWorker;
  let store: MockStore<FavoriteState>;
  let initialState: FavoriteState = {
    favorites: []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoritesWorker,
        provideMockStore<FavoriteState>({initialState})
      ]
    });
    service = TestBed.inject(FavoritesWorker);
    store = TestBed.inject(MockStore);

    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when favorites is called', () => {
    it('should call store.select', waitForAsync(() => {
      store.overrideSelector(selectors.getFavorites, []);
      store.refreshState();

      service.favorites$.subscribe(value => expect(value).toEqual([]));
    }));
  });

  describe('when initialized is called', () => {
    it('should dispatch get favorites', () => {
      service.initialize();

      expect(store.dispatch).toHaveBeenCalledOnceWith(actions.favoriteActions.getFavorites({ userId: '1' }));
    });
  });

  describe('when unfavorite is called', () => {
    it('should dispatch the unfavorite event', () =>{
      service.unfavorite(1);

      expect(store.dispatch).toHaveBeenCalledOnceWith(actions.favoriteActions.unfavorite({ id: 1 }));
    });
  });
});
