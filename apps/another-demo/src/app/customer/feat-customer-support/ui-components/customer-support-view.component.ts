import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-support-view',
  standalone: true,
  imports: [CommonModule],
  template: `<p>customer-support-view works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CustomerSupportViewComponent {}
