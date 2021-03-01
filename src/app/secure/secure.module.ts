import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { PublicModule } from '../public/public.module';

@NgModule({
  declarations: [SecureComponent, NavComponent, MenuComponent],
  exports: [SecureComponent, NavComponent, MenuComponent],
  imports: [CommonModule],
})
export class SecureModule {}
