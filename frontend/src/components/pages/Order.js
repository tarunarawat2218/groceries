import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/slice/orderReducer';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Order() {
  const { orders } = useSelector((state) => state.order);
  const loading = useSelector((state) => state.order.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {orders.length === 0 ? (
        <div style={{ textAlign: 'center' }}>No orders placed</div>
      ) : (
        <div>
          {orders.map((order) => (
            <ul key={order.id} style={{ listStyle: 'none' }}>
              <li>
                
                <Card sx={{ display: 'flex' }}>
                

                  <CardContent style={{ maxWidth: 800 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {order._id}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    {order.items.map(item=>item.image)} 
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                      {order.items.map((item, index) => (
                        <span key={item.productId}>
                          <img src={item.imageUrl} alt={item.name} style={{ height: '50px' }} />
                          {item.name}
                          {index !== order.items.length - 1 && ' + '}
                        </span>
                      ))}
                    </Typography>

                  
                  </CardContent>
                </Card>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
