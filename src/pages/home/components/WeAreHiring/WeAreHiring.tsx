import { Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import CustomButton from '../../../../common/components/CustomButton/CustomButton';
import artLeft from '../../../../assets/artLeft.webp';
import artRight from '../../../../assets/artRight.webp';
import '../../../../common/style/commonStyle.scss';

const WeAreHiring = () => {
  return (
    <StyledContainer fluid>
      <StyledImageLeft src={artLeft} alt="art" />
      <StyledImageRight src={artRight} alt="art" />
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
  display: flex;
  justify-content: center;
`;
const PageWrapper = styled.div`
  padding: 140px 0px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 500px) {
    padding: 65px 0px;
  }
`;
const StyledText = styled.p`
  width: 540px;
  text-align: center;
  @media (max-width: 500px) {
    width: 350px;
  }
`;
const StyledImageLeft = styled(Image)`
  position: absolute;
  transform: translateY(40%);
  left: 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const StyledImageRight = styled(Image)`
  position: absolute;
  right: 0;
  transform: translateY(40%);
  @media (max-width: 1000px) {
    display: none;
  }
`;
export default WeAreHiring;
