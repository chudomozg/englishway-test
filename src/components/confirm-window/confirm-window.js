import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmWindow = ({ show, handleClose, message, onYesButtonClick }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Вы уверены?</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Нет
        </Button>
        <Button variant="primary" onClick={onYesButtonClick}>
          Да
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmWindow;
