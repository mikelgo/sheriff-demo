import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDataService } from '../data-access';
import { CustomerSelectComponent } from '../ui-components';
import { selectCustomer } from '../util';
import { Admin } from '../types';
import { CustomerSupportSmartComponent } from '../../feat-customer-support/smart-components';
import { sharedCustomerUtil } from '../../shared';

/**
 * ESLint:
 * module /apps/demo/src/app/customer/feat-customer-administration/smart-components
 * cannot access /apps/demo/src/app/customer/feat-customer-support/smart-components.
 * Tags [domain:customer,feature:feat-customer-administration,type:smart-components]
 * have no clearance for feature:feat-customer-support(@softarc/sheriff/dependency-rule)
 */

@Component({
  selector: 'app-customer-administration-smart',
  standalone: true,
  imports: [
    CommonModule,
    CustomerSelectComponent,
    CustomerSupportSmartComponent,
  ],
  template: `<app-customer-select />`,
  styles: ``,
})
export class CustomerAdministrationSmartComponent {
  private data = inject(AdminDataService);

  constructor() {
    selectCustomer();
    const c: Admin = {
      id: 1,
      c: {
        id: 2,
        name: 'name',
      },
    };

    sharedCustomerUtil();
  }
}
