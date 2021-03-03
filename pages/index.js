// Core
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as R from 'ramda';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Components
import { Customer } from '../bus/profile/customerComponent';
import { Cats } from '../bus/cats/catsComponent';
import { Countries } from '../bus/countries/countriesComponent';

// Actions
import { profileActions } from '../bus/profile/actions';
import { catsActions } from '../bus/cats/actions';

// Selectors
import { selectViews } from '../bus/profile/selectors';
import { selectCatsEntries } from '../bus/cats/selectors';

// Other
import { initializeStore } from '../init/store';
import { initApollo } from '../init/initApollo';
import { initialDispatcher } from '../init/initialDispatcher';
import { increase } from '../helpers/viewsCount';
import { serverDispatch } from '../helpers/serverDispatch';
import { disableSaga } from '../helpers/disableSaga';
import queryCountries from '../bus/countries/hooks/useCountries/gql/queryCountries.graphql';

export const getServerSideProps = async (context) => {
  console.log('getServerSideProps');
  const { locale } = context;
  const { store, stateUpdates } = await initialDispatcher(context, initializeStore());

  const initialApolloState = await initApollo(context, async (execute) => {
    await execute({
      query: queryCountries,
    });
  });

  const updatedViews = await increase();
  await serverDispatch(store, (dispatch) => {
    dispatch(profileActions.setViews(updatedViews));
    dispatch(catsActions.loadCatsAsync());
  });

  await disableSaga(store);

  const currentPageReduxState = {
    profile: {
      views: selectViews(store.getState())
    },
    cats: {
      entries: selectCatsEntries(store.getState()),
    },
  };

  const initialReduxState = R.mergeDeepRight(
    stateUpdates,
    currentPageReduxState
  );

  return {
    props: {
      initialReduxState,
      initialApolloState,
      ... await serverSideTranslations(locale, ['common']),
    }
  }
};

const HomePage = ({initialReduxState}) => {
  console.log('Home Page');
  const [ isScriptLoaded, setScriptLoaded ] = useState(false);
  const { locale, defaultLocale } = useRouter();

  useEffect(() => {
    if (!isScriptLoaded) {
      setScriptLoaded(true);
    }
  }, []);

  const statusJSX = isScriptLoaded ? <span>Ready</span> : <span>Loading...</span>;

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Home page {statusJSX}</h1>
      <h2>Current locale: {locale}</h2>
      <h2>Default locale: {defaultLocale}</h2>
      <Customer />
      <Cats />
      <Countries />
      <Link href='/customer'>
        <a>Contacts page</a>
      </Link>
    </>
  );
};

export default HomePage;