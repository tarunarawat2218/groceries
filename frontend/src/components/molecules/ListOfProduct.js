import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';


export default function ListOfProduct() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/products')
      .then(response => {
        console.log(response.data)
        setItems(response.data.data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }, []);
  return (

    <div>

      <Grid container spacing={1}>

        {items.map(product => (
          <Grid item xs={12} md={3}>
            <Card key={product._id} sx={{ maxWidth: 345, marginLeft: 5 }} >
              <CardMedia
                component="img"
                height="194"
                image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/18396a.jpg?ts=1687327481" // Use the dynamic image URL from the API
                alt="Product Image"
              />
              <Typography style={{ fontSize: "1.5rem" }}>{product.name}</Typography>
              <Typography>Price: ${product.price}</Typography>
              <Button variant="contained" color="success">
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}



      </Grid>


    </div>

  )
}