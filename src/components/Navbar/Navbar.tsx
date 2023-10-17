import React, { useState } from 'react';
import { Col, Container, Row, Dropdown, Image } from 'react-bootstrap';
import CustomButton from '../../common/components/CustomButton/CustomButton';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
type Props = {
  onContactClick: () => void;
  onWeAreHiringClick: () => void;
  onStartupsClick: () => void;
};
const Navbar: React.FC<Props> = ({ onContactClick, onWeAreHiringClick, onStartupsClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <PageWrapper>
      <Container fluid>
        <NavCont>
          <ImageColumn>
            <Image src={logo} alt="logo" />
          </ImageColumn>
          <MenuCont>
            <Dropdown show={showDropdown} onClick={() => setShowDropdown(!showDropdown)} className="d-md-none ">
              <Dropdown.Toggle as={FiMenuWrapper} id="dropdown-menu-toggle">
                <FiMenu size={32} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={onStartupsClick}>Startups</Dropdown.Item>
                <Dropdown.Item onClick={onContactClick}>Contact</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={onWeAreHiringClick}>Work with us!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <StyledList className="d-none d-md-flex">
              <StyledListItem onClick={onStartupsClick}>Startups</StyledListItem>
              <StyledListItem onClick={onContactClick}>Contact</StyledListItem>{' '}
              <CustomButton
                bgColor="#fff"
                borderColor="#46B8C8"
                width={185}
                textColor="#46B8C8"
                onClick={onWeAreHiringClick}
              >
                Work with us!
              </CustomButton>
            </StyledList>
          </MenuCont>
        </NavCont>
      </Container>
    </PageWrapper>
  );
};

export default Navbar;

const NavCont = styled(Row)`
  justify-content: space-between;
  padding: 30px 110px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 30px 30px;
  }
`;
const MenuCont = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const StyledList = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  list-style: none;
  gap: 40px;
  margin: 0px;
  font-weight: 500;
`;
const StyledListItem = styled.li`
  color: #3d4f5c;
  font-size: 18px;
  cursor: pointer;
`;
const FiMenuWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
`;
const ImageColumn = styled(Col)`
  display: inline-block;
  width: auto;
`;
const PageWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;
