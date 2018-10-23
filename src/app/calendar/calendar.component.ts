import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {
    days: CalendarDay[];
    dayOffset: number;
    leftDay: number;
    @ViewChild('dayFrame') divDayFrame;

    constructor(private eventService: EventService) {
        this.leftDay = 0;
    }

    ngOnInit() {
        this.eventService.fetchEvents()
            .subscribe(days => {
                this.days = days;
                const today = new Date();
                const filteredDays = days.filter(d =>
                        d.date.getUTCFullYear() == today.getUTCFullYear()
                    &&  d.date.getUTCMonth() == today.getUTCMonth()
                    &&  d.date.getUTCDate() == today.getUTCDate()
                );
                if (filteredDays.length == 1) {
                    this.leftDay = days.indexOf(filteredDays[0]) - 1;
                }
                this.dayOffset = this.leftDay * this.computedMaxWidth();
            });
    }

    onResize(event) {
        // Determine day previously inview, readjust
        // dayOffset to match when max-width has updated.
        const slidePercentage = this.computedMaxWidth();
        this.dayOffset = this.leftDay * slidePercentage;
    }

    onName(name: string) {
        const lowerName = name.toLowerCase();
        this.days.map(d => 
            d.events.map(e =>
                e.isFiltered = e.name.toLowerCase().indexOf(lowerName) === -1
        ));
    }

    computedMaxWidth(): number {
        const elementWidth: string = window.getComputedStyle(this.divDayFrame.nativeElement).width;
        const width: number = parseInt(elementWidth.substring(0, elementWidth.length - 2))
        const slidePercentage = width > 960 ?
            33.33 : (
                width > 640 ?
                50 :
                100
            );
        return slidePercentage;
    }

    onNext(): void {
        const dayWidth = this.computedMaxWidth();
        this.dayOffset += dayWidth;
        this.leftDay++;
    }

    onPrev(): void {
        const dayWidth = this.computedMaxWidth();
        this.dayOffset -= dayWidth;
        this.leftDay--;
        if (this.dayOffset < 0) {
            this.dayOffset = 0;
            this.leftDay = 0;
        }
    }
}