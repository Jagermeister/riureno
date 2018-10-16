import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-day',
    template: `
    <div id="day">
        {{day.name | uppercase}}
        <div id="time" style="width: 25px; font-size: 14px;">
            <div *ngFor="let hour of hours" style="height: 50px;">{{hour}}</div>
        </div>
        <div id="events" style="width: 100%;">
            <app-event *ngFor="let event of day.events"
                [event]="event"></app-event>
        </div>
    </div>`,
    styles: [
        '#day { width: 300px; flex: 1 1 auto; display: flex; }',
        '#time { flex: none; height: auto; }',
        `#events {
            display: flex;
            align-items: flex-start;
            position: relative;
            height: auto;
            width: 100%;
        }`
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