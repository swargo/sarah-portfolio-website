export interface Product {
  name: string;
  description: string;
  id: string;
  default_price: { unit_amount: number };
  images: string[];
}

// const prods = [{
//   name: 'Test Name 1',
//   price: 800,
//   id: 'id1',
//   images: ['http://placekitten.com/200/300', 'http://placekitten.com/200/300']
// },
// {
//   name: 'Test Name 2',
//   price: 500,
//   id: 'id2',
//   images: ['http://placekitten.com/200/300', 'http://placekitten.com/200/300']
// },
// {
//   name: 'Test Name 3',
//   price: 1000,
//   id: 'id3',
//   images: ['http://placekitten.com/200/300', 'http://placekitten.com/200/300']
// },
// {
//   name: 'Test Name 4',
//   price: 1000,
//   id: 'id4',
//   images: ['http://placekitten.com/200/300', 'http://placekitten.com/200/300']
// },
// {
//   name: 'Test Name 5',
//   price: 1000,
//   id: 'id5',
//   images: ['http://placekitten.com/200/300', 'http://placekitten.com/200/300']
// },
// {
//   name: 'Test Name 6',
//   price: 1000,
//   id: 'id6',
//   images: ['http://placekitten.com/200/300', 'http://placekitten.com/200/300']
// },
// {
//   name: 'Test Name 7',
//   price: 1000,
//   id: 'id7',
//   images: ['http://placekitten.com/200/300', 'http://placekitten.com/200/300']
// }]
