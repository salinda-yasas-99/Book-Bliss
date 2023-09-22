import React, {useEffect, useState} from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';
import {saveNewOrder} from "../../Services/RestApiCalls";

const stripePromise = loadStripe("pk_test_51J201hSHFIyVtnqxN74XMUe3JQIK1I9DD4DnLVPlWV3yiDoGSI6kVIZlW33T5QEFtPR0yL9hQVcp5WEU0dhSjzZa00NivWOi4j");


const PaymentForm = ({ nextStep, backStep, shippingData, onCaptureCheckout,cart}) => {


    const [newOrder,setNewOrder] =useState({});

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

    /*shippingData :
        address:"142/1,Wewalduwa road, Kelaniya"
        city:"Kelaniya"
        email:"salindasym@gmail.com"
        firstName:"Salinda"
        lastName:"Yasas"
        shippingCountry:"Austria"
        shippingOption:{price:500,type:"Domestic"}
        zip:"11600"*/


    useEffect(() => {
        console.log("this is order in Paymentform", JSON.stringify(newOrder));
    }, [newOrder]);

    useEffect(() => {
        console.log("this is shippingdata in Paymentform", JSON.stringify(shippingData));

    }, [shippingData]);

    useEffect(() => {
        console.log("this is cart in Paymentform", JSON.stringify(cart));

    }, [cart]);

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) {
            console.log('[error]', error);
        } else {
            const orderData = {
                id:cart.id,
                line_items: cart.items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { name: shippingData.shippingOption.type, street: shippingData.address, town_city: shippingData.city, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                shippingType: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
                totalPayment: cart.totalPrice+shippingData.shippingOption.price
            };

            setNewOrder(orderData);
            onCaptureCheckout(orderData);
            saveNewOrder(orderData);
            nextStep();
        }
    };

    return (
        <>
            <Review cart={cart} shippingData={shippingData}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>{({ elements, stripe }) => (
                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                        <CardElement />
                        <br /> <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outlined" onClick={backStep}>Back</Button>
                            <Button type="submit" variant="contained" disabled={!stripe} style={{ backgroundColor: '#1C2331', color: '#FFFF' }} >
                                Pay {cart.totalPrice+shippingData.shippingOption.price}
                            </Button>
                        </div>
                    </form>
                )}
                </ElementsConsumer>
            </Elements>
        </>
    );
};

export default PaymentForm;
