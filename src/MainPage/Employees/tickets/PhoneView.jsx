import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
const PhoneView = ({ showPhone, setShowPhone, record }) => {
  const [script, setScript] = useState("");
  useEffect(() => {
    switch (record.status) {
      case "open":
        setScript("open script");
        break;
      case "firstfollowup":
        setScript("first follow up script");
        break;
      case "secondfollowup":
        setScript("second follow script");
        break;
      case "thirdfollowup":
        setScript("third follow up script");
        break;
      case "fourthfollowup":
        setScript("fourth follow script");
        break;
      case "closedfailed":
        setScript("failed script");
        break;
      case "closedwon":
        setScript("won script");
        break;
      default:
        setScript("");
        break;
    }
  }, [record]);
  return (
    <Modal size="lg" show={showPhone} onHide={() => setShowPhone(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Phone Action & Script</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="form-control my-1 d-flex w-100 align-items-center justify-content-between">
            <div>{record.patientID ? record.patientID.phone : ""}</div>
            <div className="btn  btn-primary">
              <a
                href={record.patientID ? `tel:${record.patientID.phone}` : "#"}
              >
                Call
              </a>
            </div>
          </div>
          <div
            className="form-control my-1 text-wrap"
            style={{ height: "400px" }}
          >
            {script}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PhoneView;
