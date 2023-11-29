// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {

    let i = id - 1;

    if (cart.includes(products[i])) {
        products[i].amount += 1;

    } else {

        products[i].amount = 1;
        cart.push(products[i]);
    }

    //console.log(products[id]);
    console.log(cart)
    calculateTotal()

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
}

// Exercise 2
function cleanCart() {

    cart = [];
    console.log(cart)

}

// Exercise 3
function calculateTotal() {
    let totalPrice = 0

    for (let i = 0; i < cart.length; i++) {
        totalPrice += (cart[i].amount * cart[i].price);
    }
    console.log("total Price", totalPrice)
    applyPromotionsCart(totalPrice)
    return totalPrice;
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4

function applyPromotionsCart(totalPrice) {
    let descuentoAceite = 0;
    let descuentoCake = 0;
    let subtotalWithDiscount = 0;



    let oilIndex = cart.findIndex(product => product.id === 1);
    let cakeIndex = cart.findIndex(product => product.id === 3);
    // console.log(oilIndex);
    // console.log(cakeIndex);


    if (oilIndex >= 0) { //si el carrito contiene aceite
        if (cart[oilIndex].amount >= 3) {
            descuentoAceite = products[0].price * cart[oilIndex].amount * 0.2;
        }
    }
    console.log("Descuento Acumulado en Aceite: ", descuentoAceite);

    if (cakeIndex >= 0) { //si el carrito contiene mix de pasteles
        if (cart[cakeIndex].amount >= 10) {
            descuentoCake = products[2].price * cart[cakeIndex].amount * 0.3;
        }
    }
    //console.log("Descuento Acumulado en Cake: ", descuentoCake);

    subtotalWithDiscount = totalPrice - descuentoAceite - descuentoCake;
    let roundedPrice = subtotalWithDiscount.toFixed(2);
   
    //console.log("Discounted Price", roundedPrice)
    
    return subtotalWithDiscount;

}
// Apply promotions to each item in the array "cart"


// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}