import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
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
import { ProductPageComponent } from './product-page/product-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';

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
    ProductPageComponent,
    routingComponents,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
