import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSupportViewComponent } from '../../../customer/feat-customer-support/ui-components';
import { CustomerSupportSmartComponent } from '../../../customer/feat-customer-support/smart-components';

@Component({
  selector: 'app-payment-smart',
  standalone: true,
  imports: [
    CommonModule,
    CustomerSupportViewComponent,
    CustomerSupportSmartComponent,
  ],
  template: `<p>payment-smart works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class PaymentSmartComponent {}
