import './style.css';
import {
  createHomeCoffeeParagraph,
  createHomeCoffeeImage,
  createHomeSweetsImage,
} from './home.js';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  createHomeCoffeeParagraph();
  createHomeCoffeeImage();
  createHomeSweetsImage();
});
