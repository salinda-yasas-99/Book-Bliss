import React, {useState} from "react";
import Navbar from "../Componenets/Navbar";
import Books from "../Componenets/Books/Books";
import Footer from "../Componenets/Footer";



const Home  = ({books , onAddToCart}) =>{

    /*const [cart, setCart] = useState({});



    const handleAddToCArt = (product, quantity) =>{
        const bookItem = product;
        setCart(bookItem);
    }

    const handleUpdateCartQty =(lineItemId, quantity) => {
        const response = (lineItemId, { quantity });

        setCart(response.cart);
    };

    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);

        setCart(response.cart);
    };

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response.cart);
    };

    /!*const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };*!/

    const BooksArray= [{id :10,name:"book1",price: 12,source:book1 , desc:"This is my book"},
        {id :20,name:"book2",price: 10,source:book2 , desc:"This is my book"},
        {id :30,name:"book3",price: 13,source:book3 , desc:"This is my book"},
        {id :40,name:"book4",price: 15,source:book4 , desc:"This is my book"},];*/




    return(
        <div className={"home"}>
            <Navbar user={"sali"}/>
            <Books books={books} onAddToCart={onAddToCart}/>
            <Footer />
        </div>
    )

}

export default Home;