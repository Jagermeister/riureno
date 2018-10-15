import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';

@Component({
    selector: 'app-event',
    template: `
    <div style="position: fixed;"
        [style.width.px]="250 - offset*10"
        [style.marginLeft.px]="30 + offset*10"
        [style.top.px]="durationOffset"
        [style.height]="widthEst+'%'"
        [ngClass]="event.type ? event.type : 'card'">
    <div *ngIf="event.buyin">
        $<span>{{event.buyin.total}}</span>
        <span style="float: right;">{{lateRegFormat}}</span>
    </div>
    {{event.name}}
    </div>
    `,
    styles: [
        `div.card { 
            background: linear-gradient(135deg, #6200ee, rgba(45,44,51, 0) 66%);
            border-radius: 4px;
            padding: 4px;
        }`,
        `div.social { 
            background: linear-gradient(135deg, green, rgba(45,44,51, 0) 66%);
            border-radius: 4px;
            padding: 4px;
        }`,
        `div.charity { 
            background: linear-gradient(135deg, gold, rgba(45,44,51, 0) 66%);
            border-radius: 4px;
            padding: 4px;
            color: black;
        }`,
        `div.MainEvent { 
            background: linear-gradient(135deg, #3F51B5, rgba(45,44,51, 0) 66%),
                        linear-gradient(200deg, #2196F3, rgba(45,44,51, 0) 35%);
            border-radius: 4px;
            padding: 4px;
        }`,
    ]
})
export class EventComponent implements OnInit {
    @Input() event: CalendarEvent;
    durationOffset: number;
    widthEst: number;

    constructor() { }

    ngOnInit() {
        this.durationOffset = (this.event.time.hours - 10) * 50;
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

    get offset(): number {
        return this.event.dayTrack ? this.event.dayTrack : 0;
    }

    get lateRegFormat(): string {
        const lateReg = this.lateRegistration;
        if (this.event.time.hours == lateReg.hours
            && this.event.time.minutes == lateReg.minutes)
        {
            return "";   
        } else {
            return `LateReg: ${lateReg.hours}:${lateReg.minutes < 10 ? '0': ''}${lateReg.minutes}`;
        }
    }

    get lateRegistration(): Time {
        var lastRegistrationTime = Object.assign({}, this.event.time),
            regLevelClose = this.event.registrationLevelClose - 1;

        if (regLevelClose) {
            var breakMinutes: number = this.event.format.levelPerBreak
                ? Math.floor(regLevelClose / this.event.format.levelPerBreak) * this.event.format.breakMinutes
                : 0,
                minutes: number = this.event.format.levelMinutes * regLevelClose
                    + breakMinutes;
            lastRegistrationTime.hours += Math.floor(minutes / 60);
            lastRegistrationTime.minutes += minutes % 60;
            if (lastRegistrationTime.minutes > 59) {
                lastRegistrationTime.minutes -= 60;
                lastRegistrationTime.hours += 1;
            }
        }

        return lastRegistrationTime;
    }
}