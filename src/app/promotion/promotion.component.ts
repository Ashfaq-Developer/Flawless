import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent {

  constructor(){

  }

  public promo_detail = [
    {
      title: 'All Skin Types',
      para: 'Morbid nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.',
      icon: 'fa-hand-sparkles'
    },
    {
      title: 'Pure Organic',
      para: 'Morbid nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.',
      icon: 'fa-leaf'
    },
    {
      title: 'Natural Care',
      para: 'Morbid nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.',
      icon: 'fa-hand-holding-heart'
    }
  ]

}
