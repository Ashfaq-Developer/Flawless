import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product/:id",
    component: ProductPageComponent
  },
  {
    path: "collection",
    component: CollectionPageComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  },
  // { path: 'data', loadChildren: () => import('./shared/data/data.module').then(m => m.DataModule) },
  {
    path: "cart",
    component: CartPageComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
