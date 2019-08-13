import React from 'react'
import Helmet from 'react-helmet'
import { Layout } from 'src/components'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
  </Layout>
)

export default NotFoundPage
