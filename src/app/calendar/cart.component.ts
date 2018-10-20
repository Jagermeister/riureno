import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart.service';

@Component({
    selector: 'app-cart',
    template: `
        <div *ngIf="entryCount" onclick="copyToClipboard(window.location.href)" style="padding: 4px; text-align: center; width: 100%; text-decoration: underline;">
            <!--span style="float:left">Schedule:</span-->
            <span id="cartInfo"><b>{{entryCount}}</b> Entries in <b>{{eventCount}}</b> Events for <b>\${{buyInTotal | number : '1.0-0'}}</b></span>
            <mat-icon>file_copy</mat-icon>
        </div>
    `,
    styles: [
        `div {
            background: cornflowerblue;
            color: black;
        }`,
        `#cartInfo { cursor: pointer; }`,
        `mat-icon { height: 20px; cursor: pointer; vertical-align: top; }`,
        `
            @media screen and (min-width: 640px) {
                #cartInfo {
                    font-size: 1.25em;
                }
            }
            @media screen and (min-width: 960px) {
                #cartInfo {
                    font-size: 1.75em;
                }
            }
        `
    ]
})
export class CartComponent implements OnInit {
    entryCount: number;
    eventCount: number;
    buyInTotal: number;
    url: string;

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