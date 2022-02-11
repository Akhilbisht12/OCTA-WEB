import React from "react";
import { connect } from "react-redux";
import {
  editEmergency,
  editStep,
} from "../../../../store/actions/adviceAction";
const width = "100%";

const EmergencyWidget = ({ advice, editStep, editEmergency }) => {
  return (
    <div style={{ display: advice.step >= 5 ? "flex" : "none" }}>
      <div>
        <div>Is emergency case?</div>
        <div>
          <div
            style={{
              backgroundColor:
                advice.step >= 6 && advice.isEmergency
                  ? "lightblue"
                  : "lightgray",
            }}
            onClick={() => {
              editStep({ step: 6 });
              editEmergency({ emergency: true });
            }}
          >
            <div>Yes</div>
          </div>
          <div
            style={{
              backgroundColor:
                advice.step >= 6 && !advice.isEmergency
                  ? "lightblue"
                  : "lightgray",
            }}
            onClick={() => {
              editStep({ step: 6 });
              editEmergency({ emergency: false });
            }}
          >
            <div>No</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    advice: state.advice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editStep: (item) => dispatch(editStep(item)),
    editEmergency: (item) => dispatch(editEmergency(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyWidget);
