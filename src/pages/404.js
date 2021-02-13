import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" robots="noindex, nofollow" />
    <h1>Página no encontrada</h1>
    <p>No se ha encontrado ninguna </p>
  </Layout>
)

export default NotFoundPage
