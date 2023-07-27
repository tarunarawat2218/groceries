import React from 'react';

import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from "../molecules/SearchBar";

export default function Header() {
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


                </Toolbar>
            </AppBar>
        </Box>
    );
}