import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { CartService } from './cart.service';

@Component({
    selector: 'app-event-detail',
    template: `
    {{event.name}}
    <span *ngIf="event.identifier" style="float: right;">(Event #{{event.identifier}})</span>
    <ng-container *ngIf="event.buyin && !event.buyin.isCash && !event.buyin.isInvitational">
        <br/><b>Are you playing?</b>
        BuyIns:
        <ul id="buyins">
            <li><button mat-mini-fab
                (click)="remove()"
                [color]="entryCount == 0 ? 'primary' : ''">Out</button></li>
            <li><button mat-mini-fab
                (click)="update(1)"
                [color]="entryCount == 1 ? 'primary' : ''">1</button></li>
            <li><button mat-mini-fab
                (click)="update(2)"
                [color]="entryCount == 2 ? 'primary' : ''">2</button></li>
            <li><button mat-mini-fab
                (click)="update(3)"
                [color]="entryCount == 3 ? 'primary' : ''">3</button></li>
        </ul>
    </ng-container>
    <ul *ngIf="event.notes">
        <li *ngFor="let note of event.notes">{{note}}</li>
    </ul>
    <hr/>
    <ul *ngIf="event.prizes">
        <li *ngFor="let prize of event.prizes">{{prize}}</li>
    </ul>
    `,
    styles: [
        `ul {
            padding: 0;
        }`,
        `#buyins {list-style-type: none; display: inline-flex;}`,
        `#buyins > li { padding: 0 5px; cursor: pointer; }`
    ]
})
export class EventDetailComponent implements OnInit {
    event: CalendarEvent;
    entryCount: number;

    constructor(
        dialogRef: MatDialogRef<EventDetailComponent>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private cartService: CartService
    ) {
        this.event = data.event;
        this.entryCount = this.cartService.fetchEntryCount(this.event.key);
    }

    ngOnInit() {

    }

    update(entries: number) {
        this.entryCount = entries;
        this.cartService.update(this.event, entries);
    }

    remove() {
        this.entryCount = 0;
        this.cartService.remove(this.event);
    }
}