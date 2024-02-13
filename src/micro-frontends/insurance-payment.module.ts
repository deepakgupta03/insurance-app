import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsurancePaymentComponent } from './insurance-payment.component';
import { LoadMicroFrontendGuard } from './load-micro-frontend.guard';

@NgModule({
  declarations: [
    InsurancePaymentComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        canActivate: [LoadMicroFrontendGuard],
        component: InsurancePaymentComponent,
        data: {
          bundleUrl: 
          'http://localhost:3005/main.js'
               // 'https://warm-mandazi-7dc7b4.netlify.app/bundle.js'
        },
      },
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InsurancePaymentModule {}
