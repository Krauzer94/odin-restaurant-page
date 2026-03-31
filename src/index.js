import './style.css';

import { createHomeParagraph, createHomeImage } from './home.js';
import { createAddressHeadline, createAboutMapImage, createContactsParagraph } from './about.js';

import coffeeImageFile from './images/coffee.png';
import sweetsImageFile from './images/sweets.png';
import mapImageFile from './images/google-maps.jpg';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // Coffee paragraph
  createHomeParagraph(
    'Welcome fellow warrior!',
    `At Odin Bakery, every loaf, tart, and cup is prepared as an offering to bold appetites and curious souls.
    Inspired by the wisdom and wonder of the Allfather, our kitchen blends comforting tradition with a touch of
    legend, inviting you to rest, feast, and leave feeling truly favored.`,
  );

  // Coffee image
  createHomeImage(
    coffeeImageFile,
    "Cup of coffee",
  );

  // Sweets Image
  createHomeImage(
    sweetsImageFile,
    "Bakery sweets",
  );

  // Sweets paragraph
  createHomeParagraph(
    'Feasts worthy of Valhalla',
    `From golden-crusted breads forged in roaring ovens to sweet pastries kissed with honey and spice, our menu is
    crafted to satisfy even the mightiest of warriors. Whether you seek a quiet moment with a warm brew or a table
    laden with delights to share, Odin Bakery stands as your hall of comfort, where every bite tells a story.`,
  );

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
});
