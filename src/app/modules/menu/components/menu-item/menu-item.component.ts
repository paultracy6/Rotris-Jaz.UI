import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/abstractions/views/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() menuItem!: MenuItem;
  @Input() disabled: boolean = false;
  @Output() itemSelected: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
}
