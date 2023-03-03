import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { contactsReducer } from './Contacts/contacts-reducer';
import { filterReduser } from './Filter/filter-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReduser,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
