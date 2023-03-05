import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

// import { contactsReducer } from './Contacts/contacts-reducer';
// import { filterReduser } from './Filter/filter-reducer';
import persistReducer from './rootreducer';

export const store = configureStore({
  reducer: persistReducer,
});

export const persistStor = persistStore(store);
