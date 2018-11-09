import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: 'day.component.html',
  styleUrls: ['day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day: CalendarDay;
  @Input() next: () => void;
  @Input() prev: () => void;
  hours: number[];

  constructor() {
    this.hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  }

  ngOnInit() {}
}
