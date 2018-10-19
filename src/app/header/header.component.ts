import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EducationComponent } from '../information/education.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    onEducation() {
        const dialogRef = this.dialog.open(EducationComponent);
    }

}