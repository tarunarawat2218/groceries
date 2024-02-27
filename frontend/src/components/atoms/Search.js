import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import AddToCartButton from './AddToCartButton';

export default function ProductPage() {
    const [products, setProducts] = useState([]); // Your product data state

    // Function to handle search and filter products based on search term
    const handleSearch = (searchTerm) => {
        // Filter products based on the search term
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // Update products state with filtered products
        setFilteredProducts(filteredProducts);
    };
}

function ProductGrid({ items }) {
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

export default ProductGrid;
