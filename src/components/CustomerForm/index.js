import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import { addCustomer } from "../../Store/customerSlice";

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Phone number is not valid'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  currentOrganization: Yup.string().required('Current organization is required'),
});

const CustomerForm = () => {
  const error = useSelector((state) => state.customer.error);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      currentOrganization: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addCustomer(values));
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        id="phone"
        name="phone"
        label="Phone Number"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        margin="normal"
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        margin="normal"
      />
      <TextField
        fullWidth
        id="address"
        name="address"
        label="Address"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
        margin="normal"
      />
      <TextField
        fullWidth
        id="currentOrganization"
        name="currentOrganization"
        label="Current Organization"
        value={formik.values.currentOrganization}
        onChange={formik.handleChange}
        error={formik.touched.currentOrganization && Boolean(formik.errors.currentOrganization)}
        helperText={formik.touched.currentOrganization && formik.errors.currentOrganization}
        margin="normal"
      />
      <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default CustomerForm;
