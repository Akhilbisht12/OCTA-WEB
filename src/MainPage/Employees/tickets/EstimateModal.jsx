import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addDoctor,
  editStep,
  addVisitTotal,
} from "../../../store/actions/adviceAction";
import EstimateType from "./EstimaterComp/EstimateType";
import BedWidget from "./EstimaterComp/BedWidget";
import EmergencyWidget from "./EstimaterComp/EmergencyWidget";
import { doctorVisitCharges } from "../../../utils/EstimateCalculator";
import PaymentWidget from "./EstimaterComp/PaymentWidget";
import SurgeryMap from "./EstimaterComp/SurgeryMap";
import PackageMap from "./EstimaterComp/PackageMap";
import InvestigationMap from "./EstimaterComp/InvestigationMap";
import ProcedureMap from "./EstimaterComp/ProcedureMap";
import MultiCharges from "./EstimaterComp/MultiCharges";

const EstimateModal = ({
  estimateShow,
  setEstimateShow,
  action,
  addDoctor,
  advice,
  editStep,
  addVisitTotal,
  setPrevEst,
}) => {
  useEffect(() => {
    console.log(advice);
    if (advice.step === 5) {
      addVisitTotal({ visitTotal: doctorVisitCharges() });
    }
  }, [advice.step]);
  return (
    <Modal size="lg" show={estimateShow} onHide={() => setEstimateShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Estimate</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "80vh", overflowY: "scroll" }}>
        <div className="my-3 p-2 d-flex flex-column align-items-start">
          <EstimateType />
          <BedWidget />
          <EmergencyWidget />
          {/* enter doctors name */}
          <div style={{ display: advice.step >= 6 ? "flex" : "none" }}>
            <div>
              <div>Type Doctor's Name</div>
              <select
                value={advice.doctor}
                onChange={(e) => {
                  addDoctor({ doctor: e.target.value });
                  editStep({ step: 7 });
                }}
                style={{ width: "80%" }}
              >
                <option label="Dr. Naveen Jain" value="Dr. Naveen Jain" />
                <option label="Dr. Kanti Jindal" value="Dr. Kanti Jindal" />
                <option label="Dr. Seema Aggarwal" value="Dr. Seema Aggarwal" />
                <option label="Dr. Ramesh Talwas" value="Dr. Ramesh Talwas" />
              </select>
            </div>
          </div>
          <PaymentWidget />
          <SurgeryMap />
          <PackageMap />
          <InvestigationMap />
          <ProcedureMap />
          <MultiCharges
            setPrevEst={setPrevEst}
            setEstimateShow={setEstimateShow}
          />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addDoctor: (item) => dispatch(addDoctor(item)),
    addRemark: (item) => dispatch(addRemark(item)),
    editStep: (item) => dispatch(editStep(item)),
    addVisitTotal: (item) => dispatch(addVisitTotal(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EstimateModal);
