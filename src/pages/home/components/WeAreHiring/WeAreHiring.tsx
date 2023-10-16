import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import CustomButton from '../../../../common/components/CustomButton/CustomButton';
import '../../../../common/style/commonStyle.scss';

const WeAreHiring = () => {
  return (
    <StyledContainer fluid>
      <PageWrapper>
        <h2 className="sub-title">We are hiring!</h2>
        <StyledText className="text-orange">
          We're always looking for talented people to join and help build our startups. Check out our current openings
        </StyledText>
        <CustomButton bgColor="#46B8C8" width={243} textColor="#fff">
          See current openings{' '}
        </CustomButton>
      </PageWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background: #fbfafa;
`;
const PageWrapper = styled.div`
  padding: 140px 0px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const StyledText = styled.p`
  width: 540px;
  text-align: center;
`;
export default WeAreHiring;
