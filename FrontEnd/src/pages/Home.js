import React, {useState} from "react";
import Books from "../Componenets/Books/Books";




const Home  = ({books , onAddToCart}) =>{


    return(
        <div className={"home"}>
            <Books books={books} onAddToCart={onAddToCart}/>
        </div>
    )

}

export default Home;