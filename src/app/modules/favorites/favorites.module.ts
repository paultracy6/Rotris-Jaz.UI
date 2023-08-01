import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { IFavoritesWorker } from 'src/app/abstractions/workers/favorites-worker.interface';
import { FavoritesWorker } from './services/favorites/favorites.worker';
import { IFavoriteService } from 'src/app/abstractions/view-services/favorites-service.interface';
import { FavoriteService } from 'src/app/services/view-services/favorite-service/favorite.service';
import { EffectsModule } from '@ngrx/effects';
import { FavoriteEffects } from 'src/app/store/favorite-state/favorite.effects';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';

@NgModule({
  declarations: [FavoriteListComponent, FavoriteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    EffectsModule.forFeature([FavoriteEffects]),
    CustomPipesModule
  ],
  providers: [
    { provide: IFavoritesWorker, useClass: FavoritesWorker },
    { provide: IFavoriteService, useClass: FavoriteService }
  ],
  exports: [FavoriteListComponent]
})
export class FavoritesModule {}
