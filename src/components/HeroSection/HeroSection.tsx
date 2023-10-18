import { Col, Container, Row, Image } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';
import styled from 'styled-components';
import HeroImg from '../../assets/heroImg.webp';
import '../../style/commonStyle.scss';

type Props = {
  onSeeOurWorksClick: () => void;
};

const HeroSection = ({ onSeeOurWorksClick }: Props) => {
  
  return (
    <PageWrapper>
      <ContainerBox fluid>
        <StyledRow>
          <TextColumn>
            <StyledTitle>We Create Startups.</StyledTitle>
            <p className="text-orange">We are startup studio that develops and launches new companies.</p>
            <CustomButton bgColor="#46B8C8" width={157} textColor="#fff" onClick={onSeeOurWorksClick}>
              See our works
            </CustomButton>
          </TextColumn>
          <StyledImageBox>
            <StyledImage src={HeroImg} alt="Image of Hero Section" fluid />
          </StyledImageBox>
        </StyledRow>
      </ContainerBox>
    </PageWrapper>
  );
};

export default HeroSection;

const ContainerBox = styled(Container)`
  min-height: 640px;
  padding-top: 120px;
  padding-bottom: 30px;
  padding-left: 120px;
  position: relative;
  @media (max-width: 1200px) {
    padding-left: 0px;
    padding-top: 80px;
  }
`;
const StyledRow = styled(Row)`
  display: flex;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
  }
`;
const TextColumn = styled(Col)`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1200px) {
    align-items: center;
  }
`;
const StyledImageBox = styled(Col)`
  z-index: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 705px;

  @media (max-width: 1200px) {
    position: relative;
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const StyledImage = styled(Image)`
  height: auto;
  max-width: 100%;
`;
const StyledTitle = styled.h1`
  width: 400px;
  color: #3d4f5c;
  font-size: 85px;
  font-weight: 700;
  line-height: 85px;
  letter-spacing: -1.7px;
  @media (max-width: 1200px) {
    font-size: 75px;
    text-align: center;
    line-height: 75px;
  }

  @media (max-width: 992px) {
    font-size: 65px;
    line-height: 65px;
  }

  @media (max-width: 768px) {
    font-size: 55px;
    line-height: 55px;
    width: auto; // adjust width for smaller screens if needed
  }

  @media (max-width: 576px) {
    font-size: 45px;
    line-height: 45px;
  }
`;
const PageWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;
