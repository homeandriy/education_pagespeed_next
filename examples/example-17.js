// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        // /blog/:slug* will match /blog/a/b/c/d/hello-world
        source: '/blog/:slug*',
        destination: '/news/:slug*', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}