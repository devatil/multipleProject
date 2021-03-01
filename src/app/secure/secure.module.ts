import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { PublicModule } from '../public/public.module';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    UsersComponent,
    DashboardComponent,
  ],
  exports: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    DashboardComponent,
    UsersComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SecureModule {}
