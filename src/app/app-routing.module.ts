import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { SecureComponent } from './secure/secure.component';
import { RegisterComponent } from './public/register/register.component';
import { PublicComponent } from './public/public.component';
import { UsersComponent } from './secure/users/users.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,

    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'dashboard', component: DashboardComponent },
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
