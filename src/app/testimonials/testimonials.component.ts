import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  public title:string = 'What Our Customers Say'

  public testimonials = [
    {
      para: 'Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.',
      client_img_url: 'assets/img/skin-cleanser-template-testimonials-avatar-img-1-40x40.jpg',
      client_name: 'JUAN CARLOS'
    },
    {
      para: 'Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.',
      client_img_url: 'assets/img/skin-cleanser-template-testimonials-avatar-img-1-40x40.jpg',
      client_name: 'ALICIA HEART'
    },
    {
      para: 'Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.',
      client_img_url: 'assets/img/skin-cleanser-template-testimonials-avatar-img-1-40x40.jpg',
      client_name: 'JENNIFER LEWIS'

    }
  ]


}
