import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SingUp";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path={"/"}>
            <Route index element={<Home/>} />
            <Route path={"login"} element={<Login />} />
            <Route path={"signup"} element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
