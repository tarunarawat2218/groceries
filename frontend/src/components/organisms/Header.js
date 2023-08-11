import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from "../molecules/SearchBar";
import Button from "@mui/material/Button"
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {checkLoginStatus, logout} from "../../redux/slice/UserReducer";
import {useLoginStatus} from '../../hooks/useAuth';
import {useNavigate} from "react-router-dom";
import {fetchCartItems} from "../../redux/slice/cartReducer";
import AppLogo from "../atoms/Logo";

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useLoginStatus();
    const navigate = useNavigate()
    const {items} = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(checkLoginStatus());
        dispatch(fetchCartItems());
    }, [dispatch]);


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{backgroundColor:"#FDFDFD",padding:"0.5rem"}}>
                <Toolbar>
                    <AppLogo/>
                    <SearchBar>
                    </SearchBar>
                    <Box sx={{flexGrow: 1}}/>
                    {isLoggedIn ? (
                        <Button variant="contained" style={{margin: '1rem'}} onClick={() => {
                            dispatch(logout());
                            navigate("/")
                        }}>
                            Logout
                        </Button>
                    ) : (
                        <Button variant="contained" href="/login" style={{margin: '1rem'}}>
                            Login
                        </Button>
                    )}
                    <Button variant="contained" href='/order' color='success' style={{margin: '1rem'}}>My Orders</Button>
                    <Button variant="contained" href='/cart' color='success'>Cart</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}