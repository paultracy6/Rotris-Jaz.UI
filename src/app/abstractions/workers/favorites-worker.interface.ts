import { Observable } from 'rxjs';
import { Favorite } from 'src/app/abstractions/views/favorite';

export abstract class IFavoritesWorker {
  abstract favorites$: Observable<ReadonlyArray<Favorite>>;
  abstract initialize(): void;
  abstract unfavorite(id: number): void;
}
