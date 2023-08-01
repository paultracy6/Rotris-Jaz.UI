import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayStringPipe } from './array-string/array-string.pipe';
import { FavoriteTypePipe } from './favorite-type/favorite-type.pipe'
import { StringArrayPipe } from './string-array/string-array.pipe';

@NgModule({
  declarations: [
    ArrayStringPipe,
    FavoriteTypePipe,
    StringArrayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArrayStringPipe,
    FavoriteTypePipe,
    StringArrayPipe
  ]
})
export class CustomPipesModule { }
