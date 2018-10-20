import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart.service';

@Component({
    selector: 'app-cart',
    template: `
        <div *ngIf="entryCount" style="text-align: center; width: 100%;">
            Schedule: <span><b>{{entryCount}}</b> Entries in <b>{{eventCount}}</b> Events for <b>\${{buyInTotal | number : '1.0-0'}}</b></span>
        </div>
    `,
    styles: [
        `div {
            background: cornflowerblue;
            color: black;
        }`
    ]
})
export class CartComponent implements OnInit {
    entryCount: number;
    eventCount: number;
    buyInTotal: number;

    constructor(private cartService: CartService) {
        cartService.entryCount.subscribe({
            next: v => this.entryCount = v
        });
        cartService.eventCount.subscribe({
            next: v => this.eventCount = v
        });
        cartService.buyInTotal.subscribe({
            next: v => this.buyInTotal = v
        });
    }

    ngOnInit() {

    }
}