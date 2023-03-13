import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthComponent } from './layout/auth/auth.component';



const routeAdmin: Routes = [
  {
    path: 'hrm',
    loadChildren: () => import('./hrm/hrm.module').then((m) => m.HrmModule)
  }
]

const routeAuth: Routes = [
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then((m) => m.SessionsModule)
  }
]

const routes: Routes = [
  {
    path: '',
    children: routeAdmin,
    component: AdminLayoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: routeAuth
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
