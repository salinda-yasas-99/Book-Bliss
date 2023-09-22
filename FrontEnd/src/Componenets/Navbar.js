import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
    Button,
    Box,
    useMediaQuery,
    Menu,
    MenuItem,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from "react-router-dom";
import logo from "../assets/circles.png";
import useStyles from "./Styles";



/*const Navbar = ({ totalItems, user, handleLogout }) => {*/
const Navbar = ({ totalItems, user }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    // Use useMediaQuery to check screen size for responsiveness
    const isMobile = useMediaQuery("(max-width:600px)");

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    const renderUserMenu = (
        <div>
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
            <IconButton
                aria-label="User Menu"
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                style={{ color: 'white', fontSize: '14px' }}
            >
                {user}<ArrowDropDownIcon />
            </IconButton>
            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                style={{ color: 'white' }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                    User Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );


    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}  style={{ backgroundColor: 'black' }}>
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

                    <Box ml={isMobile ? 2 : 4} />

                    <div className={classes.grow} />
                    <div className={classes.button} >
                        {user ? (
                            renderUserMenu
                        ) : (
                            <>
                                <Button
                                    component={Link}
                                    to="/signup"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Sign In
                                </Button>
                                {/*<IconButton
                                    component={Link}
                                    to="/cart"
                                    aria-label="Show cart items"
                                    color="inherit"
                                >
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>*/}
                            </>

                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;







