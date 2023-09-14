import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SingUp";
import CartMain from "./pages/CartPage";
import BookView from "./Componenets/Books/SingleBookView/BookView";
import Navbar from "./Componenets/Navbar"

import UserProfile from "./pages/UserProfile";
import Cart from "./Componenets/Cart/Cart";
import {useEffect, useState} from "react";
import book1 from "./assets/Books/eng/eng-book_1.jpg";
import book2 from "./assets/Books/eng/eng-book_2.jpg";
import book3 from "./assets/Books/eng/eng-book_3.jpg";
import book4 from "./assets/Books/eng/eng-book_4.jpg";
import Footer from "./Componenets/Footer";

function App() {
    const [cart, setCart] = useState({
        items: [], // Initialize as an empty array
        totalItems: 0,
        totalPrice:0,
    });

    /*const BooksArray= [{id :10,name:"book1",price: 12,source:book1 , desc:"This is my book"},
       {id :20,name:"book2",price: 10,source:book2 , desc:"This is my book"},
       {id :30,name:"book3",price: 13,source:book3 , desc:"This is my book"},
       {id :40,name:"book4",price: 15,source:book4 , desc:"This is my book"},];*/

    /*const cart = {
        items: [
            {
                bookId: 1,
                name: "Book Title",
                source: "book.jpg",
                price: 20,
                quantity: 2,
                booktotal: 40,
            },
            {
                bookId: 2,
                name: "Another Book",
                source: "another-book.jpg",
                price: 15,
                quantity: 1,
                booktotal: 15,
            },
        ],
        totalItems: 3, // This property stores the total number of distinct items in the cart
    };*/


    const handleAddToCart = async (book, quantity) => {
        console.log("this is passed book" + book);

        if (cart.items.length === 0) {
            // If the cart is empty, create a new cart object with the first item
            const newItem = {
                bookId: book.id,
                name: book.name,
                source: book.source,
                quantity: quantity,
                price: book.price,
                booktotal: book.price * quantity,
            };

            const updatedCart = {
                items: [newItem],
                totalItems: quantity,
                totalPrice: book.price * quantity,
            };

            // Update the cart state with the new cart object
            setCart(updatedCart);

        } else {
            // Check if a book with the same bookId already exists in the cart
            const existingItemIndex = cart.items.findIndex((item) => item.bookId === book.id);
            console.log("this is index" + existingItemIndex);

            if (existingItemIndex !== -1) {
                // If the book exists in the cart, update its quantity
                const updatedCart = { ...cart };
                updatedCart.items[existingItemIndex].quantity += 1;
                updatedCart.items[existingItemIndex].booktotal =
                    updatedCart.items[existingItemIndex].quantity * updatedCart.items[existingItemIndex].price;
                updatedCart.totalItems += quantity;

                let updatedTotal = 0;
                for(const i of updatedCart.items){
                    updatedTotal = updatedTotal+ i.booktotal;

                };

                // Update the cart state with the updated cart object
                setCart({
                    items: updatedCart.items,
                    totalItems: cart.totalItems + 1,
                    totalPrice: updatedTotal
                });

            } else {
                // If the book doesn't exist in the cart, add it as a new item
                const newItem = {
                    bookId: book.id,
                    name: book.name,
                    source: book.source,
                    quantity: quantity,
                    price: book.price,
                    booktotal: book.price * quantity,
                };

                let updatedTotal = cart.totalPrice+ book.price * quantity;


                const updatedCart = {
                    items: [...cart.items, newItem],
                    totalItems: cart.totalItems + quantity,
                    totalPrice: updatedTotal,

                };


                // Update the cart state with the new cart object
                setCart(updatedCart);
            }
        }
    };




    // Use a useEffect hook to log the updated cart when it changes
    useEffect(() => {
        console.log("Cart has been updated:", JSON.stringify(cart));
    }, [cart]);


    const handleUpdateCartQty = async (bookId, updatedQuantity) => {

        // Create a copy of the current cart
        const updatedCart = {...cart};

        // Find the index of the item in the cart that matches the given bookId
        const itemIndex = updatedCart.items.findIndex(item => item.bookId === bookId);

        // If the item with the given bookId is found in the cart, update its quantity
        if (itemIndex !== -1) {
            if(updatedQuantity !== 0){
                updatedCart.items[itemIndex].quantity = updatedQuantity;
                updatedCart.items[itemIndex].booktotal =updatedCart.items[itemIndex].price *updatedQuantity;
                let updatedTotal = 0;
                for(const i of updatedCart.items){
                    updatedTotal = updatedTotal+ i.booktotal;

                };

                updatedCart.totalPrice = updatedTotal;
            }

        }

        // Update the cart state with the updated cart array
        setCart(updatedCart);
    };

    const handleRemoveFromCart = async (bookId) => {
        // Create a copy of the current cart object
        const updatedCart = { ...cart };

        // Find the index of the item with the given bookId in the items array
        const itemIndex = updatedCart.items.findIndex(item => item.bookId === bookId);

        // If the item with the given bookId is found in the cart, remove it
        if (itemIndex !== -1) {
            updatedCart.items.splice(itemIndex, 1);

            // Update the totalItems count
            updatedCart.totalItems -= 1;

            let updatedTotal = 0;
            for(const i of updatedCart.items){
                updatedTotal = updatedTotal+ i.booktotal;

            };
            //setting updated total price
            updatedCart.totalPrice= updatedTotal;

            // Set the cart state with the updated cart object
            setCart(updatedCart);
        }
    };

    /*const handleEmptyCart = async () => {
        const response = await cart.empty();

        setCart(response.cart);
    };*/

    /*const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };*/

    const BooksArray= [{id :10,name:"book1",price: 12,source:book1 , desc:"This is my book"},
        {id :20,name:"book2",price: 10,source:book2 , desc:"This is my book"},
        {id :30,name:"book3",price: 13,source:book3 , desc:"This is my book"},
        {id :40,name:"book4",price: 15,source:book4 , desc:"This is my book"},];



  return (

      <BrowserRouter>
          <Navbar
              totalItems={cart.totalItems}
              user={"sali"}
              /*handleDrawerToggle={handleDrawerToggle}*/
          />

        <Routes>

          <Route path={"/"}>

            <Route index element={<Home books={BooksArray} onAddToCart={handleAddToCart}/>} />
            <Route path={"login"} element={<Login />} />
            <Route path={"signup"} element={<SignUp />} />
              <Route path="product-view/:id" element={<BookView />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path={"cart"} element={<CartMain cart={cart}
                                                  onUpdateCartQty={handleUpdateCartQty}
                                                  onRemoveFromCart={handleRemoveFromCart}/>}></Route>
          </Route>
        </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
