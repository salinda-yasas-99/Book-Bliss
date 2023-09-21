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
                                   {/* <TableCell></TableCell>*/}
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
                                        {/*<TableCell>
                                            <Button variant="outlined" color="primary">
                                                Details
                                            </Button>
                                        </TableCell>*/}
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



/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Card, CardContent, CardHeader, CardActions, Button, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
    },
    container: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    card: {
        maxWidth: 500,
        /!*width: '100%', // Set the card width to 100%
        [theme.breakpoints.down('xs')]: {
            maxWidth: 200, // Adjust the maximum width for extra small screens
        },
        [theme.breakpoints.between('sm', 'md')]: {
            maxWidth: 300, // Adjust the maximum width for small and medium screens
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 400, // Adjust the maximum width for large screens
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: 500, // Adjust the maximum width for extra large screens
        },*!/
    },
    title: {
        color: 'black',
        marginBottom: theme.spacing(3),
    },
}));

const ordersData = [
    { id: 1, productName: 'Book 1', quantity: 2, total: 20.0, status: 'Processing' },
    { id: 2, productName: 'Book 2', quantity: 1, total: 10.0, status: 'Shipped' },
    { id: 3, productName: 'Book 3', quantity: 3, total: 30.0, status: 'Processing' },
];

const OrdersPage = () => {
    const classes = useStyles();

    return (
        /!*<div className={classes.root} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>*!/
        <div className={classes.root}>
            <CssBaseline />
            {/!*<Container maxWidth="xl" className={classes.container}>*!/}
            <Container maxWidth="md" className={classes.container} style={{display:"flex",backgroundColor:"yellow",marginTop:90,flexDirection:"column"}}>
                <div>
                <Typography variant="h4" align="center" className={classes.title}>
                    User Orders
                </Typography>
                </div>
                <div>
                    <Grid container className={"Hellow"} spacing={3} style={{display:"flex",flexDirection:"column",backgroundColor:"red",alignContent:"space-around"}}>
                        {ordersData.map((order) => (
                            /!*<Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={order.id} style={{backgroundColor:"blue"}}>*!/
                                <Card className={classes.card} style={{backgroundColor:"green"}} sx={{ maxWidth: 100 }}>
                                    <CardHeader title={order.productName} subheader={`Quantity: ${order.quantity}`} />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Total: ${order.total.toFixed(2)}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Status: {order.status}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View Details
                                        </Button>
                                    </CardActions>
                                </Card>
                            /!*</Grid>*!/
                        ))}
                    </Grid>
                </div>


                </Container>

            </div>

    );
};

export default OrdersPage;*/
