import { Component, VERSION } from '@angular/core';
import { WishlishChangedEventArgs } from './wishlist-button/wishlist-button.component';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  post = {
    title: 'Title',
    isWishlisted: false
  };

  wishlist = {};

  constructor(private service: WishlistService) {}

  onWishlistChanged(eventArgs: WishlishChangedEventArgs) {
    console.log('Wishlist Changed: ', eventArgs);
    this.service.postWishlist(eventArgs);
  }
}
