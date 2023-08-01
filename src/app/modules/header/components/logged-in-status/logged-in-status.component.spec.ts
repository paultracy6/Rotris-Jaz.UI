import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggedInStatusComponent } from './logged-in-status.component';
import { MatIconModule } from '@angular/material/icon';

describe('LoggedInStatusComponent', () => {
  let component: LoggedInStatusComponent;
  let fixture: ComponentFixture<LoggedInStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedInStatusComponent],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
