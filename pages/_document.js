// Core
import Document, {
  Html,
  Main,
} from 'next/document';

// Elements
import { OpenSans } from '../elements/openSans';

// Other
import { NextHeadCustom, NextScriptCustom } from '../init/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const userAgent = ctx.req && ctx.req.headers['user-agent'];

    return {
      ...initialProps,
      userAgent
    };
  }

  render() {
    console.log('Document');

    return (
      <Html lang='en'>
        <NextHeadCustom />
        <OpenSans />
        <body>
          <Main />
          <NextScriptCustom />
        </body>
      </Html>
    );
  }
}