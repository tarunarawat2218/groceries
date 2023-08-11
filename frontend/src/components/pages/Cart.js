import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, placeOrder } from '../../redux/slice/cartReducer';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddToCartButton from '../molecules/AddToCartButton';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  const loading = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);
  const dispatch = useDispatch();
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handlePlaceOrder = async () => {
    setPlacingOrder(true);
    await dispatch(placeOrder({ items, total }));
    setPlacingOrder(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1 style={{ padding: '1rem', fontFamily: 'Noto Serif Khojki, serif' }}>MY CART</h1>
        {items.map((product) => (
          <ul key={product.id}>
            <li style={{ maxWidth: 500, listStyle: 'none' }}>
              <Card
                sx={{
                  display: 'flex',
                  width: '80rem',
                  marginLeft: '5rem',
                  borderRadius: 5,
                  boxShadow: '',
                }}
              >
                <CardContent sx={{ flex: '1 0 auto', width: '20rem' }}>
                  <CardMedia sx={{ height: 200, width: '18rem' }} image={product.imageUrl} title="green iguana" />
                </CardContent>
                <CardContent style={{ maxWidth: 800 }}>
                  <Typography gutterBottom variant="h3" component="div" mr={50} style={{ fontFamily: 'rank Ruhl Libre, serif' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" fontSize="1.5rem">
                    ₹{product.price}
                  </Typography>
                </CardContent>
                <AddToCartButton productId={product.productId} />
              </Card>
            </li>
          </ul>
        ))}
      </div>
      {items.length > 0 ? (
        <Button
          variant="contained"
          color="success"
          style={{ height: '5rem', width: '10rem', margin: '3rem' }}
          onClick={handlePlaceOrder}
        >
          {placingOrder ? <CircularProgress color="inherit" size={24} /> : 'Place Order'}
        </Button>
      ) : null}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {items.length === 0 && <i className="bi bi-cart-x" style={{ fontSize: '35rem', color: 'green' }}></i>}
      </div>
    </>
  );
}
