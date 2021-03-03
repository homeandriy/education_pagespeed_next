import Link from 'next/link';
import {useDispatch} from "react-redux";
import { initializeStore } from '../init/store';
import { initialDispatcher } from '../init/initialDispatcher';
import {profileActions} from "../bus/profile/actions";

export const getServerSideProps = async (context) => {
  const store = await initialDispatcher(context, initializeStore());
  store.dispatch(profileActions.fillProfile({
    lastName: 'Name from page Map',
  }));
  const initialReduxState = store.getState();

  return {
    props: {
      initialReduxState,
    }
  }
}

const Map = () => {
  const dispatch = useDispatch();

  dispatch(profileActions.fillProfile({
    lastName: 'Name from client page Map ',
  }));

  return (
    <>
      <h1>Map Page</h1>
      <Link href='/redux'>
        <a>Contacts page</a>
      </Link>
    </>
  )
}

export default Map;