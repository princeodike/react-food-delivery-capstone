import burgerImg from '../assets/images/burger.jpg.jpg';
import pizzaImg from '../assets/images/pizza.png.jpg';
import saladImg from '../assets/images/salad.jpg';
import noodlesImg from '../assets/images/noodles.jpg';
import drinkImg from '../assets/images/drink.jpg.jpg';
import dessertImg from '../assets/images/dessert.jpg.jpg';
import customer1Img from '../assets/images/customer-1.jpg.jpg';
import customer2Img from '../assets/images/customer-2.jpg.jpg';

export const categories = [
  'All',
  'Burger',
  'Pizza',
  'Salad',
  'Noodles',
  'Drink',
  'Dessert',
];

export const foodItems = [
  {
    id: 1,
    name: 'Royale De Luxe',
    category: 'Burger',
    weight: '140 g',
    price: 2.50,
    image: burgerImg,
  },
  {
    id: 2,
    name: 'Classic Cheese Burger',
    category: 'Burger',
    weight: '140 g',
    price: 2.50,
    image: burgerImg,
  },
  {
    id: 3,
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    weight: '320 g',
    price: 8.50,
    image: pizzaImg,
  },
  {
    id: 4,
    name: 'Fresh Garden Salad',
    category: 'Salad',
    weight: '190 g',
    price: 4.50,
    image: saladImg,
  },
  {
    id: 5,
    name: 'Spicy Ramen Noodles',
    category: 'Noodles',
    weight: '260 g',
    price: 6.25,
    image: noodlesImg,
  },
  {
    id: 6,
    name: 'Double Beef Burger',
    category: 'Burger',
    weight: '210 g',
    price: 4.90,
    image: burgerImg,
  },
  {
    id: 7,
    name: 'Refreshing Berry Drink',
    category: 'Drink',
    weight: '350 ml',
    price: 2.50,
    image: drinkImg,
  },
  {
    id: 8,
    name: 'Chocolate Lava Dessert',
    category: 'Dessert',
    weight: '150 g',
    price: 3.75,
    image: dessertImg,
  },
  {
    id: 9,
    name: 'Margherita Pizza',
    category: 'Pizza',
    weight: '300 g',
    price: 7.90,
    image: pizzaImg,
  },
  {
    id: 10,
    name: 'Avocado Crunch Salad',
    category: 'Salad',
    weight: '220 g',
    price: 5.20,
    image: saladImg,
  },
  {
    id: 11,
    name: 'Wok Stir-Fry Noodles',
    category: 'Noodles',
    weight: '280 g',
    price: 6.80,
    image: noodlesImg,
  },
  {
    id: 12,
    name: 'Vanilla Cream Dessert',
    category: 'Dessert',
    weight: '140 g',
    price: 3.50,
    image: dessertImg,
  },
];

export const servicesData = [
  {
    id: 1,
    type: 'order',
    title: 'Easy To Order',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    highlighted: false,
  },
  {
    id: 2,
    type: 'delivery',
    title: 'Fastest Delivery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    highlighted: true,
  },
  {
    id: 3,
    type: 'quality',
    title: 'Best Quality',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    highlighted: false,
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Melissa Carson',
    location: 'Alexandria, LA',
    image: customer1Img,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien.',
  },
  {
    id: 2,
    name: 'Daniel Brooks',
    location: 'Austin, TX',
    image: customer2Img,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien. Fast delivery and always fresh!',
  },
];