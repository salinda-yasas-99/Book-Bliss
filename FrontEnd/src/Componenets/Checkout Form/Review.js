import React, {useEffect} from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';





/*const cart = {
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
        totalItems: 3, // This property stores the total number of distinct items in the car
        totalPrice:55,
    };*/

/*const Review = ({cart}) => (
    <>
        <Typography variant="h6" gutterBottom>Order summary</Typography>
       {/!* <List disablePadding>
            {order.line_items.map((product) => (
                <ListItem style={{ padding: '10px 0' }} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                    <Typography variant="body2">{product.quantity}</Typography>
                </ListItem>
            ))}
            <ListItem style={{ padding: '10px 0' }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                    {order.totalPayment}
                </Typography>
            </ListItem>
        </List>*!/}
        <List disablePadding>
            {cart && cart.items ? (
                cart.items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.quantity}</Typography>
                    </ListItem>
                ))
            ) : (
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary="No items in the order" />
                </ListItem>
            )}
            <ListItem style={{ padding: '10px 0' }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                    {cart && cart.totalPrice ? cart.totalPrice : 0}
                </Typography>
            </ListItem>
        </List>

    </>
);*/

/*shippingData :
        address:"142/1,Wewalduwa road, Kelaniya"
        city:"Kelaniya"
        email:"salindasym@gmail.com"
        firstName:"Salinda"
        lastName:"Yasas"
        shippingCountry:"Austria"
        shippingOption:{price:500,type:"Domestic"}
        zip:"11600"*/



const Review = ({ cart,shippingData }) => {

    useEffect(() => {
        console.log("Cart in review:", JSON.stringify(cart));

    }, [cart]);

    return (
        <>
            <Typography variant="h6" gutterBottom>Order summary</Typography>
            <List disablePadding>
                {cart && cart.items ? (
                    cart.items.map((product) => (
                        <ListItem style={{ padding: '10px 0' }} key={product.name}>
                            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity} Book Price: ${product.price}`} />
                            <Typography variant="body2">{product.booktotal}</Typography>
                        </ListItem>
                    ))
                ) : (
                    <ListItem style={{ padding: '10px 0' }} key={cart.id}>
                        <ListItemText primary="No items in the order" />
                    </ListItem>
                )}
                <ListItem style={{ padding: '10px 0' }} kay={cart.id}>
                    <ListItemText
                        primary={
                            <Typography>
                                Items Total
                            </Typography>
                        }
                    />

                    <Typography variant="subtitle1" >
                        {cart && cart.totalPrice ? cart.totalPrice : 0}
                    </Typography>
                </ListItem>
                <ListItem style={{ padding: '10px 0' }} kay={cart.id}>
                    <ListItemText
                        primary={
                            <Typography>
                                Shipping charges
                            </Typography>
                        }
                    />

                    <Typography variant="subtitle1" >
                        {shippingData && shippingData.shippingOption ? shippingData.shippingOption.price : 0}
                    </Typography>
                </ListItem>
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary={<Typography style={{ fontWeight: 700,fontSize:"30px" }}>Total</Typography>}  />
                    <Typography variant="subtitle1" style={{ fontWeight: 700,fontSize:"30px" }}>
                        {cart && cart.totalPrice && shippingData.shippingOption ? cart.totalPrice+shippingData.shippingOption.price : 0}
                    </Typography>
                </ListItem>
            </List>
        </>
    );
};

export default Review;



