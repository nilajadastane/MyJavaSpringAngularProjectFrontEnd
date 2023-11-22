import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGardService } from './service/route-gard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
{path:'', component:WelcomeComponent,canActivate:[RouteGardService]},
{path:'login', component:LoginComponent},
{path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteGardService]},
{path:'todos', component:ListTodosComponent, canActivate:[RouteGardService]},
{path:'logout', component:LogoutComponent, canActivate:[RouteGardService]},
{path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
