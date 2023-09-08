import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SingUp";
import BookView from "./Componenets/Books/SingleBookView/BookView";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path={"/"}>
            <Route index element={<Home/>} />
            <Route path={"login"} element={<Login />} />
            <Route path={"signup"} element={<SignUp />} />
              <Route path="product-view/:id" element={<BookView />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
