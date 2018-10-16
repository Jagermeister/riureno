import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    days: CalendarDay[];

    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.eventService.fetchEvents()
            .subscribe(days => this.days = days);
    }

    onName(name: string) {
        const lowerName = name.toLowerCase();
        this.days.map(d => 
            d.events.map(e =>
                e.isFiltered = e.name.toLowerCase().indexOf(lowerName) === -1
        ));
    }
}