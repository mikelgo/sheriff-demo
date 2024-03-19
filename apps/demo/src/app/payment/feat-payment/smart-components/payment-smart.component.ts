import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-smart',
  standalone: true,
  imports: [CommonModule],
  template: `<p>payment-smart works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class PaymentSmartComponent {}
