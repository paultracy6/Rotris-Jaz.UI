import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MenuItemComponent } from './menu-item.component';
import { MenuItemActionType } from 'src/app/abstractions/views/menu-item';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemComponent],
      imports: [MatIconModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.menuItem = {
      name: '',
      actionType: MenuItemActionType.Navigate,
      actionParams: [],
      icon: '',
      order: 0
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
