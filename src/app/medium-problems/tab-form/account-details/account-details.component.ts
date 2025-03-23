import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.less'
})
export class AccountDetailsComponent {
  @Input() name!:string;
}
