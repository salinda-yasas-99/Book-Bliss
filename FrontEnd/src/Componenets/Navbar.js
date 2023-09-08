import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
    Button,
    Box,
    useMediaQuery,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assets/circles.png";
import useStyles from "./Styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    // Use useMediaQuery to check screen size for responsiveness
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <div>
            <AppBar
                position="fixed"
                className={classes.appBar}
                color="inherit"
            >
                <Toolbar>
                    <Typography
                        component={Link}
                        to="/"
                        variant="h5"
                        className={classes.title}
                        color="inherit"
                    >
                        <img
                            src={logo}
                            alt="Book Store App"
                            height="50px"
                            className={classes.image}
                        />
                        <strong>BooK Bliss</strong>
                    </Typography>

                    {/* Add padding to the Navbar using Box */}
                    <Box ml={isMobile ? 2 : 4} />

                    <div className={classes.grow} />
                    <div className={classes.button}>

                        <Button
                            component={Link}
                            to="/signup"
                            color="primary"
                            className={classes.button}
                        >
                            Sign In
                        </Button>
                        <IconButton
                            component={Link}
                            to="/cart"
                            aria-label="Show cart items"
                            color="inherit"
                        >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;



/*
import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography, Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assets/circles.png";
import useStyles from "./Styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography
                        component={Link}
                        to="/"
                        variant="h5"
                        className={classes.title}
                        color="inherit"
                    >
                        <img
                            src={logo}
                            alt="Book Store App"
                            height="50px"
                            className={classes.image}
                        />
                        <strong>BooK Bliss</strong>
                    </Typography>


                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <Button
                            component={Link}
                            to="/login"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Log in
                        </Button>
                        <Button
                            component={Link}
                            to="/signup"
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                        >
                            Sign Up
                        </Button>
                        <IconButton
                            component={Link}
                            to="/cart"
                            aria-label="Show cart items"
                            color="inherit"
                        >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
*/
