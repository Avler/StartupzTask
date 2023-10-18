import { Container, Image } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import rocket from '../../../../assets/rocket.svg';
import ContactForm from '../../../../components/ContactForm/ContactForm';
import '../../../../common/style/commonStyle.scss';

const Contact = () => {
  const [isRocketFlying, setRocketFlying] = useState(false);
  setTimeout(() => setRocketFlying(false), 5000);
  return (
    <StyledContainer fluid>
      <StyledImage className={isRocketFlying ? 'flying' : ''} src={rocket} alt="rocket" />

      <PageWrapper>
        <StyledDiv>
          <StyledTitle>
            Are you ready <br /> to board this rocket ship?
          </StyledTitle>
          <StyledText>Share your excitement with us.</StyledText>
          <ContactForm onSuccessfulSubmit={() => setRocketFlying(true)} />
        </StyledDiv>
      </PageWrapper>
    </StyledContainer>
  );
};

export default Contact;

const StyledContainer = styled(Container)`
  background: #ffc351;
  position: relative;
  padding-left: 124px;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

const PageWrapper = styled.div`
  padding: 140px 0px;
  max-width: 1440px;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 400px) {
    text-align: center;
    padding: 60px 0px;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  right: 120px;
  bottom: 0;

  &.flying {
    animation: flyOut 3s forwards;
  }

  @keyframes flyOut {
    0% {
      transform: translate(0, 0);
      opacity: 1;
    }
    100% {
      transform: translate(100vw, -100vh); // moves to the top-right corner
      opacity: 0;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
const StyledTitle = styled.h2`
  color: #fff;

  font-size: 60px;
  font-weight: 700;
  line-height: 55px; /* 91.667% */
  letter-spacing: -1.2px;
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;
const StyledText = styled.p`
  color: #fff;
  text-align: left;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.24px;
  @media (max-width: 400px) {
    text-align: center;
  }
`;
