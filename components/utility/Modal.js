import React from "react";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";

export default function SimpleModal({ open, onClose, title }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper>
          <ModalTitle>{title}</ModalTitle>
          <SimpleModal />
        </Paper>
      </Modal>
    </div>
  );
}

const Paper = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 50%;
  min-height: 50%;
  background-color: white;
  opacity: 0.7;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 3px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Audiowide', cursive;
`;
const ModalTitle = styled.h2`
  letter-spacing: 0.4rem;
  text-align: center;
  margin-top: 0.5rem;
`;
const ModalDescription = styled.p`
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
`;
