import React from "react";
import { Container, Grid, Typography, Paper } from "@material-ui/core";
import logo from "../assets/circles.png";
import {brown} from "@material-ui/core/colors";

const Footer = () => {
    return (
        <Paper elevation={3} style={{ backgroundColor: "#1c2331", padding: "24px" }}>
            <Container>
                <Grid container spacing={3} justifyContent="center" alignItems="center" >
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={4} style={{ padding: "10px",display:"flex", alignItems: "center",flexDirection:"column"}}>

                            <img src={logo} alt="Book Store App" height="50px" style={{ marginRight: "10px" }} />
                            <Typography variant="h6" style={{ color: "#fff" }}>
                                <strong>Book Bliss</strong>
                            </Typography>

                            <Typography variant="body2" style={{ color: "#fff",textAlign:"center"}}>
                                Book-Bliss is an online React web application where the customer can
                                purchase books online. Through this book store, users can search for a book by its title and later add it to the shopping cart for purchase using a credit card transaction.
                            </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6} md={3} lg={3} xl={4} style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <Typography variant="h6" style={{ color: "#fff" }}>
                            <strong>Products</strong>
                        </Typography>
                        <Typography variant="body2" style={{ color: "#fff" }}>
                           Book Bliss
                        </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6} md={3} lg={3} xl={4} style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <Typography variant="h6" style={{ color: "#fff" }}>
                            <strong>Contact</strong>
                        </Typography>
                        <Typography variant="body2" style={{ color: "#fff" }}>
                            <i className="fa fa-envelope mr-3" /> webadmin@bookbliss.lk
                        </Typography>
                        <Typography variant="body2" style={{ color: "#fff" }}>
                            <i className="fa fa-phone mr-3" /> +94 775676788
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="body2" align="center" style={{ color: "#fff" }}>
                            &copy; All Rights Reserved. Book Bliss {new Date().getFullYear()}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default Footer;
