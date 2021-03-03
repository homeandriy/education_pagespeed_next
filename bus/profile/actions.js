import { types } from "./types";

export const profileActions = {
  fillProfile: (profile) => {
    return {
      type: types.FILL_PROFILE,
      payload: profile,
    }
  },
  setPopular: () => {
    return {
      type: types.SET_POPULAR,
    }
  },
  setVerified: () => {
    return {
      type: types.SET_VERIFIED,
    }
  },
  setViews: (views) => {
    return {
      type: types.SET_VIEWS,
      payload: views,
    }
  },
};
