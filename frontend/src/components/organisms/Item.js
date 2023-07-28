import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Item() {
    return (
        <Card sx={{ maxWidth: 345, marginLeft:5}}>

            <CardMedia
                component="img"
                height="194"
                image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=720/layout-engine/2022-06/morning-banner.jpg"
                alt="Pan Corner"
            />
        </Card>
    );
}
