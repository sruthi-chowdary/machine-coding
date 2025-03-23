import { Component } from '@angular/core';
import { TabFormComponent } from "./tab-form/tab-form.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-medium-problems',
  standalone: true,
  imports: [TabFormComponent, RouterOutlet,RouterLink],
  templateUrl: './medium-problems.component.html',
  styleUrl: './medium-problems.component.less'
})
export class MediumProblemsComponent {

}
