import "./contactPageStyle.css";

const contactPageLoad = () => {
  const ownerName = "Adee Aryaa";
  const contactEmail = "adeearyaa2013@gmail.com";
  const contactPhone = "91117822";

  let homePage = document.querySelector(".central-container");

  let title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "<h1>Contact Me</h1>";
  homePage.appendChild(title);

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");
  homePage.appendChild(contactDiv);

  // Create and append the owner's name
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = "Owner: " + ownerName;
  contactDiv.appendChild(nameParagraph);

  // Create and append the email address
  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = "Email: " + contactEmail;
  contactDiv.appendChild(emailParagraph);

  // Create and append the phone number
  const phoneParagraph = document.createElement("p");
  phoneParagraph.textContent = "Phone: " + contactPhone;
  contactDiv.appendChild(phoneParagraph);

  // Create and append the address
  const addressParagraph = document.createElement("p");
  addressParagraph.textContent = "Address: " + address;
  contactDiv.appendChild(addressParagraph);
};

export {contactPageLoad}
