import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/likedin.svg';
import instagram from '../../assets/instagram.svg';

const Footer = () => {
  return (
    <StyledContainer fluid>
      <PageWrapper>
        <Row>
          <Col>
            <Image src={logo} alt="logo" />
            <p>© 2020 Startupz. All rights reserved. </p>
          </Col>
          <Col>
            <h3>Companies</h3>
            <ul>
              <li>Tolq</li>
              <li>LegalSite</li>
              <li>Codekeeper</li>
              <li>Feedback Labs</li>
            </ul>
          </Col>
          <Col>
            {' '}
            <h3>Contact</h3>
            <p>World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM The Hague The Netherlands</p>
            <p>Send us an email</p>
          </Col>
          <Col>
            <h3>Follow us</h3>
            <div>
              <Image src={twitter} alt="twitter"></Image>
              <Image src={linkedin} alt="linkedin"></Image>
              <Image src={instagram} alt="instagram "></Image>
            </div>
          </Col>
        </Row>
      </PageWrapper>
    </StyledContainer>
  );
};

export default Footer;

const PageWrapper = styled.div`
  padding: 90px 0px;
  max-width: 1440px;
`;
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
