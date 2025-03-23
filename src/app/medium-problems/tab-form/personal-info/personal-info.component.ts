import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.less'
})
export class PersonalInfoComponent {
  formGroup!:FormGroup
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
}
