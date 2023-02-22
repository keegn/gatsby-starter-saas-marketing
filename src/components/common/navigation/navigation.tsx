import React, { Component, useEffect, useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"

import { Container } from "../../global"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style"

const NAV_ITEMS = ["Features", "Product", "Pricing", ""]


// TODO refactor this into a new component
const getNavAnchorLink = (item: string, closeMobileMenu: () => void) => (
  <AnchorLink href={`#${item.toLowerCase()}`} onClick={closeMobileMenu}>
    {item}
  </AnchorLink>
)

// TODO refactor this into a new component
const getNavList = (mobile: boolean, closeMobileMenu: () => void) => (
  <NavListWrapper mobile={mobile}>
    <Scrollspy
      items={NAV_ITEMS.map(item => item.toLowerCase())}
      currentClassName="active"
      mobile={mobile}
      offset={-64}
    >
      {NAV_ITEMS.map(navItem => (
        <NavItem key={navItem}>{getNavAnchorLink(navItem, closeMobileMenu)}</NavItem>
      ))}
    </Scrollspy>
  </NavListWrapper>
)


const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setHasScrolled(scrollTop > 32)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <Nav scrolled={hasScrolled}>
      <StyledContainer>
        <Brand>
          <Scrollspy offset={-64} item={["top"]} currentClassName="active">
            <AnchorLink href="#top" onClick={closeMobileMenu}>
              Finance
            </AnchorLink>
          </Scrollspy>
        </Brand>
        <Mobile>
          <button
            onClick={toggleMobileMenu}
            style={{ color: "black", background: "none" }}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </Mobile>

        <Mobile hide={true}>{getNavList(false, closeMobileMenu)}</Mobile>
        <ActionsContainer>
          <button>Sign up</button>
        </ActionsContainer>
      </StyledContainer>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{getNavList(true, closeMobileMenu)}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  )
}

export default Navigation