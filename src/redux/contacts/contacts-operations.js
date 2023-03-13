import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addContact,
  deleteContact,
} from '../API/fetchContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllContacts();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await addContact(value);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (value, { getState }) => {
      const { contacts } = getState();
      const checkForMatch = contacts.contacts.find(
        contact => contact.name.toLowerCase() === value.name.toLowerCase()
      );
      if (checkForMatch) {
        alert(`${value.name} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
