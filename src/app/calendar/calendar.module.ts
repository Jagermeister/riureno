import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { DayComponent } from './day.component';
import { EventComponent } from './event.component';
import { MaterialModule } from '../app.module';

const calendarRoutes: Routes = [
    { path: '', component: CalendarComponent }
];

@NgModule({
  declarations: [
      CalendarComponent,
      DayComponent,
      EventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(calendarRoutes)
  ],
  providers: [
  ]
})
export class CalendarModule { }
