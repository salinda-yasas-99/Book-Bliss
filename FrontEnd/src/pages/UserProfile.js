/*
import React from 'react';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Button,
    Grid, Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Navbar from "../Componenets/Navbar";
import Footer from "../Componenets/Footer";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    userName: {
        marginTop: theme.spacing(2),
    },
    table: {
        minWidth: 350,
        marginTop: theme.spacing(2),
    },
    editButton: {
        marginTop: theme.spacing(2),
    },
}));

function UserProfile() {
    const classes = useStyles();

    return (
        <div>
        <Navbar />
        <Container component="main" maxWidth="xs">
            <div className={classes.root}>
                <Paper elevation={3} className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountCircleIcon fontSize="large" />
                    </Avatar>
                    <Typography component="h1" variant="h5" className={classes.userName}>
                        John Doe
                    </Typography>
                    <Typography variant="body2">johndoe@example.com</Typography>
                </Paper>
                <TableContainer component={Paper} className={classes.table}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Username
                                </TableCell>
                                <TableCell align="right">johndoe</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Email Address
                                </TableCell>
                                <TableCell align="right">johndoe@example.com</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Phone Number
                                </TableCell>
                                <TableCell align="right">123-456-7890</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.editButton}
                >
                    Edit Profile
                </Button>
            </div>

        </Container>
            <Footer />
        </div>
    );
}

export default UserProfile;



*/

import React from 'react';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Button,
    Grid, Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Navbar from "../Componenets/Navbar";
import Footer from "../Componenets/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '70vh',
        justifyContent:'center',// Make sure the container takes the full viewport height
    },
    content: {
        flexGrow: 1, // Allow content to grow and push footer to the bottom
        padding: theme.spacing(2), // Add some padding as needed
    },
    footer: {
        marginTop: 'auto', // Push the footer to the bottom
    },
    paper: {
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    userName: {
        marginTop: theme.spacing(2),
    },
    table: {
        minWidth: 350,
        marginTop: theme.spacing(2),
    },
    editButton: {
        marginTop: theme.spacing(2),
    },
}));

function UserProfile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            <div className={classes.content}>
                <Container component="main" maxWidth="xs">
                    <div className={classes.root}>
                        <Paper elevation={3} className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <AccountCircleIcon fontSize="large" />
                            </Avatar>
                            <Typography component="h1" variant="h5" className={classes.userName}>
                                John Connor
                            </Typography>
                            <Typography variant="body2">johnconnnor@example.com</Typography>
                        </Paper>
                        <TableContainer component={Paper} className={classes.table}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Username
                                        </TableCell>
                                        <TableCell align="right">johndoe</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Email Address
                                        </TableCell>
                                        <TableCell align="right">johndoe@example.com</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Phone Number
                                        </TableCell>
                                        <TableCell align="right">123-456-7890</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.editButton}
                        >
                            Edit Profile
                        </Button>
                    </div>

                </Container>
            </div>
            <Footer className={classes.footer} />
        </div>
    );
}

export default UserProfile;

