// Core
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

// Other
import { useStore } from '../init/store';
import { useApollo } from '../init/apollo';
import nextI18NextConfig from '../init/next-i18next.config';

function MyApp({ Component, pageProps }) {
  console.log('_app');
  const store = useStore(pageProps.initialReduxState);
  const apolloCLient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <title>Common page</title>
      </Head>
      <Provider store={store}>
        <ApolloProvider client={apolloCLient}>
          <Component theme='default' {...pageProps} />
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
