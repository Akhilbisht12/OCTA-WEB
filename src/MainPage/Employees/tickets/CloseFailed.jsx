import React, { useState } from "react";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
import { SERVER_URL } from "../../../config/variables";

const CloseFailed = ({
  showModalFailed,
  setModalFailed,
  changeStatus,
  record,
}) => {
  const [option, setOption] = useState("");

  const handleSubmitNote = async () => {
    try {
      const createnote = await axios.post(`${SERVER_URL}/api/v1/lms/addNote`, {
        sessionId: record._id,
        agentId: "61bc417ee91b155be2ba19ca",
        note: option,
      });
      if (createnote.status === 200) {
        changeStatus(record._id, record.value);
        alert("note added");
      }
    } catch (error) {
      console.log(error);
    }
    setOption("");
  };

  return (
    <Modal
      size="lg"
      show={showModalFailed}
      onHide={() => setModalFailed(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Please Enter Failed Lead Details Below</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Transaction ID/Reciept Number</Form.Label>
            <Form.Select
              aria-label="Select Failure Reason"
              onChange={(e) => {
                setOption(e.target.value);
              }}
            >
              <option>Select Option </option>
              <option value="financial problem">Financial Problem</option>
              <option value="treatment in different hospital">
                Treatment In Different Hospital
              </option>
              <option value="expensive">Expensive</option>
              <option value="trust issues">Trust Issues</option>
              <option value="other option">Other Option</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" onClick={handleSubmitNote}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CloseFailed;
