import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: DELETE_CONTACT,
//     payload: id,
//   };
// };
