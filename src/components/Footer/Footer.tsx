import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import '../../common/style/commonStyle.scss';
import logo from '../../assets/logo.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/likedin.svg';
import instagram from '../../assets/instagram.svg';

const Footer = () => {
  return (
    <StyledContainer fluid>
      <PageWrapper>
        <StyledRow>
          <StyledCol>
            <StyledLogo src={logo} alt="logo" />
            <p className="gray-text">
              © 2020 Startupz. <br /> All rights reserved.{' '}
            </p>
          </StyledCol>
          <Col md={2} xs={9}>
            <h3 className="link-title">Companies</h3>
            <StyledList>
              <li className="list-item">Tolq</li>
              <li className="list-item">LegalSite</li>
              <li className="list-item">Codekeeper</li>
              <li className="list-item">Feedback Labs</li>
            </StyledList>
          </Col>
          <Col sm={5} xs={9}>
            {' '}
            <h3 className="link-title">Contact</h3>
            <p className="gray-text">
              World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM The Hague The Netherlands
            </p>
            <p className="list-item">Send us an email</p>
          </Col>
          <Col sm={2} xs={5}>
            <h3 className="link-title">Follow us</h3>
            <StyledDiv>
              <Image src={twitter} alt="twitter" className="logos"></Image>
              <Image src={linkedin} alt="linkedin" className="logos"></Image>
              <Image src={instagram} alt="instagram " className="logos"></Image>
            </StyledDiv>
          </Col>
        </StyledRow>
      </PageWrapper>
    </StyledContainer>
  );
};

export default Footer;

const PageWrapper = styled.div`
  padding: 90px 0px;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const StyledLogo = styled(Image)`
  width: 178px;
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 15px;
  @media (max-width: 1000px) {
    flex-direction: row;
    padding-bottom: 20px;
    justify-content: center;
  }
`;
