import { Component, Input } from '@angular/core';
import { Favorite } from 'src/app/abstractions/views/favorite';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input() favorite!: Favorite;
}
