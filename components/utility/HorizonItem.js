import React from "react";
import StatusIcon from "./StatusIcon";
import styled from "styled-components";
import LockedIcon from "./LockedIcon";
import Modal from "./Modal";

const HorizonItem = ({ title, locked }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("clicked");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <HorizonItemWrapper onClick={handleOpen}>
        <LockedIconWrapper>
          {locked ? <LockedIcon /> : <span></span>}
        </LockedIconWrapper>
        <TitleWrapper>{title}</TitleWrapper>
      </HorizonItemWrapper>
      <Modal open={open} onClose={handleClose} title={title} />
    </div>
  );
};

const HorizonItemWrapper = styled.div`
  &:hover {
    box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.7);
    transition: 0.2s all;
  }
  &:active {
    box-shadow: 1px 3px 3px rgba(255, 255, 255, 0.7);
  }
  text-align: center;
  margin: 1rem 0;
  border: 1px solid white;
  color: black;
  min-width: 10rem;
  margin: 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 3rem;
  position: relative;
  flex-direction: column;
  justify-content: center;
  display: flex;
  min-height: 120px;
  background-color: white;
  border-radius: 3px;
`;
const LockedIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
`;
const TitleWrapper = styled.div`
  letter-spacing: 0.1rem;
`;
const IconWrapper = styled.span`
  margin: 3px 0 0 3px;
`;

export default HorizonItem;
