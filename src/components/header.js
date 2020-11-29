import React from "react";
import styled from "styled-components";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import Icon from "./icon.js";
// import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const StyledContainer = styled.div`
  padding-left:20px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
`;
const StyledH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  padding-left:100px;
`;
const IconContainer = styled.div`
  padding: 20px;
  flex-direction: row;
  display: flex;
`;

const Header = ({ text }) => (
  <StyledContainer>
    <StyledH1>{text}</StyledH1>
    <IconContainer>
      <Icon source={img1} />
      <Icon source={img2} />
      <Icon source={img3} />
    </IconContainer>
  </StyledContainer>
);

export default Header;
