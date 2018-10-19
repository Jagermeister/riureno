import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {
    days: CalendarDay[];
    dayOffset: number;

    constructor(private eventService: EventService) {
        this.dayOffset = 0;
    }

    ngOnInit() {
        this.eventService.fetchEvents()
            .subscribe(days => this.days = days);
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
    }

    onName(name: string) {
        const lowerName = name.toLowerCase();
        this.days.map(d => 
            d.events.map(e =>
                e.isFiltered = e.name.toLowerCase().indexOf(lowerName) === -1
        ));
    }

    onNext(): void {
        this.dayOffset++;
    }

    onPrev(): void {
        this.dayOffset--;
        if (this.dayOffset < 0) {
            this.dayOffset = 0;
        }
    }
}