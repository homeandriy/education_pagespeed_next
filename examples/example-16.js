// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        // /old-blog/:slug will match /old-blog/hello-world (no nested paths)
        source: '/old-blog/:slug',
        destination: '/news/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}