import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { IMenuService } from 'src/app/abstractions/view-services/menu-service.interface';
import { MenuService } from 'src/app/services/view-services/menu-service/menu.service';
import { MenuEffects } from 'src/app/store/menu-state/menu.effects';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    EffectsModule.forFeature([MenuEffects])
  ],
  providers: [
    { provide: IMenuService, useClass: MenuService }
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
