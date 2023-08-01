import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/abstractions/views/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menuItems!: ReadonlyArray<MenuItem>;
  @Output() itemSelected: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
}
