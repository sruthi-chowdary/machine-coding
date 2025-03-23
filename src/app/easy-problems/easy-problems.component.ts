import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";

@Component({
  selector: 'app-easy-problems',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HttpClientModule, ReactiveFormsModule, CommonModule, AutocompleteComponent],
  templateUrl: './easy-problems.component.html',
  styleUrl: './easy-problems.component.less'
})
export class EasyProblemsComponent {
  formGroup!: FormGroup;
  allItems: any[] = [];
  paginatedItems: any[] = [];
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;

  constructor(
    private formBuilder: FormBuilder
  ){

  }

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      firstName : this.formBuilder.control("", Validators.required),
      skills : this.formBuilder.array([
        this.formBuilder.control("", null),
      ])
    });
    this.allItems = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  

  }
  get skills(){
    return this.formGroup.get("skills") as FormArray;
  }

  addSkill(){
    this.skills.push(this.formBuilder.control("",null))
  }
  removeSkill(i:number){
    this.skills.removeAt(i)
  }
  onSubmit(){
    if(this.formGroup.valid){
      console.log("valid form");
    } else {
      console.log("invalid form");
    }
  }
  changePage(i:number){}

}
