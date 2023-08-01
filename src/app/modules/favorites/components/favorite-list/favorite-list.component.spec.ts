import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of } from 'rxjs';
import { IFavoritesWorker } from 'src/app/abstractions/workers/favorites-worker.interface';
import { FavoriteListComponent } from './favorite-list.component';

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;
  let worker: jasmine.SpyObj<IFavoritesWorker> = jasmine.createSpyObj<IFavoritesWorker>('IFavoritesWorker', ['initialize', 'unfavorite'], ['favorites$']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteListComponent],
      providers: [{ provide: IFavoritesWorker, useValue: worker }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    worker.initialize.calls.reset();
    worker.unfavorite.calls.reset();

    Object.defineProperty(worker, 'favorites$', { value: of([]) });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize favorites', waitForAsync(() => {
      // Act
      component.ngOnInit();

      // Assert
      expect(worker.initialize).toHaveBeenCalled();
      component.favorites$
        .subscribe(actual => expect(actual).toEqual([]));
    }));

  });
});
