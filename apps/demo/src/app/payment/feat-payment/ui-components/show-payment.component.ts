import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-payment',
  standalone: true,
  imports: [CommonModule],
  template: `<p>show-payment works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ShowPaymentComponent {}
