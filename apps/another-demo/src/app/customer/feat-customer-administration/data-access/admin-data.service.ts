import { Injectable } from '@angular/core';
import { Customer } from '../types';
import { selectCustomer } from '../util';

@Injectable({
  providedIn: 'root',
})
export class AdminDataService {
  constructor() {}

  getData(): Customer | null {
    selectCustomer();
    return null;
  }
}
