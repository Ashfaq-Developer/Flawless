import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { ImageWithTextComponent } from './image-with-text/image-with-text.component';
import { PromotionComponent } from './promotion/promotion.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutPageComponent } from './about-page/about-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { LineBreakPipe } from './line-break.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    ImageWithTextComponent,
    PromotionComponent,
    TestimonialsComponent,
    FooterComponent,
    ProductPageComponent,
    CollectionPageComponent,
    OurServicesComponent,
    CartPageComponent,
    AboutPageComponent,
    CheckoutPageComponent,
    LineBreakPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
