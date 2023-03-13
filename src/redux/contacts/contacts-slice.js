import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchAddContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.push(payload);
      })
      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(item => item.id !== payload);
      })
      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default contactsSlice.reducer;