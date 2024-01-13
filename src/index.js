import {mainPageLoad} from "./homePage.js";
import {menuPageLoad} from "./menuPage.js"
import { contactPageLoad } from "./contactPage.js";
import './indexStyle.css';


const mainContent = document.querySelector("#content");
mainContent.classList.add("main-content");

let mainHeader = document.createElement("div");
mainHeader.classList.add("main-header");
mainContent.appendChild(mainHeader)
//add the three buttons
let homeButton = document.createElement("button");
homeButton.classList.add("home");
homeButton.textContent = "Home";

let menuButton = document.createElement("button");
menuButton.classList.add("menu");
menuButton.textContent = "Menu";

let contactButton = document.createElement("button");
contactButton.classList.add("contact");
contactButton.textContent = "Contact";

mainHeader.appendChild(homeButton);
mainHeader.appendChild(menuButton);
mainHeader.appendChild(contactButton);

let centralContainer = document.createElement("div");
centralContainer.classList.add("central-container")
mainContent.appendChild(centralContainer);

let footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "The Odin Project 2024"
mainContent.appendChild(footer);
mainPageLoad();

menuButton.addEventListener("click", () => {
    centralContainer.innerHTML = '';
    menuPageLoad();
})

contactButton.addEventListener("click", () => {
    centralContainer.innerHTML = '';
    contactPageLoad();
})

homeButton.addEventListener("click", () => {
    centralContainer.innerHTML = '';
    mainPageLoad();
})