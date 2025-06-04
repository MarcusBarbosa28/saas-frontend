import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // The dashboard module does not exist yet. Uncomment the following route once
  // it is implemented.
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
  //   canActivate: [AuthGuard],
  // },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
