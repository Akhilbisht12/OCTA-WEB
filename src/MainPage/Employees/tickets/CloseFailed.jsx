import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
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
        note: `closed failed: ${option}`,
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
        <div>
          <div className="mb-3 form-group" controlId="formBasicEmail">
            <div className="my-1">Transaction ID/Reciept Number</div>
            <select
              className="form-control"
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
            </select>
          </div>

          <div className="btn btn-primary" onClick={handleSubmitNote}>
            Submit
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CloseFailed;
