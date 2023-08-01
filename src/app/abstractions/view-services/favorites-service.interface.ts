import { Observable } from 'rxjs';
import { Favorite } from 'src/app/abstractions/views/favorite';

export abstract class IFavoriteService {
  abstract getFavorites$(userId: string): Observable<Favorite[]>;
  abstract unfavorite$(id: number): Observable<number>;
  abstract addFavorite$(favorite: Favorite): Observable<Favorite>;
}
