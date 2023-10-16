import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SectionCard from '../../../../common/components/SectionCard/SectionCard';
import card1img from '../../../../assets/card1.webp';
import card2img from '../../../../assets/card2.webp';
import card3img from '../../../../assets/card3.webp';
import card4img from '../../../../assets/card4.webp';
import thumb from '../../../../assets/thumb.webp';
import thumbRight from '../../../../assets/thumbRight.webp';
import '../../../../common/style/commonStyle.scss';

import styled from 'styled-components';

const OurWorks = () => {
  return (
    <Container>
      <PageWrapper>
        <StyledTitle className="sub-title">Our works</StyledTitle>
        <StyledRow>
          <StyledCol>
            <SectionCard
              title="Tolq"
              titleColor="#A9BC87" // Pass your desired color
              description="Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution."
              imgSrc={card1img}
            />
          </StyledCol>
          <StyledCol>
            <SectionCard
              title="Feedback Labs"
              titleColor="#8BB5C9" // Pass your desired color
              description="Feedback Labs turns feedback into actionable insights for your team."
              imgSrc={card2img}
            />
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol>
            <SectionCard
              title="Codekeeper"
              titleColor="#00A0B6" // Pass your desired color
              description="Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements."
              imgSrc={card3img}
            />
          </StyledCol>
          <StyledCol>
            <SectionCard
              title="Feedback Labs"
              titleColor="#8B60D3" // Pass your desired color
              description="Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments."
              imgSrc={card4img}
            />
          </StyledCol>
        </StyledRow>
        <StyledDiv>
          <StyledImage src={thumb} alt="thumb"></StyledImage>
          <StyledText className="text-orange">
            Startups create a world that actually is better. Any problem that can be solved, will be solved by a
            startup, and that is a huge opportunity.
          </StyledText>
          <StyledImage src={thumbRight} alt="thumb"></StyledImage>
        </StyledDiv>
      </PageWrapper>
    </Container>
  );
};

const PageWrapper = styled.div`
  padding: 140px 0px;
  max-width: 1440px;
`;
const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledRow = styled(Row)`
  display: flex;
  padding: 30px 0px;
`;
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.p`
  text-align: center;
  max-width: 800px;

  margin: 0;
`;
const StyledImage = styled(Image)`
  @media (max-width: 1200px) {
    display: none;
  }
`;
export default OurWorks;
