const withSass = require('@zeit/next-sass')

module.exports = withSass(
    {
      env: {
        kabassuServer: 'https://localhost:8081',
        kabassuResultsServer: 'https://localhost:8090',
      },
    }
  )