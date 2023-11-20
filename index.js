
// ## Challenge #1
// Fetch all the menu items from `http://localhost:3000/menu`. For each menu item create a `span` element that contains the name of the menu item, and add it to the `#menu-items` div.

// ## Challenge #2
// When the page loads, display the first menu item. You should set the image, name, description, and price. All the correct elements to set are located in the `#dish` `section` element.

// ## Challenge #3
// When the user clicks on the menu items on the left, they should see all the details for that specific menu item.

// ## Challenge #4
// The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.

// For example, if there are currently 2 burritos in the cart, and the user adds 2 more, the total should be 4.

// > *It is okay if the value resets in-between clicking on the menu items! It does not need to save state!*

fetch("http://localhost:3000/menu")
.then(res => res.json())
.then(menu =>{

    let selectedItem;

    function displayDetails(item){
        // Update selected item to be the item that was clicked on.
        selectedItem = item;

        dishImage.src = item.image;
        dishName.textContent = item.name;
        dishDescription.textContent = item.description;
        dishPrice.textContent = `$${item.price}`;
        itemCartSpan.textContent = item.number_in_bag;

    }

    menu.forEach(item => { 
        const divMenuItems = document.body.querySelector("#menu-items");
        const spanTag = document.createElement("span");
        spanTag.textContent = item.name;
        spanTag.id = item.id;

        spanTag.addEventListener("click", event => {
            console.log(`${item.name} was clicked`);

            displayDetails(item);
        });
        
        divMenuItems.append(spanTag);

    })

    const dishImage = document.querySelector("#dish-image");
    const dishName = document.querySelector("#dish-name");
    const dishDescription = document.querySelector("#dish-description");
    const dishPrice = document.querySelector("#dish-price");
    const itemCartSpan = document.querySelector("#number-in-cart");

    displayDetails(menu[0]);

    // Form functionality:
    const form = document.querySelector("#cart-form");

    form.addEventListener("submit", event => {
        event.preventDefault();

        // let numberInCart = document.querySelector("#number-in-cart");
        // console.log(numberInCart.textContent);

        // let numberToAdd = document.querySelector("#cart-amount").value;

        // function addToCart (num1, num2) {
        //     return num1 + num2;
        // };

        // numberInCart.textContent = addToCart(parseInt(numberInCart.textContent), parseInt(numberToAdd));

        const numberToAdd = parseInt(document.querySelector("#cart-amount").value);
        const numberInCart = parseInt(document.querySelector("#number-in-cart").textContent);
        
        const newNumberInCart = numberInCart + numberToAdd;
        selectedItem.number_in_bag = newNumberInCart;
        document.querySelector("#number-in-cart").textContent = newNumberInCart;

        fetch(`http://localhost:3000/menu/${selectedItem.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "number_in_bag": newNumberInCart
            })
        })
        .then(response => response.json())
        .then(item => {
            displayDetails(item);

        });

        form.reset();

        // numberOfItems = cartAmountValue.value;
        // numberInCart.textContent = numberOfItems;
    });

    // const totalCostDiv = document.createElement("div");
    // totalCostDiv = 

})

// Calculate the *total cost* of what is currently in the cart and display it somewhere on the page.
// When items are added to the cart, we will calculate the cost * the selected item's price.
// We will create a variable to keep track of total cost.
// This variable will be displayed next to number in cart.

// Create element to display cost



// -----

// // // Write your code here...

// // ## Challenge #1
// // Fetch all the menu items from `http://localhost:3000/menu`. For each menu item create a `span` element that contains the name of the menu item, and add it to the `#menu-items` div.

//     //  First, I'm going to fetch all the menu items using a GET request. Then I will use a forEach function that takes in the name of each item. Then I will create a span element and pass the name of the item with the textContent method. This will give us 5 span elements with item names.

// // Select HTML elements to use globally:
// const divMenuItems = document.body.querySelector("#menu-items");
// const dishImage = document.getElementById("dish-image");
// const dishName = document.getElementById("dish-name");
// const dishDescription = document.getElementById("dish-description");
// const dishPrice = document.getElementById("dish-price");

// // Create global menuData variable to store data we will fetch from the db;
// let dishMenu;

// // FUNCTIONALITY TO LOAD ITEMS ON THE SIDEBAR AND DEFAULT MENU ITEM:

// window.addEventListener("load", (event) => {

//     // Fetch data from the database using a GET request:
//     fetch("http://localhost:3000/menu/1")
//         .then(response => response.json())
//         .then(firstMenuItem => {

//         dishImage.src = firstMenuItem.image;
//         dishName.textContent = firstMenuItem.name;
//         dishDescription.textContent = firstMenuItem.description;
//         dishPrice.textContent = `$${firstMenuItem.price}`;

//     })

//     console.log("page is fully loaded");

    
//     fetch("http://localhost:3000/menu")

//     // Receive data from db and convert to JavaScript
//     .then(response => response.json())

//     // Define a function with "menu" as argument:
//     // Console log menu to check value coming in from db is an array. Assign it to menuData to use in subsequent .then() functions.
//     // Start a forEach function that takes in "item" as an argument. Then, create a span tag for each item in the array.
//     // Add the "name" attribute received from the db as textContent for the newly created span tag.
//     // Append the new spanTag to the #menu-items div (globally defined):

//     .then(menu => {
//         console.log(menu);
//         dishMenu = menu;

//         dishMenu.forEach((item, index) => {
                // console.log(index);
//             const spanTag = document.createElement("span");
//             spanTag.textContent = item.name;
//             spanTag.id = item.id;
//             divMenuItems.append(spanTag);

//             // Add event listener to the spanTag created above. Pass the item data as textContent for the name, description and price, and the image as src:
//             s
//         });

//     })

// });

// const plusButton = document.querySelector("#plus-button");
// const subtractButton = document.querySelector("#subtract-button");

// let numberOfItems = 0;

// plusButton.addEventListener("click", event => {

//     numberOfItems++;

//     cartAmount.textContent = numberOfItems;
// })

// subtractButton.addEventListener("click", event => {

//     if (numberOfItems !== 0 ) {
//         numberOfItems--;
//     }
//     cartAmount.textContent = numberOfItems;
// })

// 
//     console.log(dishName.textContent);
//     console.log(numberOfItems);
//     console.log(dishMenu);

//     // Create a for function that takes in the numberOfItems from the form and writes item cart to the database x number of times.

//         // for (let i = numberOfItems; i <= numberOfItems; i++) {
//         //     console.log(`The form was submitted ${numberOfItems} times!`);

//         //     fetch("http://localhost:3000/cart", {
//         //         method: "POST",
//         //         headers: {
//         //             "Content-Type": "application/json",
//         //             "Accept": "application/json"
//         //         },
//         //         body: JSON.stringify({
//         //             name: dishName.textContent,
//         //             image: dishImage.src,
//         //             description: dishDescription.textContent,
//         //             price: dishPrice.textContent
//         //         })
//         //     })
//         //     .then(response => response.json())
//         //     .then(cart => {
//         //         const orderSummary = document.querySelector("#order-summary"); //div
//         //         const tableTag = document.createElement("table"); // <table></table>
//         //         const tdTag = document.createElement("td") // <td></td>
//         //         const trTag = document.createElement("tr"); // <tr></tr>
//         //         trTag.append(tdTag); // <table><tr>...</tr></table>
//         //         tableTag.append(trTag); // <table><tr>...</tr></table>

//         //         trTag.textContent = cart.name;

//         //     })

//         //   }

// })

