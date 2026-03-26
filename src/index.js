import './style.css';
import { createHomeCoffeeParagraph, createHomeCoffeeImage } from './home.js';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  createHomeCoffeeParagraph();
  createHomeCoffeeImage();
});
