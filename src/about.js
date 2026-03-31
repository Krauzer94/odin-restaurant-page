const mainElement = document.getElementById('content-about');

// Address headline module
function createAddressHeadline(titleText, bodyText) {

  // Headline container
  const addressHeadlineDiv = document.createElement('div');
  addressHeadlineDiv.className = 'headline-paragraph';
  mainElement.appendChild(addressHeadlineDiv);

  // Headline content
  const addressHeadlineH2 = document.createElement('h2');
  addressHeadlineH2.textContent = titleText;
  addressHeadlineDiv.appendChild(addressHeadlineH2);

  // Paragraph element
  const addressHeadlineP = document.createElement('p');
  addressHeadlineP.className = 'headline-paragraph-text';
  addressHeadlineP.textContent = bodyText;
  addressHeadlineDiv.appendChild(addressHeadlineP);
};

// Google Maps image module
function createAboutMapImage(imageFile, imageAlt) {

  // Image container
  const aboutMapDiv = document.createElement('div');
  aboutMapDiv.className = 'google-maps-img';
  mainElement.appendChild(aboutMapDiv);

  // Image content
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

  // Headline container
  const contactsParagraphDiv = document.createElement('div');
  contactsParagraphDiv.className = 'headline-paragraph';
  contactsParagraphDiv.style.marginTop = "-3rem";
  mainElement.appendChild(contactsParagraphDiv);

  // Headline content
  const contactsParagraphH2 = document.createElement('h2');
  contactsParagraphH2.textContent = titleText;
  contactsParagraphDiv.appendChild(contactsParagraphH2)

  // Paragraph container
  const contactsParagraphP = document.createElement('p');
  contactsParagraphP.className = 'headline-paragraph-text';

  // Paragraph content
  contactsParagraphP.append(`📞 Phone: ${phoneNumber}`);
  contactsParagraphP.appendChild(document.createElement("br"));
  contactsParagraphP.append(`📧 Email: ${emailAddress}`);
  contactsParagraphP.appendChild(document.createElement("br"));
  contactsParagraphP.append(`📷 Instagram: ${instagramProfile}`);
  contactsParagraphDiv.appendChild(contactsParagraphP);
};

export {
  createAddressHeadline,
  createAboutMapImage,
  createContactsParagraph,
};
