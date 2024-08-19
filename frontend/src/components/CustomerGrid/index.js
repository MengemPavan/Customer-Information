import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { fetchCustomersApi } from '../../Api/customerApi';

const CustomerGrid = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  const fetchCustomers = async () => {
    try {
      const response = await fetchCustomersApi();
      setCustomers(response.data);
    } catch (err) {
      setError('Failed to load customer data');
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <Box sx={{ mt: 5 }}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Grid container spacing={2}>
        {customers.map((customer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">{customer.name}</Typography>
              <Typography>Phone: {customer.phoneNumber}</Typography>
              <Typography>Email: {customer.email}</Typography>
              <Typography>Address: {customer.address}</Typography>
              <Typography>Organization: {customer.currentOrganization}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerGrid;
