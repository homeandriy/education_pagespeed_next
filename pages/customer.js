// Core
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';
import { useRouter } from "next/router";

// Components
import { Customer } from '../bus/profile/customerComponent';

// Actions
import { profileActions } from '../bus/profile/actions';

// Selectors
import { selectViews } from '../bus/profile/selectors';

// Other
import { initializeStore } from '../init/store';
import { initialDispatcher } from '../init/initialDispatcher';
import { increase } from '../helpers/viewsCount';
import { serverDispatch } from '../helpers/serverDispatch';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async (context) => {
  console.log('getServerSideProps');
  const { locale } = context;
  console.log('locale', locale);
  const { store, stateUpdates } = await initialDispatcher(context, initializeStore());

  const updatedViews = await increase();
  await serverDispatch(store, (dispatch) => {
    dispatch(profileActions.setViews(updatedViews));
  });

  const currentPageReduxState = {
    profile: {
      views: selectViews(store.getState())
    }
  }

  const initialReduxState = R.mergeDeepRight(
    stateUpdates,
    currentPageReduxState
  );

  return {
    props: {
      initialReduxState,
      ... await serverSideTranslations(locale, ['common']),
    }
  }
};

const CustomerPage = ({initialReduxState}) => {
  const { locale, defaultLocale } = useRouter();
  console.log('Customer Page');
  return (
    <>
      <h1>Customer page</h1>
      <h2>Current locale: {locale}</h2>
      <h2>Default locale: {defaultLocale}</h2>
      <Customer />
      <Link href='/'>
        <a>Contacts page</a>
      </Link>
    </>
  );
};

export default CustomerPage;