import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from '../components/album/album.component';
import { CartComponent } from '../components/cart/cart.component';
import { WishlistComponent } from '../components/wishlist/wishlist.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RatingComponent } from '../components/rating/rating.component';
import { ProductComponent } from '../components/product/product.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { CrumbNavComponent } from '../components/crumb-nav/crumb-nav.component';
import { HeaderComponent } from '../components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { routingComponents } from './app-routing.module';
import { CartPageComponent } from '../components/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    CartComponent,
    WishlistComponent,
    FooterComponent,
    RatingComponent,
    ProductComponent,
    CarouselComponent,
    CrumbNavComponent,
    HeaderComponent,
    routingComponents,
    HomeComponent,
    CartPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
