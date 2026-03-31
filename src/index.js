import './style.css';

import { createHomeParagraph, createHomeImage } from './home.js';
import { createMenuImage, createMenuParagraph } from './menu.js';
import { createAddressHeadline, createAboutMapImage, createContactsParagraph } from './about.js';

import coffeeImageFile from './images/coffee.png';
import sweetsImageFile from './images/sweets.png';
import cappuccinoImageFile from './images/coffee.png';
import blackCoffeeImageFile from './images/black-coffee.png';
import croissantImageFile from './images/croissant.png';
import cakeSliceImagFile from './images/cake.png';
import mapImageFile from './images/google-maps.jpg';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // Load home page content
  function loadHomePage() {

    // Coffee content section
    createHomeParagraph(
      'Welcome fellow warrior!',
      `At Odin Bakery, every loaf, tart, and cup is prepared as an offering to bold appetites and curious souls.
      Inspired by the wisdom and wonder of the Allfather, our kitchen blends comforting tradition with a touch of
      legend, inviting you to rest, feast, and leave feeling truly favored.`,
    );
    createHomeImage(
      coffeeImageFile,
      "Cup of coffee",
    );

    // Sweets content section
    createHomeImage(
      sweetsImageFile,
      "Bakery sweets",
    );
    createHomeParagraph(
      'Feasts worthy of Valhalla',
      `From golden-crusted breads forged in roaring ovens to sweet pastries kissed with honey and spice, our menu is
      crafted to satisfy even the mightiest of warriors. Whether you seek a quiet moment with a warm brew or a table
      laden with delights to share, Odin Bakery stands as your hall of comfort, where every bite tells a story.`,
    );
  };
  loadHomePage();

  // Load menu page content
  function loadMenuPage() {
    // Cappuccino menu option
    createMenuImage(
      cappuccinoImageFile,
      'Cappuccino',
    );
    createMenuParagraph(
      'Cappuccino',
      'Rich and creamy cappuccino, topped with velvety milk foam.',
      '(150ml): $2.50',
      '(250ml): $3.50',
      '(350ml): $4.50',
    );

  // Black Coffe menu option
    createMenuImage(
      blackCoffeeImageFile,
      'Black Coffee',
    );
    createMenuParagraph(
      'Black Coffee',
      'Traditional black coffee, brewed to perfection using our signature blend of dark roasted beans.',
      '(150ml): $1.50',
      '(250ml): $2.50',
      '(350ml): $3.50',
    );

    // Croissant menu option
    createMenuImage(
      croissantImageFile,
      'Croissant',
    );
    createMenuParagraph(
      'Croissant',
      'Flaky and buttery croissant, perfect for breakfast or as a snack, either sweet or savory.',
      '(100g): $3.00',
      '(150g): $5.50',
      '(200g): $7.00',
    );

    // Cake Slice menu option
    createMenuImage(
      cakeSliceImagFile,
      'Cake',
    );
    createMenuParagraph(
      'Cake Slice',
      'Available in a variety of flavors, made with high-quality ingredients for a delightful treat.',
      '(200g): $8.00',
      '(400g): $14.00',
      '(600g): $18.00',
    );
  };
  // WIP: Call via on-click event listener
  // loadMenuPage()

  // Placeholder: Load about page content
  function loadAboutPage() {

    // Address headline
    createAddressHeadline(
      'Meet us at our address',
      '📌 123 Valhalla Street, Asgard, 45678',
    );

    // Google Maps image
    createAboutMapImage(
      mapImageFile,
      'Google Maps',
    );

    // Contacts paragraph
    createContactsParagraph(
      'Reach us via our contacts',
      '+1 (555) 123-4567',
      'odinbakery@valhalla.com',
      '@odinbakery',
    );
  };
  // WIP: Call via on-click event listener
  // loadAboutPage();

});
