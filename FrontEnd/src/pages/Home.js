import React from "react";
import Navbar from "../Componenets/Navbar";
import SingleProductView from "../Componenets/Books/Book/Product";
import Products from "../Componenets/Books/Books";
import Books from "../Componenets/Books/Books";


const Home  = () =>{
    return(
        <div className={"home"}>
            <Navbar></Navbar>
            <Books />

        </div>
    )

}

export default Home;