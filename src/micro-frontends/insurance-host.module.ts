import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsuranceHostComponent } from './insurance-host.component';
import { LoadMicroFrontendGuard } from './load-micro-frontend.guard';
import { MicroFrontendRoutingDirective } from './micro-frontend-routing.directive';

@NgModule({
  declarations: [
    InsuranceHostComponent,
    MicroFrontendRoutingDirective
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        canActivate: [LoadMicroFrontendGuard],
        component: InsuranceHostComponent,
        data: {
          bundleUrl: 
         // 'https://65cb7f7c8930780d2214bc46--friendly-dodol-0da4df.netlify.app/bundle.js'
          'http://localhost:3004/main.js',
        },
      },
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InsuranceHostModule {}
