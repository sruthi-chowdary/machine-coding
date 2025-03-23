import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-easy-problems',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './easy-problems.component.html',
  styleUrl: './easy-problems.component.less'
})
export class EasyProblemsComponent {

}
