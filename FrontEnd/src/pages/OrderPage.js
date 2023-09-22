import React, { useEffect, useState } from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, CssBaseline, Grid } from '@material-ui/core';
import { getOrderDetails } from "../Services/RestApiCalls";

const OrderPage = () => {
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        async function fetchUserDetails() {
            try {
                const orderdetails = await getOrderDetails();
                setOrders(orderdetails);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        }

        fetchUserDetails();
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", paddingTop: "80px" }} className={"orderpage"}>
            <CssBaseline />
            <Typography variant="h4" align="center" gutterBottom>
                Orders
            </Typography>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow style={{ background: '#3f51b5', color: '#fff' }}>
                                    <TableCell>ID</TableCell>
                                    <TableCell>DATE</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>DELIVERY COUNTRY</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders && orders.map((order, index) => (
                                    <TableRow key={order.orderId} style={{ background: index % 2 === 0 ? '#f3f3f3' : '#fff', color: '#333' }}>
                                        <TableCell>{order.orderId}</TableCell>
                                        <TableCell>{order.orderDate}</TableCell>
                                        <TableCell>${order.totalPrice}</TableCell>
                                        <TableCell>
                                            {order.reserveStatus}
                                        </TableCell>
                                        <TableCell>{order.courier.shippingCountry}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderPage;

/*
import React, {useEffect, useState} from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, CssBaseline, Grid } from '@material-ui/core';
import {getOrderDetails} from "../Services/RestApiCalls";

const OrderPage = () => {
    /!*const orders = [
        {
            orderId: 1,
            created_at: '2023-09-10',
            totalPrice: 100,
            paid: true,
            paymentDate: '2023-09-11',
            delivered: false,
            deliveredDate: '2023-09-12',
        },
        {
            orderId: 2,
            created_at: '2023-09-11',
            totalPrice: 50,
            paid: false,
            paymentDate: null,
            delivered: false,
            deliveredDate: null,
        },
    ];*!/

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        async function fetchUserDetails() {
            try {
                const orderdetails = await getOrderDetails();
                setOrders(orderdetails);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        }

        fetchUserDetails();
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", paddingTop: "80px" }} className={"orderpage"}>
            <CssBaseline />
            <Typography variant="h4" align="center" gutterBottom>
                Orders
            </Typography>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow style={{ background: '#3f51b5', color: '#fff' }}>
                                    <TableCell>ID</TableCell>
                                    <TableCell>DATE</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>DELIVERY COUNTRY</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order, index) => (
                                    <TableRow key={order.orderId} style={{ background: index % 2 === 0 ? '#f3f3f3' : '#fff', color: '#333' }}>
                                        <TableCell>{order.orderId}</TableCell>
                                        <TableCell>{order.orderDate}</TableCell>
                                        <TableCell>${order.totalPrice}</TableCell>
                                        <TableCell>
                                            {order.reserveStatus}
                                        </TableCell>
                                        <TableCell>{order.courier.shippingCountry}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>


    );
};

export default OrderPage;



*/
