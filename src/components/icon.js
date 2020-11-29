import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

const Icon = ({ source, size = "50px" }) => (
  <StyledImg src={source} size={size} />
);

export default Icon;
