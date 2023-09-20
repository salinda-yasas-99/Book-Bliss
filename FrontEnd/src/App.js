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
import React, {useEffect, useState} from "react";
import book1 from "./assets/Books/eng/eng-book_1.jpg";
import book2 from "./assets/Books/eng/eng-book_2.jpg";
import book3 from "./assets/Books/eng/eng-book_3.jpg";
import book4 from "./assets/Books/eng/eng-book_4.jpg";
import Footer from "./Componenets/Footer";
import Checkout from "./Componenets/Checkout Form/Checkout/Checkout";
import jwt_decode from "jwt-decode";
import {countries} from "country-data";
import PaymentForm from "./Componenets/Checkout Form/PaymentForm";
import axios, {Axios} from "axios";
import OrderPage from "./pages/OrderPage";

function App() {

    const [accessToken,setAccessToken] = useState("");

    const [user,setUser] = useState();


    const [cart, setCart] = useState({
        id:1,
        items: [], // Initialize as an empty array
        totalItems: 0,
        totalPrice:0,
    });

    const [newOrder,setNewOrder] = useState({})

    const BooksArray= [{id :10,name:"book1",price: 12,source:book1 , desc:"This is my book",author:"Martin",category:"sinhala",subCategory:"Novel"},
        {id :20,name:"book2",price: 10,source:book2 , desc:"This is my book",author:"Martin",category:"english",subCategory:"Mystery"},
        {id :30,name:"book3",price: 13,source:book3 , desc:"This is my book",author:"Martin",category:"english",subCategory:"Adventure"},
        {id :40,name:"book4",price: 15,source:book4 , desc:"This is my book",author:"Martin",category:"sinhala",subCategory:"Grade 10"}];


    /*{
    "id":1,
    "line_items":[{"bookId":20,"name":"book2","source":"/static/media/eng-book_2.f8cac6eccd0cf1c56581.jpg","quantity":3,"price":10,"booktotal":30},{"bookId":40,"name":"book4","source":"/static/media/eng-book_4.08edfc6ba3c5c578201c.jpg","quantity":1,"price":15,"booktotal":15}],
    "customer":{"firstname":"Salinda","lastname":"Yasas","email":"salindasym@gmail.com"},
    "shipping":{"name":"Domestic","street":"142/1,Wewalduwa road, Kelaniya","town_city":"Kelaniya","postal_zip_code":"11600","country":"American Samoa"},
    "shippingType":{"shipping_method":{"type":"Domestic","price":500}},
    "payment":{"gateway":"stripe","stripe":{"payment_method_id":"pm_1NrExoSHFIyVtnqxJBcc3Ofn"}},
    "totalPayment":45
    }
*/



            /*{
        "id":1,
        "items":[
        {"bookId":20,"name":"book2","source":"/static/media/eng-book_2.f8cac6eccd0cf1c56581.jpg","quantity":1,"price":10,"booktotal":10},{"bookId":30,"name":"book3","source":"/static/media/eng-book_3.47580ba5dc373f0ca881.jpg","quantity":1,"price":13,"booktotal":13}
        ],
        "totalItems":2,
        "totalPrice":23
        }
        */


    /*
    * const accessCheck = () => {
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(JSON.stringify(token));
  console.log("this is decoded token in app", decodedToken);

  const TokenExpired = decodedToken ? Date.now() >= decodedToken.exp * 1000 : true;
  if (TokenExpired) {
    console.log("Token is expired");
  } else {
    setAccessToken(token);
    const tokenUser = decodedToken.sub;
    setUser(tokenUser);
    // Move the console.log statements here
    console.log("This is decoded user in app", tokenUser);
    console.log("This is decoded access in app", token);
  }
}

    * */

    /*const accessCheck = async () => {
        const token = localStorage.getItem('token');
        const decodedToken = jwt_decode(JSON.stringify(token));
        console.log("this is decoded token in app", decodedToken);

        const TokenExpired = decodedToken ? Date.now() >= decodedToken.exp * 1000 : true;
        if (TokenExpired) {
            console.log("Token is expired");
        } else {
            setAccessToken(token);
            const tokenUser = decodedToken.sub;
            setUser(tokenUser);
            console.log("This is decoded access in app", token);
        }
    }*/



    const accessCheck = async () => {
        const token = localStorage.getItem('token');
        console.log('Stored token:', token);

        if (!token) {
            console.log('No token found in local storage.');
            return;
        }
        try {
            const decodedToken = jwt_decode(token);
            //console.log('Decoded token:', decodedToken);

            const TokenExpired = Date.now() >= decodedToken.exp * 1000;
            if (TokenExpired) {
                console.error('Token is expired');
            } else {
                setAccessToken(token);
                const tokenUser = decodedToken.sub;
                setUser(tokenUser);
                // Call testEndpoint after setting accessToken
                //await testEndpoint();
            }
        } catch (error) {
            console.error('Error decoding token:', error.message);
        }
    };

    useEffect(() => {
        accessCheck();

    }, []);


    useEffect(() => {
        // Check if user has a value before logging
        if (user) {
            console.log("This is decoded user in app", user);
        }
    }, [user]);


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
                cat: book.category,
                subcat:book.subCategory,
                booktotal: book.price * quantity,
            };

            const updatedCart = {
                id:1,
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
                    id:1,
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
                    cat: book.category,
                    subcat:book.subCategory,
                                        booktotal: book.price * quantity,
                };

                let updatedTotal = cart.totalPrice+ book.price * quantity;


                const updatedCart = {
                    id:1,
                    items: [...cart.items, newItem],
                    totalItems: cart.totalItems + quantity,
                    totalPrice: updatedTotal,

                };


                // Update the cart state with the new cart object
                setCart(updatedCart);
            }
        }
    };

   /* const countries  = require('country-data').countries;

    const countryNames = [];*/

    /*// Loop through the countries and log each object individually
    countries.all.forEach((country, index) => {
        countryNames.push(country.name);
        // console.log(`Country ${index + 1}:`, country.name);
    });

    countryNames.forEach((country,index) =>{
        console.log("Country name is"+country);
    })
    //console.log("This is countries"+countries.all);*/


    useEffect(() => {
        console.log("Cart has been updated:", JSON.stringify(cart));

    }, [cart]);

    useEffect(() => {
        console.log("this is new order",JSON.stringify(newOrder));
    }, [newOrder]);


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



    const handleCaptureCheckout = async (newOrder) => {

            setNewOrder(newOrder);
            //refreshCart();

    };





  return (

      <BrowserRouter>
          <Navbar
              totalItems={cart.totalItems}
              user={user}
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
            <Route path={"order"} element={<OrderPage/>} />
              <Route path={"checkout"} element={<Checkout cart={cart} order={newOrder} onCaptureCheckout={handleCaptureCheckout}/>} />
        </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
