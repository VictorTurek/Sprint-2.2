//Otra forma de encontrar los descuentos

function applyPromotionsCart(totalPrice) {
    let descuentoAceite = 0;
    let descuentoCake = 0;

    let subtotalWithDiscount = 0;

    let oilIndex = cart.findIndex(product => product.id === 1);
    let cakeIndex = cart.findIndex(product => product.id === 3);
    // console.log(oilIndex);
    // console.log(cakeIndex);

    if (oilIndex >= 0) { //si el carrito contiene aceite
        if (cart[oilIndex].amount >= products[0].offer.number) {
            descuentoAceite = products[0].price * cart[oilIndex].amount * (products[0].offer.percent / 100);
        }
    }
    //console.log("Descuento Acumulado en Aceite: ", descuentoAceite);

    if (cakeIndex >= 0) { //si el carrito contiene mix de pasteles
        if (cart[cakeIndex].amount >= products[2].offer.number) {
            descuentoCake = products[2].price * cart[cakeIndex].amount * (products[2].offer.percent / 100);
        }
    }
    //console.log("Descuento Acumulado en Cake: ", descuentoCake);

    subtotalWithDiscount = totalPrice - descuentoAceite - descuentoCake;
    let roundedPrice = subtotalWithDiscount.toFixed(2);
   
    console.log("Discounted Price", roundedPrice)
    
    return subtotalWithDiscount;

}
// Apply promotions to each item in the array "cart"
