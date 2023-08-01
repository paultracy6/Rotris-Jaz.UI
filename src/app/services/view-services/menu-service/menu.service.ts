import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IMenuService } from 'src/app/abstractions/view-services/menu-service.interface';
import { MenuItem, MenuItemActionType } from 'src/app/abstractions/views/menu-item';

@Injectable()
export class MenuService implements IMenuService {
  private _menuItems: MenuItem[] = [];
  private _suiteMenuItem?: MenuItem;
  private _testCasesMenuItem?: MenuItem;
  private _dashboardMenuItem?: MenuItem;

  constructor(private readonly _router: Router) { }

  getAsync$(): Observable<MenuItem[]> {
    const menuItems: MenuItem[] = [];
    menuItems.push(this.suiteMenuItem);
    menuItems.push(this.testCasesMenuItem);
    menuItems.push(this.dashboardMenuItem);

    return of([...menuItems].sort(this.sortMenuItems));
  }

  menuItemSelected(menuItem: MenuItem): void {
    if (menuItem.actionType === MenuItemActionType.Navigate)
      this._router.navigate(menuItem.actionParams)
        .catch(error => console.log(`Failed to navigate to ${menuItem.actionParams}`, error));
  }

  private get suiteMenuItem(): MenuItem {
    if (!this._suiteMenuItem)
      this._suiteMenuItem = this.createMenuItem('Suites', MenuItemActionType.Navigate, ['suites'], 'group_work', 2);

    return this._suiteMenuItem;
  }

  private get testCasesMenuItem(): MenuItem {
    if (!this._testCasesMenuItem)
      this._testCasesMenuItem = this.createMenuItem('Test Cases', MenuItemActionType.Navigate, ['test-cases'], 'science', 3);

    return this._testCasesMenuItem;
  }

  private get dashboardMenuItem(): MenuItem {
    if (!this._dashboardMenuItem)
      this._dashboardMenuItem = this.createMenuItem('Dashboard', MenuItemActionType.Navigate, ['dashboard'], 'dashboard', 1);

    return this._dashboardMenuItem;
  }

  private createMenuItem(name: string, actionType: MenuItemActionType, actionParams: Array<string>, icon: string, order: number): MenuItem {
    const menuItem: MenuItem = {
      name: name,
      actionType: actionType,
      actionParams: actionParams,
      icon: icon,
      order: order
    };
    return menuItem;
  }

  private sortMenuItems(a: MenuItem, b: MenuItem): number {
    if (a.order > b.order) return 1;
    return -1;
  }
}
