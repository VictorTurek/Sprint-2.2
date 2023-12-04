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
    amountCountUpdate()

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
}

// Exercise 2
function cleanCart() {
    cart = [];
    console.log(cart)
    printCart()
    amountCountUpdate()

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
    let promoDiscounts = 0;
    //let subtotalWithDiscount = 0;
    var IndexPromoProducts = [];

    IndexPromoProducts = cart.reduce((acumulador, producto, indice) => {
        if (producto.offer) {
            acumulador.push(indice);
        }
        return acumulador;
    }, []);

    for (let i = 0; i < IndexPromoProducts.length; i++) {
        if (cart[IndexPromoProducts[i]].amount >= cart[IndexPromoProducts[i]].offer.number) {
            promoDiscounts = cart[IndexPromoProducts[i]].price * cart[IndexPromoProducts[i]].amount * (cart[IndexPromoProducts[i]].offer.percent / 100);
        }
    }

    // subtotalWithDiscount = totalPrice - promoDiscounts;
    // let roundedPrice = subtotalWithDiscount.toFixed(2);
    // console.log("Discounted Price", roundedPrice)
    console.log("descuento", promoDiscounts.toFixed(2))
    return promoDiscounts;
}
// Apply promotions to each item in the array "cart"


// Exercise 5
function printCart() {

    var table = document.getElementById("ShoppingCartTable");
    var tbody = table.getElementsByTagName('tbody')[0];

    tbody.innerHTML = ''; //limpiamos filas existentes ara evitar duplicados.

    for (let i = 0; i < cart.length; i++) {
        var fila = tbody.insertRow();
        var celdaName = fila.insertCell();
        var insertPrice = fila.insertCell(1);
        var insertAmount = fila.insertCell(2);
        var modifyAmount = fila.insertCell(3);
        var insertTotalPrice = fila.insertCell(4);

        celdaName.textContent = cart[i].name;
        insertPrice.textContent = cart[i].price;
        insertAmount.textContent = cart[i].amount;

        // Crear botones de "+" y "-"
        var addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.classList.add('button-add'); // Agrega la clase del botón de suma
        addButton.addEventListener('click', function () {
            // Llama a la función para incrementar la cantidad
            buy(cart[i].id);
            printCart();
        });

        var minusButton = document.createElement('button');
        minusButton.textContent = '-';
        minusButton.classList.add('button-minus'); // Agrega la clase del botón de resta
        minusButton.addEventListener('click', function () {
            // Llama a la función para decrementar la cantidad
            removeFromCart(cart[i].id);
            printCart();
        });

        // Agrega los botones a la celda modifyAmount
        modifyAmount.appendChild(minusButton);
        modifyAmount.appendChild(addButton);

        insertTotalPrice.textContent = cart[i].amount * cart[i].price;
    }

    var total = calculateTotal();
    var totalPrice = document.getElementById("total_price");
    totalPrice.textContent = total;
    //console.log(total);

    var discount = applyPromotionsCart()
    var totalDiscount = document.getElementById("total_discount");
    totalDiscount.textContent = discount.toFixed(2);
    //console.log(discount);

    var FinalPrice = document.getElementById("final_price");
    FinalPrice.textContent = total - discount;
    //console.log(FinalPrice);


    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

    let i = id - 1;

    if (cart.includes(products[i])) {
        if (products[i].amount > 1) {
            products[i].amount -= 1;
        } else {
            cart.splice(i, 1);
        }

    }

    //console.log(products[id]);
    console.log(cart)
    calculateTotal()
    amountCountUpdate()

}

function open_modal() {
    printCart();
}


// Extra. cambiar el numero que aparece en el carrito.

function amountCount() {
    let totalAmount = 0;

    for (let i = 0; i < cart.length; i++) {
        totalAmount += cart[i].amount
    }
    console.log(totalAmount);
    return totalAmount;
}

// Función para actualizar el contenido del elemento con id "count_product"
function amountCountUpdate() {
    var elementoCount = document.getElementById("count_product");

    // Llama a la función para obtener la cantidad de productos
    var cantidadProductos = amountCount();

    // Actualiza el contenido del elemento con la nueva cantidad
    elementoCount.textContent = cantidadProductos;
}
//Falta llamar a la funcion.
//amountCountUpdate();
