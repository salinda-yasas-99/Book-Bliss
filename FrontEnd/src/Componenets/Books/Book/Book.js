import React from "react";
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

const Book = ({book, onAddToCart }) => {
    const classes = useStyles();

    //const product= [{id :1,name:"book1",price: 12,source:book1},];
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
                    <Typography variant="h6">{book.name}</Typography>
                </div>
                <div className={classes.cardContent}>
                    <Typography variant="h6" color="secondary">
                        <b>{book.price}</b>
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
