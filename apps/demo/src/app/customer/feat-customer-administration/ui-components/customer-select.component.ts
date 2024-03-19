import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDataService } from '../data-access';

@Component({
  selector: 'app-customer-select',
  standalone: true,
  imports: [CommonModule],
  template: `<p>customer-select works!</p>`,
  styles: ``,
})
export class CustomerSelectComponent {
  // TODO should not be allowed
  private data = inject(AdminDataService);
}
