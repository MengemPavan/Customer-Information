import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addCustomerApi } from '.././Api/customerApi';

export const addCustomer = createAsyncThunk(
  'customer/addCustomer',
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await addCustomerApi(customerData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
    loading: false,
    error: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customers.push(action.payload);
      })
      .addCase(addCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;
