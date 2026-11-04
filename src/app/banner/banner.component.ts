import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
 
  @Input() newId:string;

  // public title:any = '';

  constructor(){

  }

  public ngOnInit(){
    this.OnFilter();
  }

  public OnFilter(){
    this.banner_content = this.banner_content.filter(banner => banner.banner_type == this.newId);
  }

  public banner_content = [
    {
      title: 'WELCOME TO FLAWLESS STORE',
      heading: 'The Best Skin Cleanser for You',
      paragraph: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img_url: 'assets/img/Banner.png',
      banner_type: 'image-banner'
    },
    {
      title: 'Flawless Skincare Regimen',
      img_url: 'assets/img/makeup-beauty-flatlay.jpg',
      banner_type: 'video-banner'
    }
  ]

}
