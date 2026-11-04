import { Component } from '@angular/core';
import { productsList } from '../shared/data/shared';
// import { products_list } from '../shared/data/data.module';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent {

  public list: any[] = productsList;

  public ngOnInit() {
    this.onLoad();
  }

  public onLoad() {

    // console.log(this.filteredList);

    // if (this.id) {      
    //   this.filteredList = products_list.filter(product => product.type && product.type.toLowerCase() === this.id.toLowerCase());      
    //   console.log(this.filteredList);      
    // }else{
    //   this.list = products_list;
    //   console.log("Work!");      
    // }

  }

}
