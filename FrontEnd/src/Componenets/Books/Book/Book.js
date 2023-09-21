import React, {useEffect, useState} from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardActionArea,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./bookStyles";
import book_1 from "../../../assets/Books/eng/eng-book_1.jpg"
import book_2 from "../../../assets/Books/eng/eng-book_2.jpg"

const Book = ({book, onAddToCart }) => {
    const classes = useStyles();


    /*{
        "id": 1,
        "name": "The Jungle Book",
        "price": 700.00,
        "source": "./assets/Books/eng/eng-book_1.jpg",
        "desc": "In The Jungle Book, a young boy named Mowgli becomes a member of the Seeonee Wolf Pack. A cruel tiger named Shere Khan plots against Mowgli and the leader of his pack, Akela. When Mowgli grows up, he realizes that he must rejoin the ranks of men.Mowgli strays from his village one day. After being attacked by Shere Khan, he's saved by Father Wolf, who asks Akela, the leader of the wolves, to accept Mowgli as a member of the pack.Mowgli briefly returns to the world of men, but leaves after he learns that Shere Khan has been plotting against Akela. He defeats the tiger, but knows that someday he will rejoin the man-pack.A python named Kaa takes Mowgli down to the Cold Lairs, where he steals an ankus. He discards the ankus, fearing its deadly curse. This results in the death of six men. \nAfter this incident, Mowgli becomes unhappy and gradually drifts toward the world of men.",
        "author": "Rudyard Kipling",
        "category": "Tamil",
        "subCategory": "Grade 10",
        "language": "English"
    }*/

    return (
        <Card className={classes.root}>
            <Link to={`product-view/${book.id}`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={book.source}
                        title={book.name}
                    />
                </CardActionArea>
            </Link>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" >{book.name}</Typography>

                </div>
                <div className={classes.cardContent}>
                    <Typography variant="h6">
                        <b style={{color:"#093f51"}}>Rs.{book.price}</b>
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button
                    variant="contained"
                    className={classes.button}
                    endIcon={<AddShoppingCart />}
                    onClick={() => onAddToCart(book,1)}
                >
                    <b>ADD TO CART</b>
                </Button>
            </CardActions>
        </Card>
    );
};

export default Book;
