import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'insurance',
    loadChildren: () =>
      import('./../micro-frontends/insurance-host.module').then(
        (m) => m.InsuranceHostModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./../micro-frontends/insurance-payment.module').then(
        (m) => m.InsurancePaymentModule
      ),
      canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/insurance', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}