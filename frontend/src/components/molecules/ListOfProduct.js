import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography,CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../redux/slice/productReducer';
import AddTOCart from '../atoms/Addtocart';

export default function ListOfProduct() {
  const dispatch = useDispatch();
  const {items,error,loading} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div><CircularProgress /></div>; // Display a loading state while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if there's an error
  }

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
              <AddTOCart/>
            </Card>
          </Grid>
        ))}



      </Grid>


    </div>

  )
}