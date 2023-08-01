import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavoritesModule } from 'src/app/modules/favorites/favorites.module';
import { TypographyModule } from 'src/app/modules/typography/typography.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FavoritesModule,
    TypographyModule
  ]
})
export class LandingPageModule { }
