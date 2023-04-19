import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import 'regenerator-runtime/runtime';

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const response = await axios.get('https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies');
  const companies = Object.entries(response.data)
    .reduce((acc, [id, company]) => [...acc, { ...company, id }], []);
  return companies;
});

const initialState = [];

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => action.payload);
  },
});

export default companySlice.reducer;
