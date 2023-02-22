import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../../../styles/theme"
import GlobalStyles from "../../../styles/GlobalStyles"
import "../../../static/fonts/fonts.css"

interface LayoutProps {
  children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
