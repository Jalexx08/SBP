import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { RegisterComponent } from './home/register/register.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },

  {
    path: 'listTasks',
    component: ListTaskComponent,
    canActivate: [ AuthGuard]
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
    canActivate: [ AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'listUsers',
    component: ListUserComponent,
    canActivate: [ AuthGuard]
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
    canActivate: [ AuthGuard]
  },
  {
    path: 'updateUser/:user?',
    component: UpdateUserComponent,
    canActivate: [ AuthGuard]
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
    canActivate: [ AuthGuard]
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
    canActivate: [ AuthGuard]
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
    canActivate: [ AuthGuard]
  },
  {
    path: '**',
   redirectTo: '/login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
