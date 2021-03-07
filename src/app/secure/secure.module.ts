import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesComponent } from './roles/roles.component';
import { CreateRoleComponent } from './roles/create-role/create-role.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';
import { ProductsComponent } from './products/products.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    UsersComponent,
    DashboardComponent,
    ProfileComponent,
    UsersCreateComponent,
    UserEditComponent,
    RolesComponent,
    CreateRoleComponent,
    RoleEditComponent,
    ProductsComponent,
    PaginatorComponent,
  ],
  exports: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    DashboardComponent,
    UsersComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
})
export class SecureModule {}
