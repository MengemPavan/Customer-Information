import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Paper, Typography } from '@mui/material';

const CustomerGrid = () => {
  const customers = useSelector((state) => state.customer.customers);

  return (
    <Box sx={{ mt: 5 }}>
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
