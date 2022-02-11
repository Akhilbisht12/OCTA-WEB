import React from "react";
import { connect } from "react-redux";
import {
  editIPDPackages,
  editStep,
} from "../../../../store/actions/adviceAction";

const EstimateType = ({ advice, editIPDPackages, editStep }) => {
  return (
    <div>
      <div className="d-flex flex-column align-items-start">
        <div>Choose type of estimate</div>
        <div
          className="my-1 p-1 rounded-lg"
          style={{
            backgroundColor:
              advice.step >= 1 && advice.isIPDPackage
                ? "lightblue"
                : "lightgray",
          }}
          onClick={() => {
            editStep({ step: 1 });
            editIPDPackages({ ipd: true });
          }}
        >
          <div>Packaged</div>
        </div>
        <div
          className="my-1 p-1 rounded-lg"
          style={{
            backgroundColor:
              advice.step >= 1 && !advice.isIPDPackage
                ? "lightblue"
                : "lightgray",
          }}
          onClick={() => {
            editStep({ step: 1 });
            editIPDPackages({ ipd: false });
          }}
        >
          <div>Non Packaged</div>
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
    editIPDPackages: (item) => dispatch(editIPDPackages(item)),
    editStep: (item) => dispatch(editStep(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EstimateType);
