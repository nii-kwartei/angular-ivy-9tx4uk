import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.css']
})
export class WishlistButtonComponent {
  @Input() isWishlisted: boolean;
  wishlistLabel = 'Add To Wishlist';
  @Output() change = new EventEmitter();

  constructor() {}

  onClick() {
    this.wishlistLabel = this.isWishlisted
      ? 'Add To Wishlist'
      : 'Added To Wishlist';
    this.isWishlisted = !this.isWishlisted;
    this.change.emit({ newValue: this.isWishlisted });
  }
}

export interface WishlishChangedEventArgs {
  newValue: boolean;
}
