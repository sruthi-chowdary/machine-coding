import { Component, OnInit } from '@angular/core';
import { FileExplorerComponent } from "./file-explorer/file-explorer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { MCodingServiceService } from './m-coding-service.service';

@Component({
  selector: 'app-machine-coding',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  providers: [MCodingServiceService],
  templateUrl: './machine-coding.component.html',
  styleUrl: './machine-coding.component.less'
})
export class MachineCodingComponent implements OnInit{
 ngOnInit(){
  // console.log("dummy", dummyData);
 }
}
