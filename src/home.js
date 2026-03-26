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

// Export all created modules
export { createHomeCoffeeParagraph };
