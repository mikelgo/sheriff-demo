import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-support-smart',
  standalone: true,
  imports: [CommonModule],
  template: `<p>customer-support-smart works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CustomerSupportSmartComponent {}
