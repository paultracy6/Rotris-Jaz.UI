import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { MenuItem } from "src/app/abstractions/views/menu-item";

export const menuActions = createActionGroup({
  source: 'MENU',
  events: {
    'Load Menu': emptyProps(),
    'Menu Load Success': props<{ payload: Array<MenuItem> }>(),
    'Menu Item Selected': props<{ payload: MenuItem }>(),
    'Menu Item Selected Success': props<{ payload: MenuItem }>()
  }
});