import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, NavBarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'small-projects';
  isLeftSideBarCollapsed  = signal<boolean>(false);
  changeIsLeftSideBarCollapsed(event:boolean):void{
    this.isLeftSideBarCollapsed.set(event);
  }
}
