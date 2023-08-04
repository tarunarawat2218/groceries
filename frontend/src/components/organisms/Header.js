import React from 'react';
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from "../molecules/SearchBar";
import Button from "@mui/material/Button"

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
                        href="/"
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            cursor: 'pointer', 
                          }}
                    >
                        Groceries
                    </Typography>
                    <SearchBar>

                    </SearchBar>
                    <Box sx={{flexGrow: 1}}/>

                    
                    <Button variant="contained" href='/login' style={{margin:"1rem"}}>Login</Button>
                    <Button variant="contained" href='/cart' color='success'>Cart</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}