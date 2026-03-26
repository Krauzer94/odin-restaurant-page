// Global element variables
const mainElement = document.getElementById('content');

// Paragraph factory module
function createHomeParagraph(titleText, bodyText) {

  // Headline paragraph div
  const homeParagraphDiv = document.createElement('div');
  homeParagraphDiv.className = 'headline-paragraph';
  mainElement.appendChild(homeParagraphDiv);

  // Create headline text
  const homeParagraphH2 = document.createElement('h2');
  homeParagraphH2.textContent = titleText;
  homeParagraphDiv.appendChild(homeParagraphH2);

  // Create paragraph text
  const homeParagraphP = document.createElement('p');
  homeParagraphP.className = 'headline-paragraph-text';
  homeParagraphP.textContent = bodyText;
  homeParagraphDiv.appendChild(homeParagraphP);
};

// Image factory module
function createHomeImage(imageFile, imageAlt) {

  // Create image element
  const homeImgElement = document.createElement('img');
  homeImgElement.className = "coffee-sweets-imgs";

  // Metadata and append
  homeImgElement.src = imageFile;
  homeImgElement.alt = imageAlt;
  mainElement.appendChild(homeImgElement);
};

// Export all created modules
export { createHomeParagraph, createHomeImage };
