import { ADD_CONTACT, DELETE_CONTACT } from './types';

const initialState = {
  contacts: [],
  filter: '',
};

export const rootReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, payload];
      return {
        ...state,
        contacts: newContacts,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };

    default:
      return state;
  }
};
