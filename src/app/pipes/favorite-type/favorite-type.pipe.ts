import { Pipe, PipeTransform } from '@angular/core';
import { FavoriteType } from 'src/app/enums/favorite-type.enum';

@Pipe({
  name: 'favorite'
})
export class FavoriteTypePipe implements PipeTransform {

  transform(value: FavoriteType, ...args: unknown[]): string {
    return value.toString();
  }

}
