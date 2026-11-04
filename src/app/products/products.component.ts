import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { productsList } from '../shared/data/shared';
// import { IProducts, products_list } from '../shared/data/data.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public localProductKey = 'Products';

  @Input() id: string;

  @Input() productsPerRow: number = 4;

  item: any;

  productRoute: any;

  public list: any[] = productsList;

  public cartProducts: any[] = [];

  constructor(private dataService: DataService, private router: Router, private productService: ProductService) {
  }

  public ngOnInit() {
    this.OnFilter();
    this.getCartProducts();
    this.dataService.receiveEvent().subscribe(event => this.handleEvent(event));
    
  }

  public OnFilter() {
    if (this.id) {
      this.list = this.list.filter(products => products.product_type == this.id);
    }
  }

  public getCartProducts() {
    this.cartProducts = JSON.parse(localStorage.getItem(this.localProductKey)) || [];
    // console.log(this.cartProducts);
  }

  public sendData(item: any) {
    let product = Object.assign({}, item);

    // console.log(item, 'Item');
    // console.log(product, 'product');
    // this.dataService.fireEvent({ name: 'data', payload: product });

    let found = this.cartProducts.find((productItem: any) => productItem.id == item.id);

    if (found) {
      this.cartProducts = this.cartProducts.map((pro) => {
        if (pro.id == item.id) {
          pro.quantity++;
        }
        return pro;
      });

    } else {
      this.cartProducts.push(product);
    }

    localStorage.setItem(this.localProductKey, JSON.stringify(this.cartProducts));
    this.dataService.fireEvent({ name: 'productAdd' });


    // if (setData == this.list) {
    //   found.quantity++;
    //   console.log('Same product');
    // } else {
    //   // let getData: any = localStorage.getItem(this.localProductKey);
    //   // let productData: IProducts = JSON.parse(getData) || { item };
    //   // console.log(productData);      
    //   this.list.push(item);
    //   console.log('Not same');
    // }

  }


  public redirectToProduct(item: any) {
    // console.log(item);
    this.router.navigate(['/product/' + item.id]);
  }



  // Back Work


  public getBackProducts() {
    // localStorage.setItem(this.localProductKey, JSON.stringify(this.cartProducts));
  }

  private handleEvent(event: any) {
    switch (event.name) {
      case "newData":
        this.getBackProducts();
        break;

      default:
        break;
    }
  }



  



}

