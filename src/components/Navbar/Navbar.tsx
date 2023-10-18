import React, { useState } from 'react';
import { Col, Container, Row, Dropdown, Image } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import CustomButton from '../CustomButton/CustomButton';
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
              <DropdownStyledMenu>
                <Dropdown.Item onClick={onStartupsClick}>Startups</Dropdown.Item>
                <Dropdown.Item onClick={onContactClick}>Contact</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={onWeAreHiringClick}>Work with us!</Dropdown.Item>
              </DropdownStyledMenu>
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
  text-underline-offset: 5px;
  &:hover {
    text-decoration: underline;
  }
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
const DropdownStyledMenu = styled(Dropdown.Menu)`
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 15px 0;
  margin-top: 10px;
  .dropdown-item {
    padding: 12px 20px;
    color: #3d4f5c;
    transition: all 0.3s ease;
    font-size: 18px;
    &:hover {
      background-color: #f2f2f2;
      color: #46b8c8;
    }
  }

  .dropdown-divider {
    margin: 10px 0;
    border-top-color: #e7e7e7;
  }
`;
