import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {CircularProgress, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../redux/slice/productReducer';
import AddToCartButton from '../atoms/AddToCartButton';

export default function ListOfProduct() {
    const dispatch = useDispatch();
    const {items, error, loading} = useSelector((state) => state.products);

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
                    <Grid item xs={12} md={3}>
                        <Card key={product._id} sx={{maxWidth: 345, marginLeft: 5}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={product.imageUrl
                                } // Use the dynamic image URL from the API
                                alt="Product Image"
                            />
                            <Typography style={{fontSize: "1.5rem"}}>{product.name}</Typography>
                            <Typography>Price: ${product.price}</Typography>
                            <AddToCartButton productId={product._id}/>
                        </Card>
                    </Grid>
                ))}


            </Grid>


        </div>

    )
}