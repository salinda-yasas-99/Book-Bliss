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
import {registerUser} from "../Services/RestApiCalls";
import mainImg from "../assets/backgroun/20.png";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },

    image: {
      /*  backgroundImage:`url(${mainImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',*/
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
    errorText: {
        color: 'red',
        marginTop: theme.spacing(1), // Add some spacing between text field and error message
    },
}));

const SignUp = () => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordError, setPasswordError] = useState();
    const [emailError,setEmailError] =useState();

    const NewUser = {
        "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "password": password
    };

    

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return;
        }
        else {
            setPasswordError();
            setEmailError();
            console.log("New user is: ",NewUser);
            registerUser(NewUser);

        }
    };



    return (
        <Grid container component="main" className={classes.root}>

            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} lg={4} xl={4} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} lg={8} xl={4} component={Box} display="flex" justifyContent="center" alignItems="center"  style={{paddingTop:"150px",}}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <form className={classes.form} onSubmit={(e) =>handleFormSubmit(e)} method="POST">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            name="firstname"
                            autoComplete="off"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lastname"
                            label="Last Name"
                            name="lastname"
                            autoComplete="off"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            error={emailError && true}
                            helperText={emailError}
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            error={passwordError && true}
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
                        <TextField
                            variant="outlined"
                            margin="normal"
                            error={passwordError && true}
                            helperText={passwordError}
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      {/*  {error && <Typography variant="body2" color="error">{error}</Typography>}*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Register
                        </Button>
                    </form>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Log in
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
