import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

  public service = [
    {
      title: 'FREE DELIVERY',
      para: 'Nullam pharetra egestas mollis',
      icon: 'fas fa-truck'
    },
    {
      title: 'EASY PAYMENT',
      para: 'Urna est enim pellentesque mot',
      icon: 'fas fa-credit-card'
    },
    {
      title: 'TRACK ORDER',
      para: 'Mauris lacus nunc pellentesque',
      icon: 'fas fa-truck-pickup'
    },
    {
      title: 'HAVE QUESTIONS?',
      para: 'Vulputate enim quis sollicitudin',
      icon: 'fas fa-question-circle'
    }
  ]

}
