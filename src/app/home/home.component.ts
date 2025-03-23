import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
