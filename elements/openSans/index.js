export const OpenSans = () => (
  <>
    <link rel='preload' href='/fonts/openSans/open-sans-v17-latin-regular.woff2' as='font' crossOrigin='anonymous' />
    <link rel='preload' href='/fonts/openSans/open-sans-v17-latin-700.woff2' as='font' crossOrigin='anonymous' />
    <link rel='preload' href='/fonts/openSans/open-sans-v17-latin-800.woff2' as='font' crossOrigin='anonymous' />
    {/* eslint-disable-next-line react/no-danger */}
    <style dangerouslySetInnerHTML={{
      __html: `
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          unicode-range: U+000-5FF;
          src: local('Open Sans Regular'), local('OpenSans-Regular'),
            url('/fonts/openSans/open-sans-v17-latin-regular.woff2') format('woff2'),
            url('/fonts/openSans/open-sans-v17-latin-regular.woff') format('woff');
        }
        
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          unicode-range: U+000-5FF;
          src: local('Open Sans Bold'), local('OpenSans-Bold'),
            url('/fonts/openSans/open-sans-v17-latin-700.woff2') format('woff2'),
            url('/fonts/openSans/open-sans-v17-latin-700.woff') format('woff');
        }
        
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          unicode-range: U+000-5FF;
          src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
            url('/fonts/openSans/open-sans-v17-latin-800.woff2') format('woff2'),
            url('/fonts/openSans/open-sans-v17-latin-800.woff') format('woff');
        }
      `,
    }}
    />
  </>
);