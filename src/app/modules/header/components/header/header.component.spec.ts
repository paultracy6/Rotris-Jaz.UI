import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RitaTitleComponent } from '../rita-title/rita-title.component';
import { LoggedInStatusComponent } from '../logged-in-status/logged-in-status.component';
import { LogoComponent } from '../logo/logo.component';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        RitaTitleComponent,
        LoggedInStatusComponent,
        LogoComponent
      ],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
