import React from "react";
import styled from "styled-components";

const CustomButton = ({ title, onClick, style, disabled, width }) => {
  return (
    <StyledButton
      style={style}
      onClick={onClick}
      disabled={disabled}
      width={width}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 0.5rem 0;
  margin: 1rem;
  width: ${(props) => props.width};
  color: white;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  background-color: red;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  border-radius: 7px;
  font-family: "Audiowide", cursive;
  &:hover {
    transition: 0.3s all;
    background-color: transparent;
    border: 1px solid red;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

export default CustomButton;
