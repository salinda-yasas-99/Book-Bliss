import React, { useState, useEffect } from "react";
import {
    CssBaseline,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    CircularProgress,
    Divider,
    Button,
} from "@material-ui/core";
/*import { Link, useHistory } from "react-router-dom";*/
import { Link } from "react-router-dom";

import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./Styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();
    //const history = useHistory();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    /*const order = {
    orderItems: [
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
    totalOrderItems: 3,
    totalPrice: 55,
    fname: "salinda",
    lname: "yasas"

};*/

    const dataFromAddressForm = (data) => {
        setShippingData(data);
        nextStep();
    };

    /*useEffect(() => {
        console.log("this is shipping data in parent", JSON.stringify(shippingData));

        /!*shippingData :
          address:"142/1,Wewalduwa road, Kelaniya"
          city:"Kelaniya"
          email:"salindasym@gmail.com"
          firstName:"Salinda"
          lastName:"Yasas"
          shippingCountry:"Austria"
          shippingOption:{price:500,type:"Domestic"}
          zip:"11600"*!/
    }, [shippingData]);*/

   /* useEffect(() => {
        console.log("this is cart in checkout", JSON.stringify(cart));

    }, [cart]);*/



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
    let Confirmation = () =>
        order.customer ? (
            <>
                <div>
                    <Typography variant="h5">
                        Thank you for your purchase, {order.customer.firstname}{" "}
                        {order.customer.lastname}!
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="subtitle2">
                        Order ref: {order.id}
                    </Typography>
                </div>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">
                    Back to home
                </Button>
            </>
        ) : (
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
        );

    if (error) {
        Confirmation = () => (
            <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">
                    Back to home
                </Button>
            </>
        );
    }

    const Form = () =>
        activeStep === 0 ? (
            <AddressForm
                nextStep={nextStep}
                setShippingData={setShippingData}
                dataFromAddressForm={dataFromAddressForm}
            />
        ) : (
            <PaymentForm
                nextStep={nextStep}
                backStep={backStep}
                shippingData={shippingData}
                onCaptureCheckout={onCaptureCheckout}
                cart={cart}
            />
        );

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <Confirmation />
                    ) : (
                        <Form />
                    )}
                </Paper>
            </main>
        </>
    );
};

export default Checkout;
