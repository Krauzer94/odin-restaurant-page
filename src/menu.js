function getMainElement() {
  return document.getElementById('content-menu');
};

// Image factory module
function createMenuImage(imageFile, imageAlt) {

  // Image cotainer
  const menuImageDiv = document.createElement('div');
  menuImageDiv.className = "coffee-sweets-imgs-mp";
  getMainElement().appendChild(menuImageDiv);

  // Image element
  const menuImgElement = document.createElement('img');
  menuImageDiv.appendChild(menuImgElement);

  // Image content
  menuImgElement.src = imageFile;
  menuImgElement.alt = imageAlt;
  menuImageDiv.appendChild(menuImgElement);
};

// Paragraph factory module
function createMenuParagraph(
  titleText,
  bodyText,
  smallOption,
  mediumOption,
  largeOption,
) {

  // Headline container
  const menuParagraphDiv = document.createElement('div');
  menuParagraphDiv.className = 'headline-paragraph';
  getMainElement().appendChild(menuParagraphDiv);

  // Headline content
  const menuParagraphH2 = document.createElement('h3');
  menuParagraphH2.textContent = titleText;
  menuParagraphDiv.appendChild(menuParagraphH2);

  // Paragraph element
  const menuParagraphP = document.createElement('p');
  menuParagraphP.className = 'headline-paragraph-text-mp';
  menuParagraphP.textContent = bodyText;
  menuParagraphP.appendChild(document.createElement("br"));
  menuParagraphP.appendChild(document.createElement("br"));

  // Menu options: small, medium, large
  menuParagraphP.append(`- Small ${smallOption}`);
  menuParagraphP.appendChild(document.createElement("br"));
  menuParagraphP.append(`- Medium ${mediumOption}`);
  menuParagraphP.appendChild(document.createElement("br"));
  menuParagraphP.append(`- Large ${largeOption}`);
  menuParagraphDiv.appendChild(menuParagraphP);
};

export { createMenuImage, createMenuParagraph };
