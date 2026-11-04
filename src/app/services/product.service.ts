import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  // public fireEvent(event: any) {
  //   this.product.emit(event)
  //   console.log(event);
  // }

  // public receiveEvent(): EventEmitter<void> {
  //   return this.product;
  // }


}
