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


 async loginUser(credentials) {
  try {
    const response = await axios.post(`${this.baseURL}/login`,credentials);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
async getCartItems() {
  try {
    const response = await axios.get(`${this.baseURL}/cart`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
}
}


export default new ApiService()