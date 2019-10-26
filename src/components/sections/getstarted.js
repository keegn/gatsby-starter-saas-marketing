import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const GetStarted = () => (
  <Section>
    <GetStartedContainer>
      <GetStartedTitle>Get started with Lyso today</GetStartedTitle>
      <TryItButton>Try it free</TryItButton>
      <Subtitle>No credit card required</Subtitle>
    </GetStartedContainer>
  </Section>
)

export default GetStarted

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GetStartedTitle = styled.h3`
  font-size: 42px;
  margin-bottom: 32px;
`

const TryItButton = styled.button`
  height: 60px;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 38px;
  font-family: "HK Grotesk Semibold";
  font-weight: 500;
  font-size: 26px;
  color: white;
  letter-spacing: 0px;
  background: rgb(255, 77, 86);
  border-radius: 4px;
  padding: 0px 64px;
  text-decoration: none;
  margin-bottom: 32px;
`

const Subtitle = styled.span`
  font-family: "HK Grotesk Medium";
  font-weight: 300;
  font-size: 16px;
  color: rgb(7, 20, 53);
  letter-spacing: 0px;
`
