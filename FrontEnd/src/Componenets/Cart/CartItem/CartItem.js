import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './CartItemStyles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (

        <Card className="cart-item">
            {/*cart=[{bookId: 1,
                bookName: amara,
                bookUrl : book2,
                quantity: 10,
                price: 20,
                booktotal: 200} ]*/}
            <CardMedia image={item.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="h6" color='secondary' >{item.booktotal}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.bookId, item.quantity - 1)}>-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.bookId, item.quantity + 1)}>+</Button>
                </div>
                <Button className={classes.button} variant="contained" type="button" color='secondary' onClick={() => handleRemoveFromCart(item.bookId)}>Remove</Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;
