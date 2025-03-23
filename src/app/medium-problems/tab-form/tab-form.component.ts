import { Component } from '@angular/core';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-form.component.html',
  styleUrl: './tab-form.component.less'
})
export class TabFormComponent {
  activeTab = 0;
  tabs = [
    {
      name: "Account Details ",
      component: AccountDetailsComponent,
      data : {
        name:"sruthi"
      }
    },
    {
      name: "Personal Info",
      component: PersonalInfoComponent,
      data : {
        
      }
    },
    {
      name: "Preferences",
      component: PreferencesComponent,
      data : {
        
      }
    }
  ]

  selectTab(index: number) {
    this.activeTab = index;
  }
}
