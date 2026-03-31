import mapImageFile from './images/google-maps.jpg';

// Global element variables
const mainElement = document.getElementById('content-about');

// About page paragraph module
function createAboutParagraph() {

  // Headline paragraph container
  const aboutParagraphDiv = document.createElement('div');
  aboutParagraphDiv.className = 'headline-paragraph';
  mainElement.appendChild(aboutParagraphDiv);

  // Create headline text
  const aboutParagraphH2 = document.createElement('h2');
  aboutParagraphH2.textContent = 'Meet us at our address';
  aboutParagraphDiv.appendChild(aboutParagraphH2);

  // Create paragraph text
  const aboutParagraphP = document.createElement('p');
  aboutParagraphP.className = 'headline-paragraph-text';
  aboutParagraphP.textContent = '📌 123 Valhalla Street, Asgard, 45678';
  aboutParagraphDiv.appendChild(aboutParagraphP);
};

// Google Maps image module
function createAboutMapImage() {

  // Create element container
  const aboutMapDiv = document.createElement('div');
  aboutMapDiv.className = 'google-maps-img';
  mainElement.appendChild(aboutMapDiv);

  // Create image element
  const aboutMapImage = document.createElement('img');
  aboutMapImage.src = mapImageFile;
  aboutMapImage.alt = 'Google Maps';
  aboutMapDiv.appendChild(aboutMapImage);
};

// About page contacts module
function createContactsParagraph() {

  // Headline paragraph container
  const contactsParagraphDiv = document.createElement('div');
  contactsParagraphDiv.className = 'headline-paragraph';
  contactsParagraphDiv.style.marginTop = "-3rem";
  mainElement.appendChild(contactsParagraphDiv);

  // Create headline text
  const contactsParagraphH2 = document.createElement('h2');
  contactsParagraphH2.textContent = 'Reach us via out cotacts';
  contactsParagraphDiv.appendChild(contactsParagraphH2)

  // Create paragraph text
  const contactsParagraphP = document.createElement('p');
  contactsParagraphP.className = 'headline-paragraph-text';

  // All paragraph contents
  contactsParagraphP.append("📞 Phone: +1 (555) 123-4567");
  contactsParagraphP.appendChild(document.createElement("br"));
  contactsParagraphP.append("📧 Email: odinbakery@valhalla.com");
  contactsParagraphP.appendChild(document.createElement("br"));
  contactsParagraphP.append("📷 Instagram: @odinbakery");

  // Append generated content
  contactsParagraphDiv.appendChild(contactsParagraphP);
};

// Export all created modules
export {
  createAboutParagraph,
  createAboutMapImage,
  createContactsParagraph,
};
