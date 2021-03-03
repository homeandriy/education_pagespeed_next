import { useEffect } from 'react';
import Link from 'next/link';
import {verifyBrowser} from "../helpers/verifyBrowser";
import {useRouter} from "next/router";

const Contacts = ({ resource, tel }) => {
  const { pathname, replace } = useRouter();

  useEffect(() => {
    if (pathname === '/contacts') {
      replace('/blog');
    }
  }, []);

  return (
    <>
      <h1>Contacts Page</h1>
      <h2>{tel}</h2>
      <h3>{resource}</h3>
    </>
  )
}

Contacts.getInitialProps = (context) => {
  console.log('getInitialProps');
  const isBrowser = verifyBrowser();

  if (!isBrowser) {
    context.res.writeHead(301, { Location: '/blog' });
    context.res.end();
  }

  return {
    tel: '+380 654 4567',
    resource: isBrowser ? 'Client' : 'Server',
  }
}

export default Contacts;