import React, { useState } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Book/Product";
import useStyles from "./BooksStyles";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/4.jpeg";
//import "../ProductView/style.css";
import "./BookView/ProductView.css"
import book1 from "../../assets/Books/eng/eng-book_1.jpg";
import book2 from "../../assets/Books/eng/eng-book_2.jpg";
import book3 from "../../assets/Books/eng/eng-book_3.jpg";
import book4 from "../../assets/Books/eng/eng-book_4.jpg";

const Products = ({ onAddToCart }) => {

    const products= [{id :10,name:"book1",price: 12,source:book1},
        {id :20,name:"book2",price: 10,source:book2},
        {id :30,name:"book3",price: 13,source:book3},
        {id :40,name:"book4",price: 15,source:book4},];

    const classes = useStyles();

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <main className={classes.mainPage}>
            <div className={classes.toolbar} />
            <Carousel fade infiniteLoop useKeyboardArrows autoPlay>
                <Carousel.Item>
                    <img className="d-block w-100" src={logo1} alt="slide" />
                    <Carousel.Caption>
                        <div className={classes.searchs}>
                            <Input
                                className={classes.searchb}
                                type="text"
                                placeholder="Which book are you looking for?"
                                onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                            />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/*{searchTerm === "" && (
                <>
                    <h3 className={classes.contentHeader}>FEATURED</h3>
                    <Grid
                        className={classes.contentFeatured}
                        container
                        justify="center"
                        spacing={1}
                    >
                        {products.map((product) => (
                            <>
                                {product.categories.length > 0 ? (
                                    <Grid
                                        className={classes.contentFeatured}
                                        item
                                        xs={6}
                                        sm={5}
                                        md={3}
                                        lg={2}
                                        id="pro"
                                    >
                                        <Product product={product} onAddToCart={onAddToCart} />
                                    </Grid>
                                ) : (
                                    ""
                                )}
                            </>
                        ))}
                    </Grid>
                </>
            )}*/}

            <Grid className={classes.content} container justify="center" spacing={5}>
                {products
                    .map((product) => (

                        <Grid
                            className={classes.content}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            id={product.id}
                            key={product.id}
                        >
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
            </Grid>
        </main>
    );
};

export default Products;



/*<Grid className={classes.content} container justify="center" spacing={5}>
    {products.filter((product) => {
        if (searchTerm === "") {
            return product;
        }
        else if (
            product.name
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
        ) {
            return product;
        }

    })
        .map((product) => (
            <Grid
                className={classes.content}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                id={product.id}
                key={product.id}
            >
                <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
        ))}
</Grid>*/
