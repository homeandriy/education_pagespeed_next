import { types } from "./types";

const initialState = {
  firstName: 'Walter',
  lastName: 'White',
  isPopular: false,
  isVerified: false,
  views: 0,
};

export const profileReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.FILL_PROFILE:
      return {...state, ...payload};
    case types.SET_POPULAR:
      return {...state, isPopular: true};
    case types.SET_VERIFIED:
      return {...state, isVerified: true};
    case types.SET_VIEWS:
      return {...state, views: payload};

    default:
      return state;
  };
};