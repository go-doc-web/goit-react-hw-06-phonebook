import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});
export const deleteContact = createAction('contacts/delete');

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
