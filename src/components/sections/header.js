import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../global"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "couch" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper id="top">
      <Container>
        <Grid>
          <HeaderTextGroup>
            <h1>future of renting</h1>
            <p>
              We're building next generation property management tools. Sign up
              to get early accesss.
            </p>
            <HeaderForm>
              <HeaderInput placeholder="Your email" />
              <HeaderButton>Sign up</HeaderButton>
            </HeaderForm>
          </HeaderTextGroup>
          <Text>
            <Img
              style={{
                width: "600px",
                maxWidth: "100%",
                marginBottom: -16,
              }}
              fluid={data.file.childImageSharp.fluid}
            />
            <br />
          </Text>
        </Grid>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  /* background-color: ${props => props.theme.color.primary}; */
  background-color: white;
  padding-top: 192px; /* Nav is 96px in height
      so this gives us 96px of padding up to the bottom of the nav
   */

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }

  h1 {
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 48px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;
  min-height: 400px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  align-items: center;
`

const HeaderInput = styled.input`
  box-shadow: rgb(222, 226, 239) 0px 0px 0px 1px inset;
  background-color: rgb(255, 255, 255);
  color: black;
  font-size: 18px;
  font-weight: 500;
  max-width: 264px;
  height: 60px;
  line-height: normal;
  padding-left: 24px;
  padding-right: 24px;
  margin-right: 16px;
  -webkit-appearance: none;
  box-sizing: border-box;
  outline-color: transparent;
  outline-offset: 4px;
  outline-style: none;
  outline-width: 1px;
  transition-duration: 150ms;
  transition-property: all;
  transition-timing-function: ease-in-out;
  border-radius: 8px;
  border-width: 0px;
  &:focus {
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 2px inset,
      rgba(46, 82, 180, 0.18) 0px 0px 0px 4px;
  }
`

const HeaderButton = styled.button`
  background-color: ${props => props.theme.color.primary};
  color: rgb(255, 255, 255);
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  max-width: 264px;
  height: 60px;
  line-height: 1;
  padding-left: 48px;
  padding-right: 48px;
  -webkit-appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  outline-style: none;
  text-align: center;
  transition-duration: 200ms;
  user-select: none;
  white-space: nowrap;
  border-radius: 8px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  text-decoration: none;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
    color: rgb(255, 255, 255);
    transform: translateY(-3px);
  }
`
const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`

// const StyledExternalLink = styled(ExternalLink)`
//   color: inherit;
//   text-decoration: none;

//   &:hover {
//     color: ${props => props.theme.color.black.regular};
//   }
// `;
