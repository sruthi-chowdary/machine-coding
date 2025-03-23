import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { EasyProblemService } from '../easy-problem.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.less'
})
export class AutocompleteComponent implements OnInit {
  constructor(private readonly easyProblemService:EasyProblemService){
    
  }
  searchControl = new FormControl('');
  searchedData:any;

  ngOnInit(){
    this.search();
  }
  search(){
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((ele)=>{
        return ele ? this.fetchData(ele):of([]);
      })
    ).subscribe((data:any)=>{
      console.log(data);
      this.searchedData=data.products
    })
  }
  fetchData(query: string): Observable<any[]> {
    return this.easyProblemService.searchProducts(query);
  }
}
