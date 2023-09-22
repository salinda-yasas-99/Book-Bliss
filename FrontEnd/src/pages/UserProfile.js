import React, {useEffect, useState} from 'react';
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
import axios from "axios";
import {Link} from "react-router-dom";
import {getUserDetails} from "../Services/RestApiCalls";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '70vh',
        justifyContent:'center',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    footer: {
        marginTop: 'auto',
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

    const [user, setUser] = useState(null);

    useEffect(() => {
         async function fetchUserDetails() {
            try {
                const userDetails = await getUserDetails();
                setUser(userDetails); // Update the user state
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        }

        fetchUserDetails();
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Container component="main" maxWidth="xs">
                    <div className={classes.root}>
                        {user ? (
                            <Paper elevation={3} className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <AccountCircleIcon fontSize="large" />
                                </Avatar>
                                <Typography component="h1" variant="h5" className={classes.userName}>
                                    {user.firstName}
                                </Typography>
                                <Typography variant="body2">{user.email}</Typography>
                            </Paper>
                        ) : (
                            <p>Loading user details...</p>
                        )}
                        {user && (
                            <TableContainer component={Paper} className={classes.table}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Username
                                            </TableCell>
                                            <TableCell align="right">{user.email}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                First Name
                                            </TableCell>
                                            <TableCell align="right">{user.firstName}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Last Name
                                            </TableCell>
                                            <TableCell align="right">{user.lastName}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Email Address
                                            </TableCell>
                                            <TableCell align="right">{user.email}</TableCell>
                                        </TableRow>
                                        {/* Other user details */}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.editButton}
                            component={Link}
                            to={"/order"}
                        >
                            View My Orders
                        </Button>
                    </div>
                </Container>
            </div>
        </div>

        /*<div className={classes.root}>
            <div className={classes.content}>
                <Container component="main" maxWidth="xs">
                    <div className={classes.root}>
                        {user ? (<Paper elevation={3} className={classes.paper}>
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
                                        <TableCell align="right">{user.email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Email Address
                                        </TableCell>
                                        <TableCell align="right">{user.email}</TableCell>
                                    </TableRow>
                                   {/!* <TableRow>
                                        <TableCell component="th" scope="row">
                                            Phone Number
                                        </TableCell>
                                        <TableCell align="right">123-456-7890</TableCell>
                                    </TableRow>*!/}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.editButton}
                            component={Link}
                            to={"/order"}
                        >
                            View My Orders
                        </Button>
                    </div>: (
                            <p>Loading user details...</p>
                            )}
                </Container>
            </div>
        </div>*/
    );
}

export default UserProfile;

