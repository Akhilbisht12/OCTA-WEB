import React from "react";
import { connect } from "react-redux";
import { addAdvice, editStep } from "../../../../store/actions/adviceAction";
import Surgery from "./Surgery";

const SurgeryMap = ({ addAdvice, advice, editStep }) => {
  const sortedService = advice.services.sort((a, b) => {
    return b - a;
  });
  return (
    <div
      style={{
        display: advice.step >= 9 && !advice.isIPDPackage ? "flex" : "none",
      }}
    >
      <div>
        <div>Add Surgery</div>
        <div>
          <div>
            {advice.services
              .sort((a, b) => {
                return b.OPD - a.OPD;
              })
              .map((item, index) => {
                return <Surgery key={index} item={item} index={index} />;
              })}
            <div style={{ marginVertical: 5 }} onClick={() => addAdvice()}>
              <div
                style={{
                  color: "blue",
                }}
              >
                Add surgery
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "flex-end",
            width: "80%",
            display: advice.step === 9 ? "flex" : "none",
          }}
        >
          <div onClick={() => editStep({ step: 11 })}>
            <div>Next</div>
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
    addAdvice: () => dispatch(addAdvice()),
    editStep: (item) => dispatch(editStep(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurgeryMap);
