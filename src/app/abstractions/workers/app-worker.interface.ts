import { Observable } from "rxjs";
import { MenuItem } from "../views/menu-item";

export abstract class IAppWorker {
  abstract initialize(): void;
  abstract menuItems$: Observable<ReadonlyArray<MenuItem>>;
  abstract menuItemSelected(menuItem: MenuItem): void;
}