import './homePageStyle.css';

const mainPageLoad = () => {

    let homePage = document.querySelector(".central-container");

    let title  = document.createElement("div");
    title.classList.add("title")
    title.innerHTML = "<h1>Adee's Diner</h1>";
    homePage.appendChild(title);

    let review = document.createElement("div");
    let reviewContent = "We craft diverse, tantalizing cuisines, offering a symphony of flavors. From traditional Italian pasta to spicy Thai curries, each dish tells a story of heritage and creativity. These culinary artists blend fresh ingredients and time-honored techniques, inviting diners on an unforgettable gastronomic journey across global kitchens."
    review.innerHTML = `<h2>Owners Words</h2><div>${reviewContent}</div>`; 
    review.classList.add("review");
    homePage.appendChild(review);

    let openingHours = document.createElement("div");
    openingHours.classList.add("opening-hours");
    let openingHoursContent = "9am - 10pm Everyday"
    openingHours.innerHTML = `<h3>We Are Open</h3><div>${openingHoursContent}</div>`; 
    homePage.appendChild(openingHours);

    let location = document.createElement("div");
    location.classList.add("location");
    let locationContent = "Geylang"
    location.innerHTML = `<h3>Location</h3><div>${locationContent}</div>`;
    homePage.appendChild(location);

}

export {mainPageLoad};