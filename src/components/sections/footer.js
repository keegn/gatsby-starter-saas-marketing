import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <BrandContainer>
      <Copyright>
        <h2>Logo</h2>
      </Copyright>
      <SocialIcons></SocialIcons>
    </BrandContainer>
    <FooterLinksContainer>
      <FooterColumn>
        <ul>
          <span>Features</span>
          <li>Something here</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <ul>
          <span>Features</span>
          <li>Something here</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <ul>
          <span>Features</span>
          <li>Something here</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <ul>
          <span>Features</span>
          <li>Something here</li>
        </ul>
      </FooterColumn>
    </FooterLinksContainer>
  </FooterWrapper>
)

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 64px 0 96px;
`

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.white.regular};

  a {
    text-decoration: none;
    color: ${props => props.theme.color.black.lighter};
  }
`

const BrandContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`
const FooterLinksContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
`
const FooterColumn = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${props => props.theme.color.white.regular};
    span {
      font-size: 16px;
      margin-bottom: 10px;
      font-family: "HK Grotesk Bold";
    }
    li {
      margin-top: 10px;
      font-family: "HK Grotesk Light";
    }
  }
`

export default Footer
