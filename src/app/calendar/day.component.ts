import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-day',
    template: `
    <ul>
        <li style="padding: 0 3em;">
            <div style="width: 100%; text-align: center;">
                {{day.name | uppercase}}
            </div>
            <div>{{day.date | date}}</div>
        </li>
    </ul>
    <hr/>
    <div id="day">
        <div id="time" style="width: 25px; font-size: 14px;">
            <div *ngFor="let hour of hours" style="height: 45px;">{{('0'+hour.toString()).substr(-2, 2)}}</div>
        </div>
        <div id="events">
            <app-event *ngFor="let event of day.events"
                [event]="event"></app-event>
        </div>
    </div>`,
    styles: [
        `#day {
            display: flex;
            flex-shrink: 0;
            width: 100%;
            position: relative;
            overflow-x: 
        }`,
        '#time { /*flex: none;*/ height: auto; border-right: 1px white solid; }',
        `#events {
            /*display: flex;
            align-items: flex-start;*/
            position: relative;
            flex-shrink: 1;
            height: auto;
            width: 100%;
            overflow-y: hidden;
            margin-left: 3px;
        }`,
        `mat-icon { cursor: pointer; }`,
        `
        ul {
            padding-inline-start: 0px;
            -webkit-padding-start: 0px;
            display: inline-block;
            margin: 4px 0;
            text-align: center;
            font-size: 1em;
            transition: .2s font-size ease-in;
            width: 100%;
        }

        ul > li {
            display: inline-block;
        }
        `,
        `
        hr {
            border: 0;
            height: 1px;
            margin-block-start: 0;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
        }
        `
    ]
})
export class DayComponent implements OnInit {
    @Input() day: CalendarDay;
    @Input() next: () => void;
    @Input() prev: () => void;
    hours: number[];

    constructor() {
        this.hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }

    ngOnInit() {

    }

}