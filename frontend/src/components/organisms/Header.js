import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from "../molecules/SearchBar";
import Button from "@mui/material/Button"

export default function Header() {
    // const Header = () =>{
    //     const products = useSelector(state => state)
    //     console.log('Products',products);
    // }

    return (<div>
        <PrimarySearchAppBar/>
    </div>)
}


function PrimarySearchAppBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="primary" >
                <Toolbar>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        Groceries
                    </Typography>
                    <SearchBar>

                    </SearchBar>
                    <Box sx={{flexGrow: 1}}/>

                    
                    <Button variant="contained" style={{margin:"1rem"}}>Login</Button>
                    <Button variant="contained" color='success'>Cart</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}