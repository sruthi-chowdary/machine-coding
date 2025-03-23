import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EasyProblemService {

  constructor( private readonly HttpClient: HttpClient) { }

  searchProducts(searchWord:string){
    return this.HttpClient.get<any[]>(`https://dummyjson.com/products/search?q=${searchWord}`)
  }
}
