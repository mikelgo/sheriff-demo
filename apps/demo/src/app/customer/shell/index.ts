import { Routes } from '@angular/router';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: 'administration',
    loadComponent: () =>
      import('../feat-customer-administration/smart-components').then(
        (m) => m.CustomerAdministrationSmartComponent
      ),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('../feat-customer-support/smart-components').then(
        (m) => m.CustomerSupportSmartComponent
      ),
  },
];
