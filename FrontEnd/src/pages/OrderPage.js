import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, CssBaseline, Grid } from '@material-ui/core';

const OrderPage = () => {
    const orders = [
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
    ];

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
                                    <TableCell>PAID</TableCell>
                                    <TableCell>DELIVERED</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order, index) => (
                                    <TableRow key={order.orderId} style={{ background: index % 2 === 0 ? '#f3f3f3' : '#fff', color: '#333' }}>
                                        <TableCell>{order.orderId}</TableCell>
                                        <TableCell>{order.created_at.substring(0, 10)}</TableCell>
                                        <TableCell>${order.totalPrice}</TableCell>
                                        <TableCell>
                                            {order.paid ? order.paymentDate?.substring(0, 10) : <span style={{ color: 'red' }}>Not Paid</span>}
                                        </TableCell>
                                        <TableCell>
                                            {order.delivered ? (
                                                order.deliveredDate?.substring(0, 10)
                                            ) : (
                                                <span style={{ color: 'red' }}>Not Delivered</span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>

        /*<div style={{ display: "flex", flexDirection: "column", paddingTop: "80px" }} className={"orderpage"}>
            <CssBaseline />
            <Typography variant="h4" align="center" gutterBottom>
                Orders
            </Typography>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow style={{ background: 'lightblue' }}>
                                    <TableCell>ID</TableCell>
                                    <TableCell>DATE</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>PAID</TableCell>
                                    <TableCell>DELIVERED</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order, index) => (
                                    <TableRow key={order.orderId} style={{ background: index % 2 === 0 ? 'lightgray' : 'white' }}>
                                        <TableCell>{order.orderId}</TableCell>
                                        <TableCell>{order.created_at.substring(0, 10)}</TableCell>
                                        <TableCell>${order.totalPrice}</TableCell>
                                        <TableCell>
                                            {order.paid ? order.paymentDate?.substring(0, 10) : <span style={{ color: 'red' }}>Not Paid</span>}
                                        </TableCell>
                                        <TableCell>
                                            {order.delivered ? (
                                                order.deliveredDate?.substring(0, 10)
                                            ) : (
                                                <span style={{ color: 'red' }}>Not Delivered</span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>*/
    );
};

export default OrderPage;


/*
import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, CssBaseline, Grid } from '@material-ui/core';

const OrderPage = () => {
    const orders = [
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
    ];

    return (
        <div style={{display:"flex",flexDirection:"column",paddingTop:"80px"}} className={"orderpage"}>
            <CssBaseline />
            <Typography variant="h4" align="center" gutterBottom>
                Orders
            </Typography>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>DATE</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>PAID</TableCell>
                                    <TableCell>DELIVERED</TableCell>
                                   {/!* <TableCell></TableCell>*!/}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.orderId}>
                                        <TableCell>{order.orderId}</TableCell>
                                        <TableCell>{order.created_at.substring(0, 10)}</TableCell>
                                        <TableCell>${order.totalPrice}</TableCell>
                                        <TableCell>
                                            {order.paid ? order.paymentDate?.substring(0, 10) : <span style={{ color: 'red' }}>Not Paid</span>}
                                        </TableCell>
                                        <TableCell>
                                            {order.delivered ? (
                                                order.deliveredDate?.substring(0, 10)
                                            ) : (
                                                <span style={{ color: 'red' }}>Not Delivered</span>
                                            )}
                                        </TableCell>
                                        {/!*<TableCell>
                                            <Button variant="outlined" color="primary">
                                                Details
                                            </Button>
                                        </TableCell>*!/}
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
