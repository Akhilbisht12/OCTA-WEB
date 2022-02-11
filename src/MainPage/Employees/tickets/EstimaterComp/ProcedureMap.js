import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addNewProcedure,
  addProcedureTotal,
  editStep,
} from "../../../../store/actions/adviceAction";
import { calculateProcedure } from "../../../../utils/EstimateCalculator";
import Procedure from "./Procedure";

const ProcedureMap = ({
  addNewProcedure,
  advice,
  addProcedureTotal,
  editStep,
}) => {
  return (
    <div style={{ display: advice.step >= 12 ? "flex" : "none" }}>
      <div>
        <div>Add Procedures</div>
        <div>
          <div>
            {advice.procedures.map((item, index) => {
              return <Procedure key={index} item={item} index={index} />;
            })}
            <div>
              <div
                style={{ marginVertical: 5 }}
                onClick={() => addNewProcedure()}
              >
                <div
                  style={{
                    color: "blue",
                  }}
                >
                  Add a Procedure
                </div>
              </div>
              <div
                onClick={() => {
                  addProcedureTotal({ procedureTotal: calculateProcedure() });
                  console.log(calculateProcedure());
                }}
              >
                <div>calculate Total</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginVertical: 2 }}>
          <div
            style={{
              width: "40%",
              paddingHorizontal: 10,
              fontSize: 17,
              fontWeight: "700",
              color: "gray",
            }}
          >
            Procedures
          </div>
          <input
            type="number"
            placeholder="value"
            value={advice.procedureTotal.toString()}
            onChange={(e) =>
              addProcedureTotal({ procedureTotal: parseInt(e.target.value) })
            }
            style={{ width: "40%" }}
          />
        </div>
        <div
          style={{
            alignItems: "flex-end",
            width: "40%",
            display: advice.step === 12 ? "flex" : "none",
          }}
        >
          <div onClick={() => editStep({ step: 13 })}>
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
    addNewProcedure: () => dispatch(addNewProcedure()),
    addProcedureTotal: (item) => dispatch(addProcedureTotal(item)),
    editStep: (item) => dispatch(editStep(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProcedureMap);
