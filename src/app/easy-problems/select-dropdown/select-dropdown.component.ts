import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.less'
})
export class SelectDropdownComponent {
  @ViewChildren('dropdownOption') dropdownOptions: QueryList<ElementRef> | undefined;
  @Input() items: { key: any; value: string }[] = [
    { key: 1, value: 'One' },
    { key: 2, value: 'Two' },
    { key: 3, value: 'Three' },
    { key: 4, value: 'Four' },
    { key: 5, value: 'Five' },
    { key: 6, value: 'Six' },
    { key: 7, value: 'Seven' },
    { key: 8, value: 'Eight' },
  ];
  @Input() width: string = '215px';
  openDropdown: boolean = false;
  @Input() selectOneOnly: boolean = false;
  @Input() deSelectTap: boolean = true;
  @Output() selected = new EventEmitter();
  @Input() values: any[] = ['edd','refd'];
  @Input() title: string = 'test';
  toggleDropdown() {
    this.openDropdown = !this.openDropdown;
  }
  leave() {
    this.openDropdown = false;
  }
  selectItem(index: number) {
    const selectedKey = this.items[index].key;
    this.leave();
    if (this.selectOneOnly) {
      if (this.values.includes(selectedKey)) {
        this.values.splice(0);
        if (this.deSelectTap) {
          this.values.push(selectedKey);
        }
      } else {
        this.values.splice(0);
        this.values.push(selectedKey);
      }
      this.openDropdown = false;
    } else {
      if (this.values.includes(selectedKey)) {
        if (!this.deSelectTap) {
          const selectedIndex = this.values.indexOf(selectedKey);
          this.values.splice(selectedIndex, 1);
        }
      } else {
        this.values.push(selectedKey);
      }
    }
    this.selected.emit(selectedKey);
    
  }
  toggleOnKeyEnter(){
    this.openDropdown = !this.openDropdown;
    if (this.openDropdown) {
      setTimeout(() => {
          this.focusFirstOption();
      });
    }
  }
  focusFirstOption() {
    const firstOption = this.dropdownOptions?.first;
    if (firstOption) {
      firstOption.nativeElement.focus();
    }
  }
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const target = event.target as HTMLElement;
      if (target.getAttribute('data-last') === 'true' && !event.shiftKey) {
        this.closeDropdown();
      }
    }
  }

  closeDropdown() {
    this.openDropdown = false;
  }
}
