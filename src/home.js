// Global element variables
const mainElement = document.getElementById('content');

// Home coffee paragraph module
function createHomeCoffeeParagraph() {

    // Headline paragraph div
    const homeCoffeeParagraphDiv = document.createElement('div');
    homeCoffeeParagraphDiv.className = 'headline-paragraph';

    // Create the headline text
    const homeCoffeeParagraphH2 = document.createElement('h2');
    homeCoffeeParagraphH2.textContent = 'Welcome fellow warrior!';

    // Create the paragraph text
    const homeCoffeeParagraphP = document.createElement('p');
    homeCoffeeParagraphP.className = 'headline-paragraph-text';
    homeCoffeeParagraphP.textContent = 'At Odin Bakery, every loaf, tart, and cup is prepared as an offering to bold appetites and curious souls. Inspired by the wisdom and wonder of the Allfather, our kitchen blends comforting tradition with a touch of legend, inviting you to rest, feast, and leave feeling truly favored.';

    // Append all created elements
    homeCoffeeParagraphDiv.appendChild(homeCoffeeParagraphH2);
    homeCoffeeParagraphDiv.appendChild(homeCoffeeParagraphP);
    mainElement.appendChild(homeCoffeeParagraphDiv);
};

// Export all created modules
export { createHomeCoffeeParagraph };
