import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './Contacts/contacts-reducer';
import { filterReduser } from './Filter/filter-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReduser,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
