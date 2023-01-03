import { IProduct } from './../../products/models/products';

export const PRODUCTS_ARRAY_MOCK: IProduct[] = [
  {
    id: 1,
    name: 'Product 1' ,
    description: 'Product 1 Description',
    price: '25.00',
    imageUrl: 'https://source.unsplash.com/1600x900/?product',
    quantity: 100
  },
  {
    id: 2,
    name: 'Product 2' ,
    description: 'Product 2 Description',
    price: '55.00',
    imageUrl: 'https://source.unsplash.com/1600x900/?product',
    quantity: 200
  }
];

export const PRODUCT_MOCK: IProduct = {
  id: 1,
  name: 'Product 1' ,
  description: 'Product 1 Description',
  price: '25.00',
  imageUrl: 'https://source.unsplash.com/1600x900/?product',
  quantity: 100
}
