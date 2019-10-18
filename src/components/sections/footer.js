import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <StyledContainer>
      <Copyright>
        <h2>Logo</h2>
        <span>
          <Link href="https://github.com/keegnn">@keegnn</Link>
        </span>
      </Copyright>
      <SocialIcons></SocialIcons>
    </StyledContainer>
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
  padding: 32px 0;
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

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`

export default Footer
