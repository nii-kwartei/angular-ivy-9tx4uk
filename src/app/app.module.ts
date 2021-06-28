import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WishlistButtonComponent } from './wishlist-button/wishlist-button.component';
import { WishlistService } from './wishlist.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, WishlistButtonComponent],
  bootstrap: [AppComponent],
  providers: [WishlistService]
})
export class AppModule {}
