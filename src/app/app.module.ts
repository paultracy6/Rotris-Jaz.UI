import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { INotificationService } from './abstractions/view-services/notification-service.interface';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { MenuModule } from './modules/menu/menu.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { NotificationService } from './services/notification-service/notification.service';
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    LandingPageModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    MenuModule
  ],
  providers: [
    { provide: INotificationService, useClass: NotificationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
