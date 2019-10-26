import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <Container>
      <SectionTitle>Get your whole team involved</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Easily follow jobs to opt-in to notifications on applications and
            updates.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Easily follow jobs to opt-in to notifications on applications and
            updates.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Easily follow jobs to opt-in to notifications on applications and
            updates.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Easily follow jobs to opt-in to notifications on applications and
            updates.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Easily follow jobs to opt-in to notifications on applications and
            updates.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Easily follow jobs to opt-in to notifications on applications and
            updates.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </Container>
  </Section>
)

export default Features

const SectionTitle = styled.h3`
  color: black;
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: rgb(7, 20, 53);
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
