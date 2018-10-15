import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-day',
    template: `
    <div id="day">
        {{day.name | uppercase}}
        <div style="width: 25px; font-size: 14px;">
            <div *ngFor="let hour of hours" style="height: 50px;">{{hour}}</div>
        </div>
        <div style="width: 100%;">
            <app-event *ngFor="let event of day.events"
                [event]="event"></app-event>
        </div>
    </div>`,
    styles: [
        'app-event.horizontal { display: inline-block; }',
        '#day.horizontal { height: 100px; }',
        'app-event { display: block; }',
        '#day { width: 300px; display: inline-block; }'
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