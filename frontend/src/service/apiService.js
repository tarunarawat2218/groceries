// ProductService.js
import axios from 'axios';

class ApiService {
    // Define the base URL of your API
    baseURL = 'http://localhost:8080/api/v1';

    // Method to fetch products from the API
    async getProducts() {
        try {
            const response = await axios.get(`${this.baseURL}/products`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }


    async loginUser(email, password) {
        try {
            const response = await axios.post(`${this.baseURL}/auth/login`, {email, password});
            console.log(response)
            return response.data.data;
        } catch (error) {
            throw Error(error.response.data.message)
        }
    };

    async getCartItems() {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.get(`${this.baseURL}/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response)
            return response.data.data.items;
        } catch (error) {
            throw error.response.data.error;
        }
    }

    async updateCart(productId, quantity) {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(`${this.baseURL}/cart`, {
                productId: productId,
                quantity: quantity,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response)
            return response.data.data.items;
        } catch (error) {
            throw error.response.data.error;
        }
    }

    async deleteProduct(productId) {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.delete(`${this.baseURL}/cart`, {
                productId: productId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response)
            return response.data.data.items;
        } catch (error) {
            throw error.response.data.error;
        }
    }
}


export default new ApiService();
