function getMainElement() {
  return document.getElementById('content');
};

// Paragraph factory module
function createHomeParagraph(titleText, bodyText) {

  // Headline container
  const homeParagraphDiv = document.createElement('div');
  homeParagraphDiv.className = 'headline-paragraph';
  getMainElement().appendChild(homeParagraphDiv);

  // Headline content
  const homeParagraphH2 = document.createElement('h2');
  homeParagraphH2.textContent = titleText;
  homeParagraphDiv.appendChild(homeParagraphH2);

  // Paragraph element
  const homeParagraphP = document.createElement('p');
  homeParagraphP.className = 'headline-paragraph-text';
  homeParagraphP.textContent = bodyText;
  homeParagraphDiv.appendChild(homeParagraphP);
};

// Image factory module
function createHomeImage(imageFile, imageAlt) {

  // Image element
  const homeImgElement = document.createElement('img');
  homeImgElement.className = "coffee-sweets-imgs";

  // Image content
  homeImgElement.src = imageFile;
  homeImgElement.alt = imageAlt;
  getMainElement().appendChild(homeImgElement);
};

// Export all created modules
export { createHomeParagraph, createHomeImage };
