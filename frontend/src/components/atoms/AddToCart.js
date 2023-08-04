import React, { useState } from 'react';
import Button from '@mui/material/Button';

const MyComponent = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (!isAdded) {
      setIsAdded(true);
      setQuantity(1);
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleRemoveFromCart = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setIsAdded(false);
      setQuantity(0);
    }
  };

  return (
    <div>
      {isAdded ? (
        <>
          <Button variant="contained" color="success" onClick={handleRemoveFromCart}>
            -
          </Button>
          <Button variant="contained" color="success" >
          {quantity}
          </Button>
          <Button variant="contained" color="success" onClick={handleAddToCart}>
            +
          </Button>
        </>
      ) : (
        <Button variant="contained" color="success" onClick={handleAddToCart}>
          Add
        </Button>
      )}
    </div>
  );
};

export default MyComponent;
