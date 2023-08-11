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

  const sortedOrders = orders.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div>
<h1 style={{padding:"2rem", fontFamily: "Noto Serif Khojki, serif"}}>My Orders</h1>
      {sortedOrders.length === 0 ? (
        <div style={{ textAlign: 'center' }}>No orders placed</div>
      ) : (
        <div>
          {sortedOrders.map((order) => (
            <ul key={order.id} style={{ listStyle: 'none' }}>
              <li>
                <Card sx={{ display: 'flex', margin: '1rem' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Order-Id: {order._id}
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'nowrap', // Prevent images from breaking to the next line
                      }}
                    >
                      {order.items.map((item) => (
                        <div key={item.productId} style={{ marginRight: '2rem' }}>
                          <img src={item.imageUrl} alt={item.name} style={{ height: '80px' }} />
                        </div>
                      ))}
                    </div>
                    <Typography gutterBottom variant="h5" component="div" mt={2} ml={3}>
                      {order.items.map((item, index) => (
                        <span key={item.productId}>
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
