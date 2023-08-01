import { MenuItem, MenuItemActionType } from "src/app/abstractions/views/menu-item";
import * as selectors from './menu.selectors';
import { MenuState } from "./menu.state";

describe('MenuSelectors', () => {
  it('should getMenuItems', () => {
    // Act
    const results = selectors.getMenuItems.projector({ ...initialState, menuItems: [{ ...menuItem, name: 'test' }] });

    // Assert
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('test');
  });

  it('should get selectedMenuItem', () => {
    // Act
    const results = selectors.getSelectedMenuItem.projector({ ...initialState, selectedMenuItem: { ...menuItem, name: 'test selected' } });

    expect(results).toBeDefined();
    expect(results?.name).toBe('test selected');
  });

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
});