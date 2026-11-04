import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  // savedCount: number;

  public cartProducts: any[] = [];

  public localProductKey: string = "Products";


  // let updateTotal : any = cartProducts.quantity;

  constructor(private dataService: DataService) { }

  public ngOnInit() {
    // this.savedCount = this.dataService.getCountFromLocalStorage();
    this.getCartProducts();
    this.dataService.receiveEvent().subscribe((event: any) => this.handleEvent(event));
    //  let subtotal = this.cartProducts.price;
  }

  public getCartProducts() {
    this.cartProducts = JSON.parse(localStorage.getItem(this.localProductKey)) || [];
    // this.cartProducts.map((product) => {
    //   product.price = Number(product.price.toFixed(2));
    //   return product;
    // });
    // console.log(this.cartProducts);

  }

  private handleEvent(event: any) {
    switch (event.name) {
      case "productAdd":
        this.getCartProducts();
        break;

      default:
        break;
    }
  }

  public removeItem(item: any) {
    this.cartProducts = this.cartProducts.filter(product => product.id != item.id);
    localStorage.setItem(this.localProductKey, JSON.stringify(this.cartProducts));
    this.dataService.fireEvent({ name: 'productRemoved' });
  }

  public get getCount() {
    return this.cartProducts.reduce((accumulator, item) => accumulator + item.quantity, 0);
  }

  public get getTotal() {
    let total = this.cartProducts.reduce((total, item) => total + (item.quantity * item.price), 0);
    return total.toFixed(2);
  }

  public updateTotalPriceWithDelay(index: number, event: any) {
    let product = this.cartProducts[index];
    product.quantity = Number(event.target.value);
    localStorage.setItem(this.localProductKey, JSON.stringify(this.cartProducts));
    this.dataService.fireEvent({ name: 'product-updated' });
  }

  // public updateTotalPrice() {
  //   let updateTotal = this.cartProducts.reduce((updateTotal, item) => updateTotal * item.price, 0);
  //   // return updateTotal.toFixed(2);
  //   console.log('change');
  //   console.log(updateTotal);
  // }

  // public refreshPage() {
  //   // Reload the current page
  //   window.location.reload();
  // }

}
