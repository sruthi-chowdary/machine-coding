import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-folders-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './folders-list.component.html',
  styleUrl: './folders-list.component.less'
})
export class FoldersListComponent {
  @Input() fileData:any;
  name:any;
  toggleExpand(item:any){
    item.isExpanded = !item.isExpanded;
  }
  create(item:any, val:boolean){
    this.fileData.forEach((ele: any) => {
      if (ele.id === item.id) {
        if (ele?.children?.length > 0) {
          ele.children.push( { isFolder: val })
        } else {
          console.log("inside")
          ele.children = [{ isFolder: val }];
        }
      }
    });
  }

  saveValue(item:any){
    if(item.tempName){
      item.name = item.tempName.trim();
    } else {
      item.name = 'Untitled'
    }
  }
}
