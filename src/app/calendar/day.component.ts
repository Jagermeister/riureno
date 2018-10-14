import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-day',
    template: `
    <div id="day">
    imma day {{day.name}}
    <div style="width: 100%; display: inline-block; font-size: 14px;">
        <div *ngFor="let hour of hours" style="width: 7%; display: inline-block;">{{hour}}</div>
    </div>
    <div style="width: 100%; display: inline-block;">
        <app-event *ngFor="let event of day.events" [event]="event"></app-event>
    </div>
    </div>`,
    styles: [
        'app-event { display: inline-block; }',
        '#day { height: 100px; }'
    ]
})
export class DayComponent implements OnInit {
    @Input() day: CalendarDay;
    hours: number[];

    constructor() {
        this.hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }

    ngOnInit() {

    }

}