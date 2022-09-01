import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from '../components/album/album.component';
import { CartComponent } from '../components/cart/cart.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RatingComponent } from '../components/rating/rating.component';
import { ProductComponent } from '../components/product/product.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { CrumbNavComponent } from '../components/crumb-nav/crumb-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    CartComponent,
    FooterComponent,
    RatingComponent,
    ProductComponent,
    CarouselComponent,
    CrumbNavComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
