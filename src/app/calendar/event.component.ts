import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EventDetailComponent } from './eventdetail.component';

//[style.width.px]="250 - offset*10"
//[style.marginLeft.px]="30 + offset*10"
/*
            'width': '-moz-calc(100% - ' + ((event.dayTrack?event.dayTrack:0)*10 + 5) + 'px)',
            'width': '-webkit-calc(100% - ' + ((event.dayTrack?event.dayTrack:0)*10 + 5) + 'px)',
            'width': '-o-calc(100% - ' + ((event.dayTrack?event.dayTrack:0)*10 + 5) + 'px)',
            */

@Component({
    selector: 'app-event',
    template: `
    <div id="event"
        (click)="showDetail()"
        [ngStyle]="{
            'width': 'calc(100% - ' + ((event.dayTrack?event.dayTrack:0)*10 + 5) + 'px)'
        }"
        [style.top.px]="durationOffset"
        [style.marginLeft.px]="offset*10"
        [style.height]="widthEst+'%'"
        [style.opacity]="event.isFiltered ? 0.2 : 1"
        [ngClass]="event.type ? event.type : 'card'">
        <div style="text-align: center; height: 1.4em;"
            *ngIf="event.buyin && !event.buyin.isCash && !event.buyin.isInvitational">
            <span style="float: left;">
                {{buyinFormat}}
            </span>
            <span style="float: left;" *ngIf="event.buyin && event.buyin.bounty">
                <mat-icon matTooltipClass="mat-tooltip-default" matTooltip="Bounty" style="transform: rotate(45deg); height: 20px;">fullscreen_exit</mat-icon>$\{{event.buyin.bounty}}
            </span>
            <span id="gtd" *ngIf="event.gtd">
                [\${{event.gtd.prize}}k GTD]
            </span>
            <span *ngIf="event.registrationLevelClose && event.format.levelMinutes" style="float: right;">
                <mat-icon matTooltipClass="mat-tooltip-default" matTooltip="Registration End Time" style="height: 20px;">timelapse</mat-icon>{{lateRegFormat}}
            </span>
        </div>
        <span *ngIf="event.buyin && event.buyin.isCash">
            <mat-icon matTooltipClass="mat-tooltip-default" matTooltip="Cash Game">attach_money</mat-icon>
        </span>
        <span *ngIf="event.isLiveCoverage" style="padding-right: 6px;">
            <mat-icon matTooltipClass="mat-tooltip-default" matTooltip="Live Stream" svgIcon="twitch"></mat-icon>
        </span>
        <span *ngIf="event.satellite" style="padding-right: 6px;">
            <mat-icon matTooltipClass="mat-tooltip-default" matTooltip="Satellite" svgIcon="satellite"></mat-icon>
        </span>
        {{event.name}}
        <span *ngIf="event.subtitle">({{event.subtitle}})</span>
        <span *ngIf="event.identifier" style="float: right;">(#{{event.identifier}})&nbsp;</span>
        <span style="float: right;" *ngIf="event.buyin && event.buyin.isInvitational">
            <mat-icon matTooltipClass="mat-tooltip-default" matTooltip="Qualify/Invite Only">lock</mat-icon>
        </span>
        <span *ngIf="event.gameType=='Mixed Game'">
            <mat-icon matTooltipClass="mat-tooltip-default" matTooltip="Mixed Game">casino</mat-icon>
        </span>
    </div>
    `,
    styles: [
        `#event {
            position: absolute;
            cursor: pointer;
        }`,
        '/deep/ .mat-tooltip-default { font-size: 18px; }',
        'mat-icon { vertical-align: middle; }',
        `div.card { 
            background: linear-gradient(135deg, #6200ee, rgba(45,44,51, 0) 66%);
            border-radius: 4px;
        }`,
        `div.social { 
            background: linear-gradient(135deg, green, rgba(45,44,51, 0) 66%);
            border-radius: 4px;
        }`,
        `div.charity { 
            background: linear-gradient(135deg, gold, rgba(45,44,51, 0) 66%);
            border-radius: 4px;
            color: black;
        }`,
        `div.MainEvent { 
            background: linear-gradient(135deg, #3F51B5, rgba(45,44,51, 0) 66%),
                        linear-gradient(200deg, #2196F3, rgba(45,44,51, 0) 35%);
            border-radius: 4px;
        }`,
        `#gtd {
            font-size: 1.1em;
            color: #00f742;
            padding: 0 10px;
        }`,
    ]
})
export class EventComponent implements OnInit {
    @Input() event: CalendarEvent;
    durationOffset: number;
    widthEst: number;

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
        this.durationOffset = (this.event.time.hours - 10) * 45;
        if (this.event.duration) {
            const duration = this.event.duration;
            this.widthEst = ((duration.hours + duration.minutes/60) / 14) * 100;
        }
    }

    showDetail() {        
        const dialogRef = this.dialog.open(EventDetailComponent, {
            /*width: '250px',*/
            data: { event: this.event }
        });
    }

    get buyinFormat(): string {
        var buyin: string = "";
        if (this.event.buyin) {
            const eventBuyin = this.event.buyin;
            buyin = `$${eventBuyin.prize}+$${eventBuyin.total - eventBuyin.prize}`;
            if (eventBuyin.rebuy) {
                buyin = `${buyin} [+$${eventBuyin.rebuy} Rebuy]`;
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
            return `${lateReg.hours}:${lateReg.minutes < 10 ? '0': ''}${lateReg.minutes}`;
        }
    }

    get lateRegistration(): Time {
        var lastRegistrationTime = Object.assign({}, this.event.time),
            regLevelClose = this.event.registrationLevelClose - 1;

        if (regLevelClose && this.event.format.levelMinutes) {
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