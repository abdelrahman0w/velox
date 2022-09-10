import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { CategoriesBarComponent } from '../components/categories-bar/categories-bar.component';
import { DealsComponent } from '../components/deals/deals.component';
import { CategoriesCardsComponent } from '../components/categories-cards/categories-cards.component';
import { NewsletterComponent } from '../components/newsletter/newsletter.component';
import { SingleCatComponent } from '../components/single-cat/single-cat.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { FormsModule } from '@angular/forms';
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
    CategoriesBarComponent,
    DealsComponent,
    CategoriesCardsComponent,
    NewsletterComponent,
    SingleCatComponent,
    NotFoundComponent,
    SearchResultsComponent,
    CartPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
