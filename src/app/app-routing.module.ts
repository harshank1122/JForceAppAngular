import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResistationComponent } from './resistation/resistation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminGuard } from './service/admin.guard'

const routes: Routes = [

  {
    path: 'signup',
    component: ResistationComponent,
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  } ,

  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'admin',
    component: AdminpageComponent,
    pathMatch: 'full',
    // canActivate: [AdminGuard] 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
