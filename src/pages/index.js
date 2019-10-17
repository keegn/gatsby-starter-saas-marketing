import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"

// Notes for fonts -
// step 1. add WOFF fonts to static/fonts
//step 2. add font face styles to
// https://transfonter.org/
// @font-face {
//   font-family: 'MyWebFont';
//   src:  url('myfont.woff2') format('woff2'),
//         url('myfont.woff') format('woff');
// }
// @font-face {
//   font-family: "Lato";
//   src: url("../../static/fonts/lato/Lato-Regular.woff")   format("woff");
// }
// https://medium.com/@sergeybulavyk/mastering-your-fonts-in-gatsby-fbdf2782e083

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Features />
    <Footer />
  </Layout>
)

export default IndexPage
