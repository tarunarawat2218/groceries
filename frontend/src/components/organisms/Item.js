import React from 'react';
// import axios from 'axios';
import  Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Item() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/v1/products')
  //     .then(response => {
  //       console.log(response.data)
  //       setItems(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error('API request error:', error);
  //     });
  // }, []);

  return (
    <div>
     

      {/* List of Products */}
      <ul>
        {/* {items.map(product => ( */}

<Card sx={{ maxWidth: 345, marginLeft: 5 }}>
<CardMedia
  component="img"
  height="194"
  // Add the image source (src) attribute here
  image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/464420a.jpg?ts=1687953675"
  alt="Product Image"
/>
<Button variant="contained">Add to Cart</Button>
</Card>
          
        {/* ))} */}
      </ul>
    </div>
  );
}
