import React from "react";
import StatusIcon from "./StatusIcon";
import styled from "styled-components";

const NameField = ({ item, id, onClick }) => {
  const onChildClick = async (e) => {
    e.stopPropagation();
  };
  return (
    <NameItemWrapper id={id} color={item.color} onClick={onClick}>
      <TextContentWrapper onClick={onChildClick}>
        <Label>{item.name}</Label>
        <StatuContentWrapper>
          <StatusIcon status={item.icon} />
        </StatuContentWrapper>
      </TextContentWrapper>
    </NameItemWrapper>
  );
};
const StatuContentWrapper = styled.span`
  position: absolute;
  bottom: -6px;
`;
const NameItemWrapper = styled.div`
  &:hover {
    box-shadow: 1px 2px 3px rgba(255, 255, 255, 0.7);
    transition: 0.2s all;
  }
  &:active {
    box-shadow: 1px 2px 3px rgba(255, 255, 255, 0.7);
  }
  color: black;
  border-radius: 5px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  display: flex;
  position: relative;
  text-align: center;
  margin: 1rem 0;
  z-index: 0;
  border: 5px solid ${(props) => props.color};
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 1rem;
  margin-right: 1rem;
  letter-spacing: 0.1rem;
`;

const TextContentWrapper = styled.div`
  position: relative;
`;

export default NameField;
