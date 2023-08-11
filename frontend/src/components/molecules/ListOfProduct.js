import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slice/productReducer';
import AddToCartButton from './AddToCartButton';

export default function ListOfProduct() {
    const dispatch = useDispatch();
    const { items, error, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div><CircularProgress/></div>; // Display a loading state while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>; // Display an error message if there's an error
    }

    return (
        <div>
            <Grid container spacing={1}>
                {items.map(product => (
                    <Grid item xs={12} md={3} key={product._id}>
                        <Card sx={{ maxWidth: 345, marginBottom: "1rem", marginLeft: "2rem", borderRadius: 5 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={product.imageUrl}
                                alt="Product Image"
                            />
                            <Typography style={{ fontSize: "1.5rem", margin: "0.5rem", fontFamily: "rank Ruhl Libre, serif" }}>{product.name}</Typography>
                            <Typography style={{ margin: "0.5rem", fontSize: "1rem", fontFamily: "rank Ruhl Libre, serif" }}>₹{product.price}</Typography>
                            <Typography style={{ margin: "0.5rem", fontSize: "1rem", fontFamily: "rank Ruhl Libre, serif" }}>{product.description}</Typography>
                            <AddToCartButton productId={product._id} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
