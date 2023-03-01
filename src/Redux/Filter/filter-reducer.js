import { SET_FILTER } from './filter-type';

const initialState = '';

export const filterReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;

    default:
      return state;
  }
};
