import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    {
      id: nanoid(),
      name: 'Oleg Hubskiy',
      number: '367-25-45',
    },
    {
      id: nanoid(),
      name: 'Oksana Smelaya',
      number: '487-68-25',
    },
    {
      id: nanoid(),
      name: 'Ivan Petrov',
      number: '367-36-48',
    },
  ],
  filter: '',
};

const rootReduser = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);
console.log(store);
