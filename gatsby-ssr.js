import React from "react"
import Layout from "./src/components/common/layout/layout"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
