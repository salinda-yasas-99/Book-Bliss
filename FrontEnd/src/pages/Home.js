import React from "react";
import Navbar from "../Componenets/Navbar";
import Books from "../Componenets/Books/Books";
import Footer from "../Componenets/Footer";




const Home  = () =>{
    return(
        <div className={"home"}>
            <Navbar user={"salinda"}/>
            <Books />
            <Footer />
        </div>
    )

}

export default Home;