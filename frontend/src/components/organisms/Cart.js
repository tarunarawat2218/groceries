import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCartItems} from '../../redux/slice/cartReducer';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddToCartButton from "../atoms/AddToCartButton";

export default function Cart() {
    const {items} = useSelector((state) => state.cart);
    // const cartItems = useSelector(state => state.cart.items);
  const loading = useSelector(state => state.cart.loading);
  const error = useSelector(state => state.cart.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

    return (
        <Grid container spacing={1} sx={{flexGrow: 1}}>
            {items.map((item) => (
                <Grid key={item.id} xs={6} item> {/* Add 'key' prop and 'item' prop */}
                    <Card sx={{maxWidth: 345, margin: '2rem', display: '-ms-grid'}}>
                        <CardMedia
                            sx={{height: 300}}
                            image={item.name}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item .name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.price}
                            </Typography>
                            <AddToCartButton productId={item.productId}/>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>);
}

