import { Routes } from '@angular/router';
import { EasyProblemsComponent } from './easy-problems/easy-problems.component';
import { MediumProblemsComponent } from './medium-problems/medium-problems.component';
import { HardProblemsComponent } from './hard-problems/hard-problems.component';
import { HomeComponent } from './home/home.component';
import { AutocompleteComponent } from './easy-problems/autocomplete/autocomplete.component';
import { OtpFieldComponent } from './easy-problems/otp-field/otp-field.component';
import { SelectDropdownComponent } from './easy-problems/select-dropdown/select-dropdown.component';
import { MachineCodingComponent } from './machine-coding/machine-coding.component';
import { FileExplorerComponent } from './machine-coding/file-explorer/file-explorer.component';
import { TabFormComponent } from './medium-problems/tab-form/tab-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  {
    path: 'easy',
    component: EasyProblemsComponent,
    children: [
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'select', component: SelectDropdownComponent },
    ],
  },
  {
    path: 'medium',
    component: MediumProblemsComponent,
    children: [{ path: 'tabform', component: TabFormComponent }],
  },
  { path: 'hard', component: HardProblemsComponent },
  {
    path: 'machine-coding',
    component: MachineCodingComponent,
    children: [{ path: 'file-explorer', component: FileExplorerComponent }],
  },
];
