import axios from "axios";
import React from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { SERVER_URL } from "../../../config/variables";
import {
  calculateICU,
  calculateInvestigation,
  calculatePackage,
  calculateProcedure,
  calculateRoom,
  calculateSurgery,
  doctorVisitCharges,
} from "../../../utils/EstimateCalculator";

const PreviewEstimate = ({
  prevEst,
  setPrevEst,
  record,
  advice,
  render,
  setrender,
}) => {
  const patient = record.patientID;
  const calculateTotal = () => {
    let total = 0;
    total =
      parseInt(advice.visitTotal) +
      parseInt(advice.procedureTotal) +
      parseInt(advice.investigationTotal) +
      parseInt(advice.blood) +
      parseInt(advice.equipment) +
      parseInt(advice.medicine) +
      parseInt(advice.stent) +
      calculateICU() +
      calculateRoom() +
      calculatePackage() +
      calculateSurgery();
    return total;
  };

  const UploadPres = async () => {
    const totaladvice = { ...advice, total: calculateTotal() };
    const pres = await axios.post(
      `${SERVER_URL}/api/v1/patient/updateSessionEstimate`,
      {
        sessionId: record._id,
        estimate: totaladvice,
      }
    );
    if (pres.status === 200) {
      setPrevEst(false);
      alert("submitted");
      setrender(!render);
    } else {
      alert("error");
    }
  };
  return (
    <Modal size="lg" show={prevEst} onHide={() => setPrevEst(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Preview Estimate</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "80vh", overflowY: "scroll" }}>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div>
                Patient Name: {patient.firstName} {patient.lastName}
              </div>
              <div>Patient UHID: {patient.uhid}</div>
              <div>Admitting Doctor: {advice.doctor}</div>
              <div>Ward Bed Type: {advice.wardBedType}</div>
              <div>Ward Stay Days: {advice.ward}</div>
              <div>ICU Bed Type: {advice.icuBedType}</div>
              <div>ICU Stay Days: {advice.icu}</div>
            </div>
            <div className="col-3">
              <div>Amount</div>
              <div className="btn btn-primary">{calculateTotal()}</div>
            </div>
          </div>
          <div className={advice.isIPDPackage ? "d-none" : ""}>
            {advice.services.map((item) => {
              return <div>{item.Service_Name}</div>;
            })}
          </div>
          <div className={advice.isIPDPackage ? "" : "d-none"}>
            {advice.packages.map((item) => {
              return <div>{item.Service_Name}</div>;
            })}
          </div>
          <div className="row">
            <div className="col-6 text-left">Bed charges</div>
            <div className="col-6 text-right">{calculateRoom()}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">ICU charges</div>
            <div className="col-6 text-right">{calculateICU()}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">Total charges</div>
            <div className="col-6 text-right">
              {calculateRoom() + calculateICU()}
            </div>
          </div>
          <div className={advice.isIPDPackage ? "d-none" : "row"}>
            <div className="col-6 text-left">
              Surgery/Procedure(Surgeor Fee/OT & Anaesthesia):
            </div>
            <div className="col-6 text-right">{calculateSurgery()}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">
              Implants/Stent/Valve/Grafts/Coils etc.
            </div>
            <div className="col-6 text-right">{advice.stent}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">Medicines & Consumables</div>
            <div className="col-6 text-right">{advice.medicine}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">Investigations</div>
            <div className="col-6 text-right">{calculateInvestigation()}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">Procedures</div>
            <div className="col-6 text-right">{calculateProcedure()}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">Doctor & Visit Charges</div>
            <div className="col-6 text-right">{doctorVisitCharges()}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">Equipment</div>
            <div className="col-6 text-right">{advice.equipment}</div>
          </div>
          <div className="row">
            <div className="col-6 text-left">Blood charges</div>
            <div className="col-6 text-right">{advice.blood}</div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div onClick={UploadPres} className="btn btn-primary">
              Submit Estimate
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    advice: state.advice,
  };
};

export default connect(mapStateToProps)(PreviewEstimate);
