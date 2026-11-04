// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';


// @NgModule({
//   declarations: [
//   ],
//   imports: [
//     CommonModule,
//   ]
// })

// export class DataModule {

// }


// export const products_list: IProducts[] = [
//   {
//     id: 1,
//     image: 'assets/img/skin-cleanser-template-product-img-3-400x600.jpg',
//     type: 'Cleanser',
//     title: 'Hybrid Cleansing Balm',
//     price: 32.90,
//     quantity: 1,
//     product_type: 'new-arrivals',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 2,
//     image: 'assets/img/skin-cleanser-template-product-img-11-400x600.jpg',
//     type: 'Sunscreens',
//     title: 'Soothing Sunscreen Gel',
//     price: 24.50,
//     quantity: 1,
//     product_type: 'new-arrivals',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 3,
//     image: 'assets/img/skin-cleanser-template-product-img-1-400x600.jpg',
//     type: 'Body lotion',
//     title: 'Energizing Marine Lotion',
//     price: 20.50,
//     quantity: 1,
//     product_type: 'new-arrivals',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 4,
//     image: 'assets/img/skin-cleanser-template-product-img-14-400x600.jpg',
//     type: 'Bundles',
//     title: 'Calm Hydrating Moisturizer',
//     price: 29.90,
//     quantity: 1,
//     product_type: 'new-arrivals',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. <br> Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 5,
//     image: 'assets/img/skin-cleanser-template-product-img-10-400x600.jpg',
//     type: 'Cleanser',
//     title: 'Makeup Melting Cleanser',
//     price: 29.90,
//     quantity: 1,
//     product_type: 'new-arrivals',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 6,
//     image: 'assets/img/skin-cleanser-template-product-img-5-400x600.jpg',
//     type: 'Cleanser',
//     title: 'Balancing Daily Cleanser',
//     price: 34.90,
//     quantity: 1,
//     product_type: 'new-arrivals',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 7,
//     image: 'assets/img/skin-cleanser-template-product-img-9-400x600.jpg',
//     type: 'Moisturizer',
//     title: 'Hydrating Gel Oil',
//     price: 20.00,
//     quantity: 1,
//     product_type: 'new-arrivals',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 8,
//     image: 'assets/img/skin-cleanser-template-product-img-7-400x600.jpg',
//     type: 'Cleanser',
//     title: 'Cleanser Concentrate',
//     price: 30.00,
//     quantity: 1,
//     product_type: 'new-arrivals',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 9,
//     image: 'assets/img/skin-cleanser-template-product-img-2-400x600.jpg',
//     type: 'Body lotion',
//     title: 'Cream to Foam Lotion',
//     price: 18.90,
//     quantity: 1,
//     product_type: 'most-loving',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 10,
//     image: 'assets/img/skin-cleanser-template-product-img-14-400x600.jpg',
//     type: 'Bundles',
//     title: 'Calm Hydrating Moisturizer',
//     price: 18.90,
//     quantity: 1,
//     product_type: 'most-loving',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 11,
//     image: 'assets/img/skin-cleanser-template-product-img-4-400x600.jpg',
//     type: 'Moisturizer',
//     title: 'Antiaging Skin Oil',
//     price: 44.90,
//     quantity: 1,
//     product_type: 'most-loving',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   },
//   {
//     id: 12,
//     image: 'assets/img/skin-cleanser-template-product-img-12-400x600.jpg',
//     type: 'Sunscreens',
//     title: 'Complex Sunscreen Balm',
//     price: 22.50,
//     quantity: 1,
//     product_type: 'most-loving',
//     description: 'Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus tristique sed tempor consequat risus tellus amet augue egestas mauris scelerisque donec ultrices. Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac egestas elementum ut in ornare sit malesuada.'
//   }
// ];

// export interface IProducts {
//   id: number
//   image: string
//   type: string
//   title: string
//   price: number
//   quantity: number
//   product_type: string
//   description: string
// }