export interface MenuItem {
  name: string;
  actionType: MenuItemActionType,
  actionParams: Array<string>,
  icon: string;
  order: number;
}

export enum MenuItemActionType {
  Navigate
}