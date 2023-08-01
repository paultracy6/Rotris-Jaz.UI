import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MenuState } from "./menu.state";

export const menuFeature = createFeatureSelector<MenuState>('menuState');

export const getMenuItems = createSelector(
  menuFeature,
  (state: MenuState) => state.menuItems);

export const getSelectedMenuItem = createSelector(
  menuFeature,
  (state: MenuState) => state.selectedMenuItem);