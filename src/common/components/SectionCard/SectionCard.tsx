import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';

interface Props {
  title: string;
  titleColor?: string;
  description: string;
  imgSrc: string;
}

const SectionCard: React.FC<Props> = ({ title, titleColor, description, imgSrc }) => {
  return (
    <StyledCard>
      <StyledContainer fluid>
        <Row>
          <Col>
            <StyledTitle color={titleColor}>{title}</StyledTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledDescription>{description}</StyledDescription>
          </Col>
        </Row>
        <Row>
          <StyledImageCont xs="auto">
            <StyledImage src={imgSrc} alt="Image Description" />
          </StyledImageCont>
        </Row>
        <Row>
          <Col xs="auto">
            <CustomButton bgColor="#fff" borderColor="#46B8C8" width={107} textColor="#46B8C8">
              {' '}
              More{' '}
            </CustomButton>
          </Col>
        </Row>
      </StyledContainer>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 588px;
  height: 554px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
  padding: 20px;
  transition: transform 0.3s; // Smooth transition for scaling

  &:hover {
    transform: scale(1.05); // Scales the card by 5% on hover
  }

  @media (max-width: 730px) {
    width: 350px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;
const StyledImageCont = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImage = styled(Image)`
  width: 80%; // Adjust as needed
  height: auto;
  margin: 10px 0;
`;

const StyledTitle = styled.h3`
  color: ${props => props.color || '#000'}; // Default color is black
  max-width: 350px;
`;
const StyledDescription = styled.p`
  max-width: 360px;
`;
export default SectionCard;
