import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../../redux/slice/cartReducer';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddToCartButton from '../atoms/AddToCartButton';


export default function Order() {
    const { items } = useSelector((state) => state.cart);
    const loading = useSelector((state) => state.cart.loading);
    const error = useSelector((state) => state.cart.error);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCartItems());
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
        {items.length === 0 ? (
          <div style={{ textAlign: 'center' }}>0 orders placed</div>
        ) : (
          <div style={{}}>
            {items.map((product) => (
              <ul>
                <li key={product.id} style={{ maxWidth: 500, listStyle: 'none' }}>
                  <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: '1 0 auto', width: '15rem' }}>
                      <CardMedia
                        sx={{ height: 300 }}
                        image="https://images.pexels.com/photos/518538/pexels-photo-518538.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                      <AddToCartButton productId={product.id} />
                    </CardContent>
                  </Card>
                </li>
              </ul>
            ))}
          </div>
        )}
        
      </>
    );
  }
  