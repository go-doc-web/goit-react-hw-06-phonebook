import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer, filterReducer } from './Reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
