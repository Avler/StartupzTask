import { Col, Container, Row, Image } from 'react-bootstrap';
import styled from 'styled-components';
import '../../../common/style/commonStyle.scss'

type Item = {
  title: string;
  divider?: string;
  description: string;
};

type DescriptionSectionProps = {
  title: string;
  description: string;
  imageUrl?: string;
  items: Item[];
};

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ title, description, imageUrl, items }) => {
  return (
    <ContainerBox fluid>
      <PageWrapper>
        <StyledRowTitle>
          <StyledContTitle md={10}>
            <h2 className="sub-title">{title}</h2>
            {imageUrl && <StyledImage src={imageUrl} />}
          </StyledContTitle>
          <StyledItemDescriptionCont>
            <p className="text-orange">{description}</p>
          </StyledItemDescriptionCont>
        </StyledRowTitle>
        <StyledRow>
          {items.map((item, index) => (
            <StyledCol key={index}>
              <p className="number-orange">{item.title}</p>
              <div className="line">{item.divider}</div>
              <p className="description">{item.description}</p>
            </StyledCol>
          ))}
        </StyledRow>
      </PageWrapper>
    </ContainerBox>
  );
};

const ContainerBox = styled(Container)`
  background: #fbfafa;
  padding: 140px 0px;
`;

const StyledContTitle = styled(Col)`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

const StyledImage = styled(Image)`
  max-width: 75px;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledRowTitle = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1200px) {
    align-items: flex-start;
    padding-left: 100px;
  }
`;
const StyledRow = styled(Row)`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
const StyledItemDescriptionCont = styled.p`
  width: 600px;
  
  @media (max-width: 578px) {
    width: 300px;
  }
  @media (min-width: 1200px) {
    width: 850px;
  }
`;
const PageWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;
export default DescriptionSection;
