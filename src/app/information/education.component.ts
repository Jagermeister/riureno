import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-education',
    template: `
    <h2>Education</h2>
    <hr/>
    <ul>
        <li><a href="./assets/RIU-Reno-October-2018-Structures-1.pdf"><mat-icon>picture_as_pdf</mat-icon> Structures</a></li>
        <li><a href="https://www.twitch.tv/videos/93385861"><mat-icon svgIcon="twitch"></mat-icon> HORSE Final Table Review</a> with Daniel Negrenanu</li>
        <li><a href="./assets/taiwanese.png"><mat-icon>image</mat-icon> Taiwanese Poker</a></li>
    </ul>
    `,
    styles: [
        'ul { padding-inline-start: 10px }',
        `mat-icon { color: purple; }`,
    ]
})
export class EducationComponent implements OnInit {

    constructor(
        dialogRef: MatDialogRef<EducationComponent>
    ) {
    }

    ngOnInit() {

    }
}