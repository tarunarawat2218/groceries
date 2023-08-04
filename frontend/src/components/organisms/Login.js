import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../redux/slice/UserReducer';
import {useSelector} from "react-redux/es/hooks/useSelector";
import {LoadingButton} from "@mui/lab";
import {Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';

export default function Login() {
    const dispatch = useDispatch();
    const {isLoading, error} = useSelector((state) => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    };

    const validateForm = () => {
        let valid = true;

        if (!email.trim()) {
            setEmailError('Email is required.');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address.');
            valid = false;
        }

        if (!password.trim()) {
            setPasswordError('Password is required.');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            valid = false;
        }

        return valid;
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (validateForm()) {
            dispatch(loginUser({email, password}));
        }
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    React.useEffect(() => {
        if (error) {
            setOpenSnackbar(true);
        }
    }, [error]);
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    <Box component="form" noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            color='success'
                            autoFocus
                            value={email}
                            onChange={handleEmailChange}
                            error={Boolean(emailError)}
                            helperText={emailError}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            color='success'
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePasswordChange}
                            error={Boolean(passwordError)}
                            helperText={passwordError}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="success"/>}
                            label="Remember me"
                        />
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='success'
                            sx={{mt: 3, mb: 2}}
                            onClick={handleLogin}
                            loading={isLoading}
                        >
                            Log In
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs color='success'>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/sign" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    severity="error"
                    onClose={handleCloseSnackbar}
                >
                    {error}
                </MuiAlert>
            </Snackbar>
        </>
    )
}
