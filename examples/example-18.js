// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        // /post/:slug(\\d{1,}) will match /post/123 but not /post/abc
        source: '/post/:slug(\\d{1,})',
        destination: '/news/:slug', // Matched parameters can be used in the destination
        permanent: false,
      },
    ]
  },
}