import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-event-detail',
    template: `
    <ng-container *ngIf="event.identifier">
        Event #{{event.identifier}}:&nbsp;
    </ng-container>{{event.name}}
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
    ]
})
export class EventDetailComponent implements OnInit {
    event: CalendarEvent;

    constructor(
        dialogRef: MatDialogRef<EventDetailComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {
        this.event = data.event;
    }

    ngOnInit() {

    }
}