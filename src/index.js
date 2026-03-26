import './style.css';
import {
  createHomeCoffeeParagraph,
  createHomeCoffeeImage,
  createHomeSweetsImage,
  createHomeSweetsParagraph,
} from './home.js';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  createHomeCoffeeParagraph();
  createHomeCoffeeImage();
  createHomeSweetsImage();
  createHomeSweetsParagraph();
});
