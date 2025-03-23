import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MCodingServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFilesData(){
    return this.httpClient.get('http://localhost:3000/fileExplorer')
  }
}
