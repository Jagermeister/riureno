import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-event',
    template: `
    <div style="position: fixed;"
        [style.left]="leftOffset+'%'"
        [style.width]="widthEst+'%'"
        [ngClass]="event.type ? event.type : 'card'">
    <div *ngIf="event.buyin">$<span>{{event.buyin.total}}</span></div>
    {{event.name}}
    </div>
    `,
    styles: [
        `div.card { 
            background: linear-gradient(to right, #6200ee, #2d2c33);
            border-radius: 2px;
            padding: 4px;
        }`,
        `div.social { 
            background: linear-gradient(to right, green, #2d2c33);
            border-radius: 2px;
            padding: 4px;
        }`,
        `div.charity { 
            background: linear-gradient(to right, gold, #2d2c33);
            border-radius: 2px;
            padding: 4px;
        }`,
    ]
})
export class EventComponent implements OnInit {
    @Input() event: CalendarEvent;
    leftOffset: number;
    widthEst: number;

    constructor() { }

    ngOnInit() {
        this.leftOffset = ((this.event.time.hours - 10) / 14) * 100;
        if (this.event.duration) {
            const duration = this.event.duration;
            this.widthEst = ((duration.hours + duration.minutes/60) / 14) * 100;
        }
    }

    get buyinFormat(): string {
        var buyin: string = "";
        if (this.event.buyin) {
            const eventBuyin = this.event.buyin;
            buyin = `$${eventBuyin.prize}+$${eventBuyin.total - eventBuyin.prize}`;
            if (eventBuyin.rebuy) {
                buyin = `${buyin}[+$${eventBuyin.rebuy}R]`;
            }
        }

        return buyin;
    }

}