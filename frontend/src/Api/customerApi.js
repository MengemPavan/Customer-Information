import axios from 'axios';

export const addCustomerApi = (customerData) => {
  return axios.post('/api/customers', customerData); // Adjust API endpoint as needed
};