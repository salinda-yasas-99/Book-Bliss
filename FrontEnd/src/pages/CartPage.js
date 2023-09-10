import React from "react";
import Footer from "../Componenets/Footer";
import Navbar from "../Componenets/Navbar";
import Cart from "../Componenets/Cart/Cart";


const CartMain = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) =>{
    return(<div>
        <Navbar />
        <Cart cart={cart}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}/>
        <Footer />
    </div>)
}

export default CartMain;