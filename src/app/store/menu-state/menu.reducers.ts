import { createReducer, on } from "@ngrx/store";
import * as actions from "./menu.actions";
import { MenuState } from "./menu.state";

const menuState: MenuState = {
  menuItems: [],
  selectedMenuItem: undefined
};

const _menuReducer = createReducer(
  menuState,
  on(actions.menuActions.menuLoadSuccess, (state, { payload }) => ({ ...state, menuItems: payload })),
  on(actions.menuActions.menuItemSelectedSuccess, (state, { payload }) => ({ ...state, selectedMenuItem: payload }))
);

export function menuReducer(state: MenuState | undefined, action: any) {
  return _menuReducer(state, action);
}