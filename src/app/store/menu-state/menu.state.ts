import { MenuItem } from "src/app/abstractions/views/menu-item";

export interface MenuState {
  menuItems: MenuItem[];
  selectedMenuItem?: MenuItem;
}