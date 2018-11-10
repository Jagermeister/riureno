import { EventEmitter, Output, Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-filter',
  template: `
    <h4>Filters</h4>
    Name: <input #name (keyup)="onNameKeyUp(name.value)" /><!--
      ValueMin: <input #valuemin (keyup)="onValueMinKeyUp(valuemin.value)">


      ValueMax: <input #valuemax (keyup)="onValueMaxKeyUp(valuemax.value)">
    -->
  `
})
export class FilterComponent {
  @Output() name = new EventEmitter<string>();
  @Output() valuemin = new EventEmitter<number>();
  @Output() valuemax = new EventEmitter<number>();

  onNameKeyUp(name: string) {
    this.name.emit(name);
  }

  onValueMinKeyUp(value: string) {
    if (isNumber(+value)) {
      this.valuemin.emit(parseFloat(value));
    }
  }
  onValueMaxKeyUp(value: string) {
    if (isNumber(+value)) {
      this.valuemax.emit(parseFloat(value));
    }
  }
}
