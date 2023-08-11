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
            <Grid container spacing={3}>
                {items.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 5 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={product.imageUrl}
                                alt="Product Image"
                            />
                            <div style={{ padding: '1rem' }}>
                                <Typography style={{ fontSize: '1.5rem', fontFamily: 'rank Ruhl Libre, serif' }}>
                                    {product.name}
                                </Typography>
                                <Typography style={{ fontSize: '1rem', fontFamily: 'rank Ruhl Libre, serif', color: 'gray' }}>
                                    ₹{product.price}
                                </Typography>
                                <Typography style={{ fontSize: '1rem', fontFamily: 'rank Ruhl Libre, serif' }}>
                                    {product.description}
                                </Typography>
                            </div>
                            <AddToCartButton productId={product._id} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
