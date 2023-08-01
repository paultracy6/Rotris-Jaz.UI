import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoggedInStatusComponent } from './components/logged-in-status/logged-in-status.component';
import { RitaTitleComponent } from './components/rita-title/rita-title.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    LoggedInStatusComponent,
    RitaTitleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
