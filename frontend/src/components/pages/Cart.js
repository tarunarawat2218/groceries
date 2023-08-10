import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, placeOrder, clearCart } from '../../redux/slice/cartReducer';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddToCartButton from '../molecules/AddToCartButton';
import Button from '@mui/material/Button';

export default function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  const loading = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handlePlaceOrder = () => {
    dispatch(placeOrder({ items, total }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{}}>
        {items.map((product) => (
          <ul key={product.id}>
            <li style={{ maxWidth: 500, listStyle: 'none' }}>
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: '1 0 auto', width: '15rem' }}>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={product.imageUrl}
                    title="green iguana"
                  />
                </CardContent>
                <CardContent style={{ maxWidth: 800 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography>{product.description}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                  <AddToCartButton productId={product.productId} />
                </CardContent>
              </Card>
            </li>
          </ul>
        ))}
      </div>
      {items.length > 0 ? (
        <Button
          variant="contained"
          color="success"
          style={{ height: "5rem", width: '10rem', margin: '3rem' }}
          onClick={handlePlaceOrder}
        >
          Place Order
        </Button>
      ) : null}
      {items.length === 0 && <p>Your cart is empty.</p>}
    </>
  );
}
