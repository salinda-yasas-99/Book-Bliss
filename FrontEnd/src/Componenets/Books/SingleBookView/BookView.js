import React from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./bookView.css";
import {getBooks} from "../../../Services/RestApiCalls";



const createMarkup = (text) => {
    return { __html: text };
};

const BookView = () => {

    const [books,setBooks] = useState([]);
    const [book, setBook] = useState([]);


    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getBooks();
            setBooks(books);
        };

        fetchBooks();
    }, []);


   /* useEffect(() => {
        console.log("This books array is book view",books);
    }, []);*/


   /* useEffect(() => {
        if (booksArray) {
            setBooks(booksArray);
        }
    }, [books]);

    useEffect(() => {
        console.log("This books array is book view",books);
    }, []);*/

    const fetchProduct = async (id) => {

        console.log("this is id "+id);
        const resultBook = books.find((product) => product.id === parseInt(id));
        console.log("this is result book",resultBook);

        if (resultBook) {
            const { name, price, source, desc,author ,category,subCategory,language} = resultBook;
            setBook({
                name,
                price,
                source,
                desc,
                author,
                category,
                subCategory,
                language
            });
        } else {
            console.log('Book not found');
        }
    };

    useEffect(() => {
        const id = window.location.pathname.split("/");
        console.log("This is id in book view", id);
        fetchProduct(id[2]);
    }, [books]);

   /* useEffect(() => {
        const id = window.location.pathname.split("/");
        console.log("This is id in book view",id);
        fetchProduct(id[2]);
    }, []);*/

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

                    <Typography variant="h6">By {book.author} (Author)</Typography>
                    <Typography variant="p" >Language :{book.language}</Typography>
                    <Typography variant="p" >Category :{book.category}</Typography>
                    <Typography variant="p" >Sub Category :{book.subCategory}</Typography>
                    <br />
                    <Typography variant="p" dangerouslySetInnerHTML={createMarkup(book.desc)}/>
                    <Typography variant="h3" color="secondary">
                        Price: <b> Rs.{book.price} </b>
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
