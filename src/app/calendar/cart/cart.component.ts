import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {
  entryCount: number;
  eventCount: number;
  buyInTotal: number;
  url: string;

  constructor(private cartService: CartService) {
    cartService.entryCount.subscribe({
      next: v => (this.entryCount = v)
    });
    cartService.eventCount.subscribe({
      next: v => (this.eventCount = v)
    });
    cartService.buyInTotal.subscribe({
      next: v => (this.buyInTotal = v)
    });
  }

  ngOnInit() {}
}
