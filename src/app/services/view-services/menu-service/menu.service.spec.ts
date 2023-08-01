import { TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MenuItem, MenuItemActionType } from 'src/app/abstractions/views/menu-item';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;
  const router: jasmine.SpyObj<Router> = jasmine.createSpyObj<Router>('_router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuService,
        { provide: Router, useValue: router }
      ]
    });
    service = TestBed.inject(MenuService);

    router.navigate.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when getAsync() invoked', () => {
    it('Should return MenuItems', waitForAsync(() => {
      service.getAsync$()
        .subscribe(actual => {
          expect(actual).toBeDefined();
        });
    }));
  });

  describe('when menuItemSelected() invoked', () => {
    it('should trigger action', () => {
      // Arrange
      const menuItem: MenuItem = { name: 'test', actionParams: ['suites'], actionType: MenuItemActionType.Navigate, icon: 'test', order: 1 };
      router.navigate.and.returnValue(Promise.resolve(true));

      // Act
      service.menuItemSelected(menuItem);

      // Assert
      expect(router.navigate).toHaveBeenCalledOnceWith(['suites']);
    });

    it('should catch and log error', fakeAsync(() => {
      // Arrange
      spyOn(window.console, 'log');
      const menuItem: MenuItem = { name: 'test', actionParams: ['suites'], actionType: MenuItemActionType.Navigate, icon: 'test', order: 1 };
      router.navigate.and.returnValue(Promise.reject('test'));

      // Act
      service.menuItemSelected(menuItem);
      tick(100);

      // Assert
      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(window.console.log).toHaveBeenCalledOnceWith('Failed to navigate to suites', 'test');
    }));
  });
});
