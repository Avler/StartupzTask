import React, { useState } from 'react';
import { Col, Container, Row, Dropdown, Image } from 'react-bootstrap';

import CustomButton from '../../common/components/CustomButton/CustomButton';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';

const Navbar = () => {
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
                <Dropdown.Item href="#/startups">Startups</Dropdown.Item>
                <Dropdown.Item href="#/contact">Contact</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/work-with-us">Work with us!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <StyledList className="d-none d-md-flex">
              <StyledListItem>Startups</StyledListItem>
              <StyledListItem>Contact</StyledListItem>
              <CustomButton bgColor="#fff" borderColor="#46B8C8" width={185} textColor="#46B8C8">
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

  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
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
