import { Observable } from "rxjs";
import { MenuItem } from "../views/menu-item";

export abstract class IMenuService {
  abstract getAsync$(): Observable<MenuItem[]>;
  abstract menuItemSelected(menuItem: MenuItem): void;
}
