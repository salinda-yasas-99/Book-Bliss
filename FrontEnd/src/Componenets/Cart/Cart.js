import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './CartStyles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const classes = useStyles();

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/"> start adding some</Link>!
        </Typography>
    );

    //if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <>
            <Grid container spacing={4}>
           {/*     const cart = {
                items: [
            {
                bookId: 1,
                name: "Book Title",
                source: "book.jpg",
                price: 20,
                quantity: 2,
                booktotal: 40,
            },
            {
                bookId: 2,
                name: "Another Book",
                source: "another-book.jpg",
                price: 15,
                quantity: 1,
                booktotal: 15,
            },
                ],
                totalItems: 3, // This property stores the total number of distinct items in the cart
            };*/}
                {cart.items.map((cartItem) => (
                    <Grid item xs={12} sm={4} key={cartItem.id}>
                        <CartItem item={cartItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h5" >Subtotal: <b >{cart.booktotal}</b></Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" >Checkout</Button>
                </div>
            </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h5" gutterBottom><b>Your Shopping Cart</b></Typography>
            <hr/>
            { !cart.items.length ? renderEmptyCart() : renderCart() }
        </Container>
    );
};

export default Cart;
