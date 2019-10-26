import styled from "styled-components"

import { Container } from "../../global"

export const Nav = styled.nav`
  padding: ${props => (props.scrolled ? `16px 0` : `24px 0`)};
  /* background-color: ${props => props.theme.color.primary}; */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${props => (props.scrolled ? `white` : null)};
  box-shadow: ${props =>
    props.scrolled ? `rgba(72, 76, 87, 0.1) 0px 1px 3px` : null};
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.medium};
  ${props => props.theme.font_size.xsmall};

  a {
    text-decoration: none;
    opacity: 0.9;
    color: ${props => props.theme.color.black.regular};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.color.regular};
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.large};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    font-family: ${props => props.theme.font.medium};
    ${props => props.theme.font_size.xsmall};
    color: rgb(61, 100, 255);
  }
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`
