import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const GetStarted = () => (
  <StyledSection>
    <GetStartedContainer>
      <GetStartedTitle>Be the first to get the beta</GetStartedTitle>
      <TryItButton>Get early access</TryItButton>
      <Subtitle>No credit card required.</Subtitle>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: #f8f8f8;
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GetStartedTitle = styled.h3`
  font-size: 42px;
  margin: 0 auto 32px;
  /* color: ${props => props.theme.color.white.lessdark}; */
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1.5px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: #098c8c;
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
  /* color: ${props => props.theme.color.white.lessdark}; */
`

const Subtitle = styled.span`
  font-family: "HK Grotesk Normal";
  font-weight: 300;
  padding-top: 16px;
  font-size: 14px;
  color: rgb(7, 20, 53);
  letter-spacing: 0px;
  /* color: ${props => props.theme.color.white.lessdark}; */
`
