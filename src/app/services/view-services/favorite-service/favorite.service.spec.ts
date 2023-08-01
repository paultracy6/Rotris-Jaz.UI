import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { Favorite } from 'src/app/abstractions/views/favorite';
import { FavoriteType } from 'src/app/enums/favorite-type.enum';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;
  let httpClient: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
  const favorites: Favorite[] = [
    { id: 1, name: 'Dummy Name', type: FavoriteType.Suite },
    { id: 2, name: 'Maiduls test case', type: FavoriteType.TestCase }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoriteService,
        { provide: HttpClient, useValue: httpClient }
      ]
    });
    service = TestBed.inject(FavoriteService);

    httpClient.delete.calls.reset();
    httpClient.get.calls.reset();
    httpClient.post.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When getFavorite$ is invoked', () => {
    it('should return favorites', waitForAsync(() => {
      // Arrange
      httpClient.get.and.returnValue(of(favorites));

      //Act
      service.getFavorites$('1')
        .subscribe(actual => {
          // Assert
          expect(actual.length).toBeGreaterThan(0);
          expect(actual).toEqual(favorites);
        });
    }));
  });

  describe('When unfavorite$ is invoked', () => {
    it('should return id', waitForAsync(() => {
      // Arrange
      httpClient.delete.and.returnValue(of(1));

      service.unfavorite$(1)
        .subscribe(actual => {
          // Assert
          expect(actual).toBe(1);
        });
    }));
  });

  describe('When addFavorite$ is invoked', () => {
    it('should return favorite', waitForAsync(() => {
      // Arrange
      httpClient.post.and.returnValue(of(favorites[0]));

      // Act
      service.addFavorite$(favorites[0])
        .subscribe(actual => {
          // Assert
          expect(actual).toEqual(favorites[0]);
        });
    }));
  });
});
