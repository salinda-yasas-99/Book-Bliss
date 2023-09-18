import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Typography,
    TextField,
    Button,
    CssBaseline,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {logUser} from "../Services/RestApiCalls";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url("/path-to-your-background-image.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [passwordError,setPasswordError] = useState();
    const [emailError,setEmailError] =useState();

    const user ={
        "email":email ,
        "password":password
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return;
        }
        else{
            setEmailError();
            setPasswordError();
            console.log("This is user ",user);
            logUser(user);
        }

    };

    return (
        <Grid container component="main" className={classes.root}>
           {/* <Navbar />*/}
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} lg={4} xl={4} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} lg={8} xl={4} component={Box} display="flex" justifyContent="center" alignItems="center" style={{paddingTop:"150px",}}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    <form className={classes.form} onSubmit={handleFormSubmit} method="POST">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            error={emailError && true}
                            helperText={emailError}
                            required
                            fullWidth
                            id="email"
                            label="Email address"
                            name="email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/signup" variant="body2">
                                New Customer? Register
                            </Link>
                        </Grid>
                    </Grid>
                </div>

            </Grid>
            <Grid item xs={false} sm={false} md={false} lg={false} xl={4} className={classes.image} />
        </Grid>


    );
};

export default SignUp;
