import React from "react";
import { connect } from "react-redux";
import { BedFeeMaster } from "../../../../config/BedFee";
import {
  addIcuBed,
  addIcuStay,
  addWardBed,
  addWardStay,
  editStep,
} from "../../../../store/actions/adviceAction";

const width = "100%";

const BedWidget = ({
  advice,
  addIcuBed,
  editStep,
  addWardBed,
  addWardStay,
  addIcuStay,
}) => {
  return (
    <div>
      <div
        style={{
          display: advice.step >= 1 ? "flex" : "none",
        }}
      >
        <div>
          <div>Choose Ward Bed Category</div>
          <div style={{ width: width * 0.85 }}>
            <select
              value={advice.wardBedType}
              onChange={(e) => {
                advice.isIPDPackage
                  ? editStep({ step: 5 })
                  : editStep({ step: 2 });
                addWardBed({ wardBed: e.target.value });
              }}
            >
              {BedFeeMaster.map((item) => {
                return (
                  <option key={item.Billing_Code} value={item.Billing_Code}>
                    {item.Bed_Category}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div
        style={{
          display: advice.step >= 2 && !advice.isIPDPackage ? "flex" : "none",
        }}
      >
        <div>
          <div>Type number of days to ward</div>
          <input
            onBlur={() => editStep({ step: 3 })}
            type="number"
            onChange={(e) =>
              addWardStay({ wardStay: parseInt(e.target.value) })
            }
            value={advice.ward.toString()}
            keyboardType="number-pad"
            placeholder="Ward"
          />
        </div>
      </div>
      {/* choose ward bed category */}
      <div
        style={{
          display: advice.step >= 3 && !advice.isIPDPackage ? "flex" : "none",
        }}
      >
        <div>
          <div>Choose ICU Bed Category</div>
          <div style={{ width: width * 0.85 }}>
            <select
              value={advice.icuBedType}
              onChange={(e) => {
                editStep({ step: 4 });
                addIcuBed({ icuBed: e.target.value });
              }}
            >
              {BedFeeMaster.map((item) => {
                return (
                  <option key={item.Billing_Code} value={item.Billing_Code}>
                    {item.Bed_Category}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div
        style={{
          display: advice.step >= 4 && !advice.isIPDPackage ? "flex" : "none",
        }}
      >
        <div>
          <div>Type number of days to ICU</div>
          <input
            type="number"
            value={advice.icu.toString()}
            onBlur={() => editStep({ step: 5 })}
            onChange={(e) => {
              addIcuStay({ icuStay: parseInt(e.target.value) });
            }}
            placeholder="ICU"
          />
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
    addWardBed: (item) => dispatch(addWardBed(item)),
    editStep: (item) => dispatch(editStep(item)),
    addWardStay: (item) => dispatch(addWardStay(item)),
    addIcuBed: (item) => dispatch(addIcuBed(item)),
    addIcuStay: (item) => dispatch(addIcuStay(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BedWidget);
