import { Component, HostListener } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  list: any[] = [];

  isCartDrawer: boolean = false;

  index: any;

  totalAmount: number;

  public sumWithInitial: any;

  public countedProducts: any;

  isScroll: any = false;

  localProductKey: string = 'Products';

  public cartProducts: any[] = [];

  constructor(public dataService: DataService) {
  }

  public cartOpen() {
    this.isCartDrawer = !this.isCartDrawer;
  }

  public closeCartDrawer() {
    this.isCartDrawer = false;
  }

  public ngOnInit() {
    // this.dataService.receiveEvent().subscribe(event => this.handleEvent(event));
    this.getCartProducts();
    this.dataService.receiveEvent().subscribe(event => this.handleEvent(event));
    this.sendBackData();
  }

  public getCartProducts() {
    this.cartProducts = JSON.parse(localStorage.getItem(this.localProductKey)) || [];
    console.log(this.cartProducts);
  }

  private handleEvent(event: any) {
    switch (event.name) {
      case "productAdd":
        this.getCartProducts();
        break;
      case "product-updated":
        console.log('done');

        this.getCartProducts();
        break;
      default:
        break;
    }
  }

  public sendBackData() {
    this.dataService.fireEvent({ name: 'newData' });
  }


  // public getProducts(product: any) {

  //   let found = this.list.find(item => item.id == product.id);

  //   if (found) {
  //     found.quantity++;
  //     console.log('Same product');
  //   } else {
  //     this.list.push(product);
  //     console.log('Not same product');
  //   }

  // }


  public get getCount() {
    return this.cartProducts.reduce((accumulator, item) => accumulator + item.quantity, 0);
  }

  public get getTotal() {
    const total = this.cartProducts.reduce((total, item) => total + (item.quantity * item.price), 0);
    return total.toFixed(2);
  }

  // private handleEvent(event: any) {
  //   switch (event.name) {
  //     case 'data':
  //       this.getProducts(event.payload);
  //       break;

  //     default:
  //       break;
  //   }
  // }


  public removeItem(item: any) {
    this.cartProducts = this.cartProducts.filter(product => product.id != item.id);
    localStorage.setItem(this.localProductKey, JSON.stringify(this.cartProducts));
  }



  // Cart

  public getCartPageProducts() {
    localStorage.setItem(this.localProductKey, JSON.stringify(this.cartProducts));
    console.log("ok");
  }

  private cartHandleEvent(event: any) {
    switch (event.name) {
      case "updateCartData":
        console.log('done');

        this.getCartPageProducts();
        break;

      default:
        break;
    }
  }

  //


  @HostListener('window:scroll', ['$event'])

  onWindowScroll(event: Event) {
    this.isScroll = true;
  }


}
