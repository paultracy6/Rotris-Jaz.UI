import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from 'src/app/abstractions/views/favorite';
import { IFavoritesWorker } from 'src/app/abstractions/workers/favorites-worker.interface';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements OnInit {
  constructor(private readonly _worker: IFavoritesWorker) { }

  ngOnInit(): void {
    this._worker.initialize();
  }

  get favorites$(): Observable<ReadonlyArray<Favorite>> {
    return this._worker.favorites$;
  }
}
