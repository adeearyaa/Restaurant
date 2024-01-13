import './menuPageStyle.css';

const menuPageLoad = () => {

    let homePage = document.querySelector(".central-container");

    let title  = document.createElement("div");
    title.classList.add("title")
    title.innerHTML = "<h1>Menu</h1>";
    homePage.appendChild(title);

    const menu = {
        "Appetizers": {
            "Garlic Bread": "$5.99",
            "Bruschetta": "$7.50",
            "Stuffed Mushrooms": "$8.00",
            "Caesar Salad": "$6.50"
        },
        "Main Courses": {
            "Grilled Salmon": "$15.99",
            "Chicken Alfredo Pasta": "$12.99",
            "Beef Lasagna": "$14.50",
            "Margherita Pizza": "$11.00"
        },
        "Deserts" : {
            "Tiramisu" : "$6.99",
            "Panna Cotta" : "$6.50",
            "New York Cheesecake" : "$7.00",
            "Chocolate Lava Cake" : "$7.50",
        },
        "Beverages" : {
            "House Red Wine" : "$8.00",
            "House White Wine" : "$8.50",
            "Espresso" : "$3.00",
            "Sparkling Water" : "$2.50",
        }
    };

    for(const category in menu) {
        const header = document.createElement("h2");
        header.classList.add("food-types");
        header.textContent = category;
        homePage.appendChild(header);
        const list = document.createElement("ul");
        list.classList.add("food-items");
        homePage.appendChild(list);
        for (const foodItem in menu[category]) {
            const food = document.createElement("li");
            food.textContent = foodItem + " " + menu[category][foodItem]
            list.appendChild(food);
        }
        
    }

}

export {menuPageLoad};