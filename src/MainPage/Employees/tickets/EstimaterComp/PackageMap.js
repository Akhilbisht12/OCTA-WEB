import React from "react";
import { connect } from "react-redux";
import {
  addNewPackage,
  editStep,
} from "../../../../store/actions/adviceAction";
import Package from "./Package";

const PackageMap = ({ addNewPackage, advice, editStep }) => {
  return (
    <div
      style={{
        display: advice.step >= 10 && advice.isIPDPackage ? "flex" : "none",
      }}
    >
      <div>
        <div>Add Package</div>
        <div>
          <div>
            {advice.packages.map((item, index) => {
              return <Package key={index} item={item} index={index} />;
            })}
            <div style={{ marginVertical: 5 }} onClick={() => addNewPackage()}>
              <div
                style={{
                  color: "blue",
                }}
              >
                Add a Package
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "flex-end",
            width: "80%",
            display: advice.step === 10 ? "flex" : "none",
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
    addNewPackage: () => dispatch(addNewPackage()),
    editStep: (item) => dispatch(editStep(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PackageMap);
