import { TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { MenuItemActionType } from "./abstractions/views/menu-item";
import { AppWorker } from "./app.component.worker";
import { MenuState } from "./store/menu-state/menu.state";

describe('AppComponentWorker', () => {
  let worker: AppWorker;
  let store: MockStore<MenuState>;
  let initialState: MenuState = {
    menuItems: [],
    selectedMenuItem: undefined
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppWorker,
        provideMockStore<MenuState>({ initialState })
      ]
    });
    worker = TestBed.inject(AppWorker);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(worker).toBeTruthy();
  });

  describe('when initialize() invoked', () => {
    it('should dispatch loadMenu() action', () => {
      // Arrange
      spyOn(store, 'dispatch');

      // Act
      worker.initialize();

      // Assert
      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe('when menuItemSelected() invoked', () => {
    it('should dispatch menuItemSelected() action', () => {
      // Arrange
      spyOn(store, 'dispatch');

      // Act
      worker.menuItemSelected({ name: 'test', actionParams: [], actionType: MenuItemActionType.Navigate, icon: 'test', order: 1 });

      // Assert
      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });
});