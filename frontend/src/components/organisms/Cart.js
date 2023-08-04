import { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import MyComponent from '../atoms/AddToCart';
import { useSelector} from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchCartItems } from '../../redux/slice/cartReducer';

export default function MediaCard() {
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

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    <Grid container spacing={1} sx={{ flexGrow: 1 }}>
    <Grid xs={6}>
    <Card sx={{ maxWidth: 345, margin:'2rem', display:"-ms-grid"}}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/97250a.jpg?ts=1688628274"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pepsi
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Price: 50
        </Typography>
        <MyComponent/>
      </CardContent>
    </Card>
      </Grid>
      <Grid xs={6}>
        <Card sx={{ maxWidth: 345, margin:'2rem' }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/163972a.jpg?ts=1690813224"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Impact Sugar Free Mint Candy (Peach)
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Price: 150
          </Typography>
          <MyComponent/>
        </CardContent>
        
      </Card>
      </Grid>
      </Grid>
      </>
  );
}
