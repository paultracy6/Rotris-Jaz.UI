import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { IFavoriteService } from 'src/app/abstractions/view-services/favorites-service.interface';
import { Favorite } from 'src/app/abstractions/views/favorite';
import { environment } from 'src/environments/environment';
import { FavoriteType } from 'src/app/enums/favorite-type.enum';

@Injectable()
export class FavoriteService implements IFavoriteService {
  private readonly _url: string = `${environment.apiUrls.rita}/api/favorites`;

  constructor(private readonly _httpClient: HttpClient) { }

  getFavorites$(userId: string): Observable<Favorite[]> {
    return of(this.mockData);
    return this._httpClient.get<Favorite[]>(`${this._url}?userId=${userId}`);
  }
  unfavorite$(id: number): Observable<number> {
    return this._httpClient.delete<number>(`${this._url}/${id}/unfavorite}`);
  }
  addFavorite$(favorite: Favorite): Observable<Favorite> {
    return this._httpClient.post<Favorite>(`${this._url}`, favorite);
  }

  private get mockData(): Favorite[] {
    const favorites: Array<Favorite> = [];
    const favorite1: Favorite = {
      type: FavoriteType.Suite,
      name: 'Dummy Name',
      id: 1
    };
    const favorite2: Favorite = {
      type: FavoriteType.TestCase,
      name: 'Maiduls test case',
      id: 2
    };
    favorites.push(favorite1);
    favorites.push(favorite2);
    return favorites;
  }
}
