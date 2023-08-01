import { Action } from "@ngrx/store";
import { MenuItem, MenuItemActionType } from "src/app/abstractions/views/menu-item";
import * as actions from './menu.actions';
import * as reducers from './menu.reducers';
import { MenuState } from "./menu.state";

describe('MenuReducers', () => {
  const initialState: MenuState = {
    menuItems: [],
    selectedMenuItem: undefined
  };
  const menuItem: MenuItem = {
    name: '',
    actionType: MenuItemActionType.Navigate,
    actionParams: [],
    icon: '',
    order: 0
  };

  it('should be created', () => {
    // Arrange
    const action: Action = { type: '[MENU]' };

    // Act
    const state = reducers.menuReducer(undefined, action);

    // Assert
    expect(initialState).toBeTruthy();
  });

  describe('when menuLoadSuccess is called', () => {
    it('should set menuItems', () => {
      // Arrange
      const successItem: MenuItem = { ...menuItem, name: 'test success' };
      const action = actions.menuActions.menuLoadSuccess({ payload: [successItem] });

      // Act
      const state = reducers.menuReducer(initialState, action);

      // Assert
      expect(state.menuItems).toEqual([successItem]);
    });
  });

  describe('when menuItemSelectedSuccess is called', () => {
    it('should set selectedMenuItem', () => {
      // Arrange
      const selectedItem: MenuItem = { ...menuItem, name: 'selected item' };
      const action = actions.menuActions.menuItemSelectedSuccess({ payload: selectedItem });

      // Act
      const state = reducers.menuReducer(initialState, action);

      // Assert
      expect(state.selectedMenuItem).toEqual(selectedItem);
    });
  });
});