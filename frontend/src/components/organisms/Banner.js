import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export default function Banner() {
    return (
        <Card
            sx={{ maxWidth: 1280, margin:5}}>

            <CardMedia
                component="img"
                height="194"
                width="10rem"
                image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="Paella dish"
            />
        </Card>
    );
}
