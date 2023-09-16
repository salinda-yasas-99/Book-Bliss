import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import FormInput from './CustomTextField';
import {countries} from "country-data";

const AddressForm = ({dataFromAddressForm }) => {

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');


    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState({});

    const countryNames = [];
    var countries  = require('country-data').countries;

    const methods = useForm();


    const fetchShippingCountries = async () => {


        countries.all.forEach((country) => {
            countryNames.push(country.name);
        });

        setShippingCountries(countryNames);
        //setShippingCountry(countryNames[0]);

       /* countryNames.forEach((country,index) =>{
            console.log("Country name is"+country);
        })*/;
        //console.log("This is countries"+countries);


    };

   /* useEffect(() => {
        countryNames.forEach((country, index) => {
            //console.log("Country name is "+country+"index is"+index);
            index++;
        })
    },[]);*/



    const fetchShippingOptions = async () => {

        const deliveryOptions = [{
            type:"Domestic",
            price: 500,
        } , {
            type:"International",
            price: 400,
        }];
        setShippingOptions(deliveryOptions);
        //setShippingOption(deliveryOptions[0]);
    };

    useEffect(() => {
        fetchShippingCountries();
        fetchShippingOptions();
    }, []);

    useEffect(() => {
        console.log("this is shipping option", JSON.stringify(shippingOption));
    }, [shippingOption]);

    const gatherFormData = (data, shippingCountry, shippingOption) => {
        const formData = {
            ...data,
            shippingCountry,
            shippingOption
        };
        console.log('Form Data:', formData);
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping address</Typography>
            <FormProvider {...methods}>

                <form onSubmit={methods.handleSubmit((data) => {
                    gatherFormData(data, shippingCountry, shippingOption);
                    dataFromAddressForm({ ...data, shippingCountry, shippingOption });
                })}>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First name" />
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address" label="Address line" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Zip / Postal code" />

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {shippingCountries.map((country ,id) => (
                                    <MenuItem key={id} value={country}>
                                        {country}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption.type} fullWidth onChange={(e) => {
                                const selectedOption = shippingOptions.find((option) => option.type === e.target.value);
                                setShippingOption(selectedOption);
                            }}>
                                {shippingOptions.map((option, index) => (
                                    <MenuItem key={index} value={option.type}>
                                        {option.type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default AddressForm;
