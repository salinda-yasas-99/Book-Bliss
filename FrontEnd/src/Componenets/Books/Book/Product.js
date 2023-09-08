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
import useStyles from "./productStyles";



const Product = ({product, onAddToCart }) => {
    const classes = useStyles();

    //const product= [{id :1,name:"book1",price: 12,source:book1},];
    return (
        <Card className={classes.root}>
            <Link to={`product-view/${product.id}`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product.source}
                        title={product.name}
                    />
                </CardActionArea>
            </Link>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6">{product.name}</Typography>
                </div>
                <div className={classes.cardContent}>
                    <Typography variant="h6" color="secondary">
                        <b>{product.price}</b>
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button
                    variant="contained"
                    className={classes.button}
                    endIcon={<AddShoppingCart />}
                    //onClick={() => onAddToCart(product.id, 1)}
                >
                    <b>ADD TO CART</b>
                </Button>
            </CardActions>
        </Card>
    );
};

export default Product;
