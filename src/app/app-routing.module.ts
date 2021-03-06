import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { SecureComponent } from './secure/secure.component';
import { RegisterComponent } from './public/register/register.component';
import { PublicComponent } from './public/public.component';
import { UsersComponent } from './secure/users/users.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { UsersCreateComponent } from './secure/users/users-create/users-create.component';
import { UserEditComponent } from './secure/users/user-edit/user-edit.component';
import { RolesComponent } from './secure/roles/roles.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,

    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'users/create', component: UsersCreateComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'users/:id/edit', component: UserEditComponent },
      { path: 'roles', component: RolesComponent },
    ],
  },

  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
