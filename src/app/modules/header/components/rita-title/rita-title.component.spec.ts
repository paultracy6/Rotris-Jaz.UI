import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RitaTitleComponent } from './rita-title.component';
import { LogoComponent } from '../logo/logo.component';

describe('RitaTitleComponent', () => {
  let component: RitaTitleComponent;
  let fixture: ComponentFixture<RitaTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RitaTitleComponent, LogoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RitaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
