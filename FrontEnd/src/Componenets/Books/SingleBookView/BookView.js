import React from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./bookView.css";

import book1 from "../../../assets/Books/eng/eng-book_1.jpg";
import book2 from "../../../assets/Books/eng/eng-book_2.jpg";
import book3 from "../../../assets/Books/eng/eng-book_3.jpg";
import book4 from "../../../assets/Books/eng/eng-book_4.jpg";
import Navbar from "../../Navbar";

const createMarkup = (text) => {
    return { __html: text };
};

const BookView = () => {

    const books= [{id :10,name:"book1",price: 12,source:book1 , desc:"This is my book"},
            {id :20,name:"book2",price: 10,source:book2 , desc:"This is my book"},
            {id :30,name:"book3",price: 13,source:book3 , desc:"This is my book"},
            {id :40,name:"book4",price: 15,source:book4 , desc:"This is my book"},];

    const [book, setBook] = useState({});

    const fetchProduct = async (id) => {

        console.log("this is id "+id);
        const resultBook = books.find((product) => product.id === parseInt(id));
        console.log(resultBook);

        if (resultBook) {
            const { name, price, source, desc } = resultBook;
            setBook({
                name,
                price,
                source,
                desc,
            });
        } else {
            console.log('Book not found');
        }
    };

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);

    return (
        <Container className="product-view">
            <Grid container>
                <Grid item xs={12} md={6} className="image-wrapper">
                    <img src={book.source} alt={book.name} />
                </Grid>
                <Grid item xs={12} md={5} className="text">
                    <Typography variant="h2">
                        <b>{book.name}</b>
                    </Typography>
                    <Typography
                        variant="p"
                        dangerouslySetInnerHTML={createMarkup(book.desc)}
                    />
                    <Typography variant="h3" color="secondary">
                        Price: <b> {book.price} </b>
                    </Typography>
                    <br />
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Button
                                size="large"
                                className="custom-button"
                                component={Link}
                                to="/"
                            >
                                Continue Shopping
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookView;
