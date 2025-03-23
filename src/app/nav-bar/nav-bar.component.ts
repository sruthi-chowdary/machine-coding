import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.less'
})
export class NavBarComponent {
  isLeftSideBarCollapsed:boolean = false;
  // changeIsLeftSideBarCollapsed = output<boolean>();
  items =[
    {
      routerLink: 'dashboard',
      icon: 'fa-solid fa-house',
      label : 'Dahboard'
    },
    {
      routerLink: 'easy',
      icon: 'fa-solid fa-umbrella-beach',
      label : 'Easy'
    },
    {
      routerLink: 'medium',
      icon: '"fa-solid fa-user-shield',
      label : 'Medium'
    },
    {
      routerLink: 'hard',
      icon: 'fa-solid fa-lock',
      label : 'Hard'
    },
    {
      routerLink: 'machine-coding',
      icon: 'fa-solid fa-lock',
      label : 'Machine Coding'
    },
  ];
  toggleCollapse(){
    this.isLeftSideBarCollapsed = !this.isLeftSideBarCollapsed;
    // this.changeIsLeftSideBarCollapsed.emit(!this.isLeftSideBarCollapsed())
  }
  closeSideBar(){
    this.isLeftSideBarCollapsed=true
    // this.changeIsLeftSideBarCollapsed.emit(true)
  }
}
