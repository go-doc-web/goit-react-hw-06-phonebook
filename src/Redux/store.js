import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './Contacts/contacts-reducer';
import { filterReduser } from './Filter/filter-reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
  },
});
