import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MCodingServiceService } from '../m-coding-service.service';
import { FoldersListComponent } from "../folders-list/folders-list.component";

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [FoldersListComponent],
  providers : [MCodingServiceService],
  templateUrl: './file-explorer.component.html',
  styleUrl: './file-explorer.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileExplorerComponent implements OnInit {
  fileData:any
  constructor(private mCodingServiceService: MCodingServiceService){
    this.mCodingServiceService.getFilesData().subscribe({
      next : (result)=>{
        this.fileData = result;
        console.log("result", result)
      }
    });
  }
  ngOnInit(){}
}
