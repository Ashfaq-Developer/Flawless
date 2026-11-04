import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { productsList } from '../shared/data/shared';
// import { products_list } from '../shared/data/data.module';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  public redirectToBack: any = "/";

  item: any;

  productItem: any;

  public product: any[] = productsList;

  id: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public productService: ProductService){
  }

  ngOnInit(){
    
    // this.productService.receiveEvent().subscribe(event_b => this.newHandleEvent(event_b));

    // console.log(this.product);    

    let params: any = this.activatedRoute.snapshot.params;
    console.log(this.activatedRoute.snapshot.params);
    
    if (params.id) {
      this.findProduct(params.id);
      console.log(params.id);
      
      // this.finnedProduct(params.id);
    }

  }



  private findProduct(productId: any) {
    this.productItem = this.product.find((product) => product.id == productId);
    console.log(this.productItem);    
    // let newProducts = this.product.push(productId);
    // console.log(newProducts);
    
    if (!this.productItem) {
      this.router.navigate([this.redirectToBack]);
      console.log('not find');
      
    }
  }






  // BAD METHOD
  // public finnedProduct(product_b: any) {
  //   this.list.push(product_b);
  //   let productItem = this.list.find((product_b:any) => product_b.id === product_b.id);
  //   console.log(productItem);    
  //   if (!this.productItem) {
  //     this.router.navigate([this.redirectToBack]);
  //   }else{
  //     this.router.navigate([productItem.productRoute + productItem.id]);
  //   }
  // }



  // private newHandleEvent(event_b: any) {
  //   switch (event_b.name) {
  //     case 'data':
  //       this.finnedProduct(event_b.payload);
  //       break;

  //     default:
  //       break;
  //   }
  // }

}
