import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MenuItem, MenuItemActionType } from './abstractions/views/menu-item';
import { IAppWorker } from './abstractions/workers/app-worker.interface';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/components/header/header.component';
import { HeaderModule } from './modules/header/header.module';
import { MenuComponent } from './modules/menu/components/menu/menu.component';
import { MenuState } from './store/menu-state/menu.state';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let worker: jasmine.SpyObj<IAppWorker> = jasmine.createSpyObj<IAppWorker>('IAppWorker', ['initialize', 'menuItemSelected']);
  let store: MockStore<MenuState>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        HeaderModule
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: IAppWorker, useValue: worker }
      ],
      declarations: [AppComponent, HeaderComponent, MenuComponent],
    })
      .overrideComponent(AppComponent, {
        set: {
          providers: [
            { provide: IAppWorker, useValue: worker }
          ]
        }
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Rita'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Rita');
  });

  describe('when ngOnInit() invoked', () => {
    it('should initialize app worker', () => {
      // Act
      component.ngOnInit();

      // Assert
      expect(worker.initialize).toHaveBeenCalledTimes(1);
    });
  });

  describe('when menuItemSelected() invoked', () => {
    it('should invoke app worker menuItemSelected()', () => {
      // Arrange
      const menuItem: MenuItem = { name: 'test', actionParams: [], actionType: MenuItemActionType.Navigate, icon: 'test', order: 1 };

      // Act
      component.menuItemSelected(menuItem);

      // Assert
      expect(worker.menuItemSelected).toHaveBeenCalledTimes(1);
      expect(worker.menuItemSelected).toHaveBeenCalledWith(menuItem);
    });
  });
});

const initialState: MenuState = {
  menuItems: []
}

