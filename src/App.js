import React from 'react';
import { Container } from '@mui/material';
import CustomerForm from './components/CustomerForm';
import CustomerGrid from './components/CustomerGrid';

function App() {
  return (
    <Container maxWidth="md">
      <CustomerForm />
      <CustomerGrid />
    </Container>
  );
}

export default App;
