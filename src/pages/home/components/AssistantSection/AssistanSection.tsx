import { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AssistantImage from '../../../../assets/assistent.webp';
import ThumbIcon from '../../../../assets/thumb.webp';
import ThumbIconRight from '../../../../assets/thumbRight.webp';
import styled from 'styled-components';
import '../../../../common/style/commonStyle.scss';

const AssistanSection = () => {
  const [isMessageVisible, setMessageVisible] = useState(false);
  return (
    <PageWrapper>
      <Container>
        <StyledRow>
          <StyledCol xs="auto">
            <Image src={ThumbIcon} alt="Thumb Icon" />
          </StyledCol>
          <StyledCol xs="auto">
            <h2 className="text-orange">We love solving problems!</h2>
          </StyledCol>
          <StyledCol xs="auto">
            <Image src={ThumbIconRight} alt="Thumb Icon" />
          </StyledCol>
        </StyledRow>
        <Row className=" justify-content-center  ">
          <AssistantBox xs="auto">
            {isMessageVisible && (
              <StyledContMessage>
                <CloseButton onClick={() => setMessageVisible(false)}>X</CloseButton> {/* Close Button */}
                <StyledMessage>Hi! I am Ben, your virtual assistant. How can I make your day better?</StyledMessage>
              </StyledContMessage>
            )}
            <div className="assistant">
              <StyledImage
                src={AssistantImage}
                alt="Virtual Assistant"
                roundedCircle
                width="50"
                onClick={() => setMessageVisible(true)}
              />
            </div>
          </AssistantBox>
        </Row>
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding: 140px 0px;
  max-width: 1440px;
  margin: auto;
  position: relative;
`;
const StyledImage = styled(Image)`
  background: #f5f5f5;
  width: 76px;
  margin: 5px;
  cursor: pointer;
`;
const AssistantBox = styled(Col)`
  position: absolute;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  top: 120px;
  height: 250px;
  right: 100px;
  @media (max-width: 1200px) {
    position: static;
    flex-direction: column;
    align-items: center;
    height: 150px;
  }
`;
const StyledMessage = styled.p`
  background-color: #46b8c8;
  width: 300px;
  padding: 14px 18px;
  color: #fff;
  border-radius: 35px 35px 0 35px;
`;
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: -20px;
  background-color: #f5f5f5;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  padding: 2px 5px;
  @media (max-width: 1200px) {
  }
`;
const StyledContMessage = styled.div`
  position: absolute;
  top: -70px;
  right: 120px;
  @media (max-width: 1200px) {
    position: relative;
    right: 0;
    top: 0;
    margin-top: 30px;
  }
`;
export default AssistanSection;
