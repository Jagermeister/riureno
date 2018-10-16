import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { DayComponent } from './day.component';
import { EventComponent } from './event.component';
import { MaterialModule } from '../app.module';
import { EventService } from './event.service';
import { FilterComponent } from './filtering/filter.component';

const calendarRoutes: Routes = [
    { path: '', component: CalendarComponent }
];

@NgModule({
  declarations: [
      CalendarComponent,
      DayComponent,
      EventComponent,
      FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(calendarRoutes)
  ],
  providers: [
      EventService
  ]
})
export class CalendarModule { }
