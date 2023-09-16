import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';



/*const order = {
    line_items: cart.items,
    customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
    shipping: { name: shippingData.shippingOption.type, street: shippingData.address, town_city: shippingData.city, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
    fulfillment: { shipping_method: shippingData.shippingOption },
    payment: {
        gateway: 'stripe',
        stripe: {
            payment_method_id: paymentMethod.id,
        },
    },
};*/

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

const Review = ({order}) => (
    <>
        <Typography variant="h6" gutterBottom>Order summary</Typography>
       {/* <List disablePadding>
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
        </List>*/}
        <List disablePadding>
            {order && order.line_items ? (
                order.line_items.map((product) => (
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
                    {order && order.totalPayment ? order.totalPayment : 0}
                </Typography>
            </ListItem>
        </List>

    </>
);

export default Review;
