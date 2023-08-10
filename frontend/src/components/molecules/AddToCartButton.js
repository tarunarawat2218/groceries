import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import ApiService from "../../service/apiService";
import {CircularProgress} from "@mui/material";

const AddToCartButton = ({productId}) => {
    const {items} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        console.log(`Car item ${productId} ${items}`)
        console.log(items)
        const existingItem = items.find((item) => item.productId === productId);

        if (existingItem) {
            setIsAdded(true);
            setQuantity(existingItem.quantity);
        } else {
            setIsAdded(false);
            setQuantity(0);
        }
    }, [items, productId]);


    const handleAddToCart = async () => {
        try {
            setIsLoading(true);
            if (quantity > 0) {
                const newQuantity = quantity + 1
                await ApiService.updateCart(productId, newQuantity);
                setQuantity(newQuantity);
            } else {
                await ApiService.updateCart(productId, 1);
                setQuantity(1);
                setIsAdded(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRemoveFromCart = async () => {
       try{
        setIsLoading(true);

        if (quantity > 1) {
            const newQuantity = quantity - 1
            await ApiService.updateCart(productId, newQuantity);
            setQuantity(newQuantity);
        } else {
            await ApiService.updateCart(productId, 0);
            setIsAdded(false);
            setQuantity(0);
        }
       }catch(error){
        console.error(error);

       }
       finally {
        setIsLoading(false);
    }
    };

    return (
        <div style={{margin:"0.5rem"}}>
            {isAdded ? (
                <>
                    <Button variant="contained" color="success" onClick={handleRemoveFromCart} disabled={isLoading}>
                        -
                    </Button>
                    {isLoading ? <CircularProgress style={{color:"green", size:"2px"}}/> : <span  style={{margin:"0.5rem"}}>{quantity}</span>}

                    <Button variant="contained" color="success" onClick={handleAddToCart} disabled={isLoading}>
                        +
                    </Button>
                </>
            ) : (
                <Button variant="contained" color="success" onClick={handleAddToCart} disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add'}
                </Button>
            )}
        </div>
    );
};

export default AddToCartButton;
