import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventService } from '../event/event.service';

declare interface CartItem {
  event: CalendarEvent;
  entryCount: number;
}

@Injectable()
export class CartService {
  private cart: { [key: string]: CartItem };
  entryCount: BehaviorSubject<number>;
  eventCount: BehaviorSubject<number>;
  buyInTotal: BehaviorSubject<number>;

  addedEventKey: ReplaySubject<number>;
  removedEventKey: BehaviorSubject<number>;

  maxBuyin = 3;
  paramKey = 's';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private eventService: EventService) {
    this.cart = {};
    this.entryCount = new BehaviorSubject(0);
    this.eventCount = new BehaviorSubject(0);
    this.buyInTotal = new BehaviorSubject(0);
    this.addedEventKey = new ReplaySubject(100);
    this.removedEventKey = new BehaviorSubject(0);

    const params = this.activatedRoute.snapshot.queryParams;
    if (this.paramKey in params) {
      this.populateCartByQuery(params[this.paramKey]);
    }
  }

  populateCartByQuery(parameters: string): void {
    const seeds = parameters.split(',');
    this.eventService.fetchEvents().subscribe(days => {
      const events: CalendarEvent[] = [].concat.apply([], days.map(d => d.events));
      if (seeds.length > 100) {
        return;
      }
      for (let i = 0; i < seeds.length; i++) {
        const seed: string = seeds[i];
        if (parseFloat(seed)) {
          const parts = seed.split('.');
          const key: number = parseInt(parts[0]);
          const entries: number = parseInt(parts[1]);
          const event = events.filter(e => e.key === key);
          if (event.length) {
            this.update(event[0], entries);
          }
        }
      }
    });
  }

  fetchEntryCount(eventKey: number): number {
    if (eventKey in this.cart) {
      return this.cart[eventKey].entryCount;
    }
    return 0;
  }

  update(event: CalendarEvent, entryCount: number): void {
    const key = event.key;
    if (!(key in this.cart)) {
      this.addedEventKey.next(key);
    }
    this.cart[key] = {
      event: event,
      entryCount: entryCount
    };
    this.calculate();
  }

  remove(event: CalendarEvent): void {
    const key = event.key;
    if (key in this.cart) {
      delete this.cart[key];
      this.removedEventKey.next(key);
      this.calculate();
    }
  }

  private calculate(): void {
    const values: CartItem[] = Object.values(this.cart);
    const entries: number = values.reduce((p, c) => p + c.entryCount, 0);
    const events: number = values.length;
    const buyins: number = values.reduce(
      (p, c) => p + c.event.buyin.total + (c.event.buyin.rebuy ? c.event.buyin.rebuy : c.event.buyin.total) * (c.entryCount - 1),
      0
    );

    if (entries !== this.entryCount.value) {
      this.entryCount.next(entries);
    }
    if (events !== this.eventCount.value) {
      this.eventCount.next(events);
    }
    if (buyins !== this.buyInTotal.value) {
      this.buyInTotal.next(buyins);
    }

    this.buildQueryParameters(values);
  }

  buildQueryParameters(values: CartItem[]): void {
    // const seed = values.map(c => (1 << c.entryCount) | (1 << (this.maxBuyin + c.event.key)))
    const seed = values.map(c => `${c.event.key}.${c.entryCount}`).reduce((p, c) => p + ',' + c, '');

    const queryParams: Params = {};
    queryParams[this.paramKey] = seed;
    this.router.navigate(['.'], { queryParams: queryParams });
  }
}
