import './style.css';

import { createHomeParagraph, createHomeImage } from './home.js';
import { createAboutParagraph, createAboutMapImage, createContactsParagraph } from './about.js';

import coffeeImageFile from './images/coffee.png';
import sweetsImageFile from './images/sweets.png';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // WIP about page factory
  createAboutParagraph();
  createAboutMapImage();
  createContactsParagraph();

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
});
