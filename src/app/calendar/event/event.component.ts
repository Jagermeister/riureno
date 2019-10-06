import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailComponent } from './details/event-detail.component';
import { CartService } from '../cart/cart.service';

// [style.width.px]="250 - offset*10"
// [style.marginLeft.px]="30 + offset*10"
/*
            'width': '-moz-calc(100% - ' + ((event.dayTrack?event.dayTrack:0)*10 + 5) + 'px)',
            'width': '-webkit-calc(100% - ' + ((event.dayTrack?event.dayTrack:0)*10 + 5) + 'px)',
            'width': '-o-calc(100% - ' + ((event.dayTrack?event.dayTrack:0)*10 + 5) + 'px)',
            */

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: CalendarEvent;
  durationOffset: number;
  widthEst: number;
  isInCart: boolean;

  constructor(private dialog: MatDialog, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.addedEventKey.subscribe({
      next: key => {
        if (key > 0 && key === this.event.key) {
          this.isInCart = true;
        }
      }
    });
    this.cartService.removedEventKey.subscribe({
      next: key => {
        if (key > 0 && key === this.event.key) {
          this.isInCart = false;
        }
      }
    });
    this.durationOffset = (this.event.time.hours - 10 + this.event.time.minutes / 60) * 45;
    if (this.event.duration) {
      const duration = this.event.duration;
      this.widthEst = ((duration.hours + duration.minutes / 60) / 14) * 100;
    }
  }

  showDetail() {}

  get buyinFormat(): string {
    let buyin = '';
    if (this.event.buyin) {
      const eventBuyin = this.event.buyin;
      buyin = `$${eventBuyin.prize}+$${eventBuyin.total - eventBuyin.prize}`;
      if (eventBuyin.rebuy) {
        buyin = `${buyin} [+$${eventBuyin.rebuy} Rebuy]`;
      }
    }

    return buyin;
  }

  get offset(): number {
    return this.event.dayTrack ? this.event.dayTrack : 0;
  }

  get lateRegFormat(): string {
    const lateReg = this.lateRegistration;
    if (this.event.time.hours === lateReg.hours && this.event.time.minutes === lateReg.minutes) {
      return '';
    } else {
      return `${lateReg.hours}:${lateReg.minutes < 10 ? '0' : ''}${lateReg.minutes}`;
    }
  }

  get lateRegistration(): Time {
    let lastRegistrationTime = Object.assign({}, this.event.time),
      regLevelClose = this.event.registrationLevelClose - 1;

    if (regLevelClose && this.event.format.levelMinutes) {
      let breakMinutes = this.event.format.levelPerBreak
          ? Math.floor(regLevelClose / this.event.format.levelPerBreak) * this.event.format.breakMinutes
          : 0,
        minutes: number = this.event.format.levelMinutes * regLevelClose + breakMinutes;
      lastRegistrationTime.hours += Math.floor(minutes / 60);
      lastRegistrationTime.minutes += minutes % 60;
      if (lastRegistrationTime.minutes > 59) {
        lastRegistrationTime.minutes -= 60;
        lastRegistrationTime.hours += 1;
      }
    }

    return lastRegistrationTime;
  }
}
