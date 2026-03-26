// Contents folder import
import coffeeImageFile from './images/coffee.png';
import sweetsImageFIle from './images/sweets.png';

// Global element variables
const mainElement = document.getElementById('content');

// Home coffee paragraph module
function createHomeCoffeeParagraph() {

    // Headline paragraph div
    const homeCoffeeParagraphDiv = document.createElement('div');
    homeCoffeeParagraphDiv.className = 'headline-paragraph';
    mainElement.appendChild(homeCoffeeParagraphDiv);

    // Create the headline text
    const homeCoffeeParagraphH2 = document.createElement('h2');
    homeCoffeeParagraphH2.textContent = 'Welcome fellow warrior!';
    homeCoffeeParagraphDiv.appendChild(homeCoffeeParagraphH2);

    // Create the paragraph text
    const homeCoffeeParagraphP = document.createElement('p');
    homeCoffeeParagraphP.className = 'headline-paragraph-text';
    homeCoffeeParagraphP.textContent = `
        At Odin Bakery, every loaf, tart, and cup is prepared as an offering to bold appetites and curious souls.
        Inspired by the wisdom and wonder of the Allfather, our kitchen blends comforting tradition with a touch of
        legend, inviting you to rest, feast, and leave feeling truly favored.
    `;
    homeCoffeeParagraphDiv.appendChild(homeCoffeeParagraphP);
};

// Home coffee image module
function createHomeCoffeeImage() {

    // Create the image element
    const homeCoffeeImg = document.createElement('img');
    homeCoffeeImg.className = "coffee-sweets-imgs";
    homeCoffeeImg.src = coffeeImageFile;
    homeCoffeeImg.alt = "Cup of coffee";
    mainElement.appendChild(homeCoffeeImg);
};

// Home sweets image module
function createHomeSweetsImage() {

    // Create the image element
    const homeSweetsImg = document.createElement('img');
    homeSweetsImg.className = "coffee-sweets-imgs";
    homeSweetsImg.src = sweetsImageFIle;
    homeSweetsImg.alt = "Bakery sweets";
    mainElement.appendChild(homeSweetsImg);
};

// Home sweets paragraph module
function createHomeSweetsParagraph() {

    // Headline paragraph div
    const homeSweetsParagraphDiv = document.createElement('div');
    homeSweetsParagraphDiv.className = 'headline-paragraph';
    mainElement.appendChild(homeSweetsParagraphDiv);

    // Create the headline text
    const homeSweetsParagraphH2 = document.createElement('h2');
    homeSweetsParagraphH2.textContent = 'Feasts worthy of Valhalla';
    homeSweetsParagraphDiv.appendChild(homeSweetsParagraphH2);

    // Create the paragraph text
    const homeSweetsParagraphP = document.createElement('p');
    homeSweetsParagraphP.className = 'headline-paragraph-text';
    homeSweetsParagraphP.textContent = `
        From golden-crusted breads forged in roaring ovens to sweet pastries kissed with honey and spice, our menu is
        crafted to satisfy even the mightiest of warriors. Whether you seek a quiet moment with a warm brew or a table
        laden with delights to share, Odin Bakery stands as your hall of comfort, where every bite tells a story.
    `;
    homeSweetsParagraphDiv.appendChild(homeSweetsParagraphP);
};

// Export all created modules
export {
    createHomeCoffeeParagraph,
    createHomeCoffeeImage,
    createHomeSweetsImage,
    createHomeSweetsParagraph,
};
