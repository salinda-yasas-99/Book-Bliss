import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SingUp";
import CartMain from "./pages/CartPage";
import BookView from "./Componenets/Books/SingleBookView/BookView";

import UserProfile from "./pages/UserProfile";
import Cart from "./Componenets/Cart/Cart";
import {useState} from "react";
import book1 from "./assets/Books/eng/eng-book_1.jpg";
import book2 from "./assets/Books/eng/eng-book_2.jpg";
import book3 from "./assets/Books/eng/eng-book_3.jpg";
import book4 from "./assets/Books/eng/eng-book_4.jpg";

function App() {
    const [cart, setCart] = useState([]);


    const handleAddToCart = async (book, quantity) => {
        // Check if a book with the same bookId already exists in the cart
        const existingItemIndex = cart.findIndex(item => item.bookId === book.bookId);

        if (existingItemIndex !== -1) {
            // If the book exists in the cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            // Update the cart state with the updated cart array
            setCart(updatedCart);
        } else {
            // If the book doesn't exist in the cart, add it
            const newItem = {
                bookId: book.bookId,
                bookName: book.name,
                bookUrl : book.source,
                quantity: quantity,
                price: book.price,
                booktotal: book.price * quantity,
            };

            // Create a copy of the current cart and add the new item to it
            const updatedCart = [...cart, newItem];

            // Update the cart state with the new cart array
            setCart(updatedCart);
        }
        console.log(cart);

    };


    const handleUpdateCartQty = async (bookId, updatedQuantity) => {

        // Create a copy of the current cart
        const updatedCart = [...cart];

        // Find the index of the item in the cart that matches the given bookId
        const itemIndex = updatedCart.findIndex(item => item.bookId === bookId);

        // If the item with the given bookId is found in the cart, update its quantity
        if (itemIndex !== -1) {
            updatedCart[itemIndex].quantity = updatedQuantity;
            updatedCart[itemIndex].booktotal =updatedCart[itemIndex].price *updatedQuantity;
        }

        // Update the cart state with the updated cart array
        setCart(updatedCart);
    };

    const handleRemoveFromCart = async (bookId) => {

        const updatedCart = [...cart];

        const itemIndex = updatedCart.findIndex(item => item.bookId === bookId);

        // If the item with the given bookId is found in the cart, update its quantity
        if (itemIndex !== -1) {
            updatedCart.splice(itemIndex,1);
        }
        setCart(updatedCart);
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
      </BrowserRouter>
  );
}

export default App;
