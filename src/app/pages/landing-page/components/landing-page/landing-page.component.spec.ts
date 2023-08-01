import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteListComponent } from 'src/app/modules/favorites/components/favorite-list/favorite-list.component';
import { HeaderComponent } from 'src/app/modules/header/components/header/header.component';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent,
        MockFavoriteListComponent,
        MockHeadingComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  @Component({
    selector: 'app-favorite-list',
    template: ''
  })
  class MockFavoriteListComponent implements Partial<FavoriteListComponent> { };

  //Mock components
  @Component({
    selector: 'app-heading',
    template: ''
  })
  class MockHeadingComponent implements Partial<HeaderComponent> { };
});
