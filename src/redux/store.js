import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter/filter-slice';
import contactReducer from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});