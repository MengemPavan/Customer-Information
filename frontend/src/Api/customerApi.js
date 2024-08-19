import axios from 'axios';
import {ADDCUSTOMER_API }from '../Constants';
import {GETCUSTOMERS_API} from '../Constants';

export const addCustomerApi = (customerData) => {
  return axios.post(ADDCUSTOMER_API, customerData); // Adjust API endpoint as needed
};


export const fetchCustomersApi = () => {
  return axios.get(GETCUSTOMERS_API); // Adjust API endpoint as needed
};