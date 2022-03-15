import axios from "axios";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { SERVER_URL } from "../../../config/variables";

const CloseWon = ({ show, setModalWon, changeStatus, record }) => {
  const [transcID, settranscID] = useState("");

  const handleSubmitNote = async () => {
    try {
      const createnote = await axios.post(`${SERVER_URL}/api/v1/lms/addNote`, {
        sessionId: record._id,
        agentId: "61bc417ee91b155be2ba19ca",
        note: transcID,
      });
      if (createnote.status === 200) {
        changeStatus(record._id, record.value);
        alert("note added");
      }
    } catch (error) {
      console.log(error);
    }
    settranscID("");
  };

  return (
    <Modal size="lg" show={show} onHide={() => setModalWon(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Please Enter Won Lead Details Below</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Transaction ID/Reciept Number</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Transaction Id"
              onChange={(e) => settranscID(e.target.value)}
            />
            <Form.Text className="text-muted">
              This Transaction Id will be saved into the notes for this patient
            </Form.Text>
          </Form.Group>

          <Button variant="primary" onClick={handleSubmitNote}>
            Submit
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default CloseWon;
