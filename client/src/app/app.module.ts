import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SinglepageProductComponent } from './singlepage-product/singlepage-product.component';
import { RelatedProductComponent } from './related-product/related-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglepageProductComponent,
    RelatedProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
