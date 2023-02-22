import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string,
  lang?: string,
  title?: string,
  children?: React.ReactNode,
}

const SEO = ({ description, lang = 'en', title, children }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title


  return (
    <>
      <html lang={lang} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={site.image} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content={"website"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:url" content={site.url} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={site.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.author} />
      {children}
    </>
  )
}

export default SEO
