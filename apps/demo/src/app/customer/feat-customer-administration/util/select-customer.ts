import { Customer } from '../types';

export function selectCustomer() {
  return 'select-customer';
}

export function createCustomer(): Customer {
  return {
    id: 1,
    name: 'Jessica',
  }
}
