import React from "react";
import { connect } from "react-redux";
import {
  addInvestigationTotal,
  addNewInvestigation,
  editStep,
} from "../../../../store/actions/adviceAction";
import { calculateInvestigation } from "../../../../utils/EstimateCalculator";
import Investigation from "./Investigation";

const InvestigationMap = ({
  addNewInvestigation,
  advice,
  addInvestigationTotal,
  editStep,
}) => {
  const handleUpdateInvestigation = () => {
    const investigation = calculateInvestigation();
    addInvestigationTotal({ investigationTotal: investigation });
  };

  return (
    <div style={{ display: advice.step >= 11 ? "flex" : "none" }}>
      <div>
        <div>Add Investigation</div>
        <div>
          <div>
            {advice.investigations.map((item, index) => {
              return <Investigation key={index} item={item} index={index} />;
            })}
            <div>
              <div
                style={{ marginVertical: 5 }}
                onClick={() => addNewInvestigation()}
              >
                <div
                  style={{
                    color: "blue",
                  }}
                >
                  Add a investigation
                </div>
              </div>
              <div onClick={() => handleUpdateInvestigation()}>
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
            Investigation
          </div>
          <input
            placeholder="value"
            value={advice.investigationTotal.toString()}
            onChange={(e) =>
              addInvestigationTotal({
                investigationTotal: parseInt(e.target.value),
              })
            }
            style={{ width: "40%" }}
          />
        </div>
      </div>
      <div
        style={{
          alignItems: "flex-end",
          width: "40%",
          display: advice.step === 11 ? "flex" : "none",
        }}
      >
        <div onClick={() => editStep({ step: 12 })}>
          <div>Next</div>
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
    addNewInvestigation: () => dispatch(addNewInvestigation()),
    editStep: (item) => dispatch(editStep(item)),
    addInvestigationTotal: (item) => dispatch(addInvestigationTotal(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvestigationMap);
