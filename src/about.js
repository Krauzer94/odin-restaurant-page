// Global element variables
const mainElement = document.getElementById('content-about');

// Address headline module
function createAddressHeadline(titleText, bodyText) {

  // Headline container
  const addressHeadlineDiv = document.createElement('div');
  addressHeadlineDiv.className = 'headline-paragraph';
  mainElement.appendChild(addressHeadlineDiv);

  // Create headline text
  const addressHeadlineH2 = document.createElement('h2');
  addressHeadlineH2.textContent = titleText;
  addressHeadlineDiv.appendChild(addressHeadlineH2);

  // Create paragraph text
  const addressHeadlineP = document.createElement('p');
  addressHeadlineP.className = 'headline-paragraph-text';
  addressHeadlineP.textContent = bodyText;
  addressHeadlineDiv.appendChild(addressHeadlineP);
};

// Google Maps image module
function createAboutMapImage(imageFile, imageAlt) {

  // Create element container
  const aboutMapDiv = document.createElement('div');
  aboutMapDiv.className = 'google-maps-img';
  mainElement.appendChild(aboutMapDiv);

  // Create image element
  const aboutMapImage = document.createElement('img');
  aboutMapImage.src = imageFile;
  aboutMapImage.alt = imageAlt;
  aboutMapDiv.appendChild(aboutMapImage);
};

// About page contacts module
function createContactsParagraph(
  titleText,
  phoneNumber,
  emailAddress,
  instagramProfile,
) {

  // Headline paragraph container
  const contactsParagraphDiv = document.createElement('div');
  contactsParagraphDiv.className = 'headline-paragraph';
  contactsParagraphDiv.style.marginTop = "-3rem";
  mainElement.appendChild(contactsParagraphDiv);

  // Create headline text
  const contactsParagraphH2 = document.createElement('h2');
  contactsParagraphH2.textContent = titleText;
  contactsParagraphDiv.appendChild(contactsParagraphH2)

  // Create paragraph text
  const contactsParagraphP = document.createElement('p');
  contactsParagraphP.className = 'headline-paragraph-text';

  // All paragraph contents
  contactsParagraphP.append(`📞 Phone: ${phoneNumber}`);
  contactsParagraphP.appendChild(document.createElement("br"));
  contactsParagraphP.append(`📧 Email: ${emailAddress}`);
  contactsParagraphP.appendChild(document.createElement("br"));
  contactsParagraphP.append(`📷 Instagram: ${instagramProfile}`);
  contactsParagraphDiv.appendChild(contactsParagraphP);
};

// Export all created modules
export {
  createAddressHeadline,
  createAboutMapImage,
  createContactsParagraph,
};
