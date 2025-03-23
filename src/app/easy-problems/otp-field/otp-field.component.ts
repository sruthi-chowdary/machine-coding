import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-otp-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otp-field.component.html',
  styleUrl: './otp-field.component.less'
})
export class OtpFieldComponent {
  readonly fieldId: string;
  @Input() digitCount: number = 6;
  @Input() error?: string;
  @Output() errorChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() value?: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEnter: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.fieldId = Math.random().toString(36).substring(2, 9);
  }

  ngOnInit(): void {}

  onKeyUp(event: KeyboardEvent, cellIndex: number) {
    if (event.key === 'Enter') {
      console.log("inside enter")
      // event.preventDefault();
      // event.stopPropagation();
      // event.stopImmediatePropagation();
      // if (this.value?.length == this.digitCount) {
      //   this.onEnter.emit();
      // }
      // return;
    }
    let { value: inputValue } = event.target as HTMLInputElement;
    if (event.code?.includes('Digit') || event.code?.includes('Numpad')) {
      const nextCell = document.getElementById(
        `${this.fieldId}optCell#${cellIndex + 1}`
      ) as HTMLInputElement;
      nextCell?.focus();
      nextCell?.select();
    } else if (inputValue.length == 1 && !parseInt(inputValue)) {
      const targettedCell = event.target as HTMLInputElement;
      targettedCell.value = '';
    } else if (event.code === 'Backspace' && inputValue.length == 0) {
      const prevCell = document.getElementById(
        `${this.fieldId}optCell#${cellIndex - 1}`
      ) as HTMLInputElement;
      prevCell?.focus();
      prevCell?.select();
    }
    this.onChange();
  }

  onChange() {
    let otpValue: string = '';
    for (let i = 0; i < this.digitCount; i++) {
      const cell = document.getElementById(
        `${this.fieldId}optCell#${i}`
      ) as HTMLInputElement;
      otpValue += cell.value;
    }
    if (this.value != otpValue) {
      this.error = '';
      this.errorChange.emit('');
    }
    if (otpValue.length == this.digitCount) {
      this.value = otpValue;
      this.valueChange.emit(otpValue);
    } else if (this.value != '') {
      this.value = '';
      this.valueChange.emit('');
    }
  }

  clearInput(){
    for (let i = 0; i < this.digitCount; i++) {
      const cell = document.getElementById(
        `${this.fieldId}optCell#${i}`
      ) as HTMLInputElement;
      cell.value = '';
    }
    this.value = '';
    this.valueChange.emit('');
  }
}
