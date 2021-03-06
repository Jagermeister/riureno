import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../app.module';

import { CalendarComponent } from './calendar.component';
import { DayComponent } from './day/day.component';
import { EventComponent } from './event/event.component';
import { FilterComponent } from './filtering/filter.component';
import { EventDetailComponent } from './event/details/event-detail.component';

import { EventService } from './event/event.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

const calendarRoutes: Routes = [{ path: '', component: CalendarComponent }];

@NgModule({
  declarations: [CalendarComponent, CartComponent, DayComponent, EventComponent, EventDetailComponent, FilterComponent],
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule.forChild(calendarRoutes)],
  providers: [CartService, EventService],
  entryComponents: [EventDetailComponent]
})
export class CalendarModule {}
