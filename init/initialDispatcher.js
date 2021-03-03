// Actions
import { profileActions } from "../bus/profile/actions";

// Selectors
import { selectIsVerified } from '../bus/profile/selectors';

// Other
import { serverDispatch } from '../helpers/serverDispatch';

export const initialDispatcher = async (
  context,
  store
) => {
  await serverDispatch(store, (dispatch) => {
    dispatch(profileActions.setVerified());
  });

  const state = store.getState();

  const stateUpdates = {
    profile: {
      isVerified: selectIsVerified(state),
    }
  };

  return {
    store,
    stateUpdates,
  };
}