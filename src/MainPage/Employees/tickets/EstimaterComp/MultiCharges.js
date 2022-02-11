import React from "react";
import { connect } from "react-redux";
import {
  addBloodRequirement,
  addEquipmentCharge,
  addMedicineCharge,
  addStent,
  addVisitTotal,
  editStep,
} from "../../../../store/actions/adviceAction";

const MultiCharges = ({
  advice,
  addMedicineCharge,
  addVisitTotal,
  addBloodRequirement,
  addEquipmentCharge,
  addStent,
  setEstimateShow,
  setPrevEst,
}) => {
  const handlePrevEstimate = () => {
    setEstimateShow(false);
    setPrevEst(true);
  };
  return (
    <div style={{ display: advice.step >= 13 ? "flex" : "none" }}>
      <div>
        <div>
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
              Visit Charge
            </div>
            <input
              value={advice.visitTotal.toString()}
              onChange={(e) =>
                addVisitTotal({ visitTotal: parseInt(e.target.value) })
              }
              type="number"
              placeholder="value"
              style={{ width: "45%" }}
            />
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
              Medicine Charge
            </div>
            <input
              value={advice.medicine.toString()}
              onChange={(e) =>
                addMedicineCharge({ medicine: parseInt(e.target.value) })
              }
              keyboardType="number-pad"
              placeholder="value"
              style={{ width: "40%" }}
            />
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
              Equipment Charge
            </div>
            <input
              value={advice.equipment.toString()}
              onChange={(e) =>
                addEquipmentCharge({ equipment: parseInt(e.target.value) })
              }
              type="number"
              placeholder="value"
              style={{ width: "40%" }}
            />
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
              Blood Requirement
            </div>
            <input
              value={advice.blood.toString()}
              onChange={(e) =>
                addBloodRequirement({ blood: parseInt(e.target.value) })
              }
              keyboardType="number-pad"
              placeholder="value"
              style={{ width: "40%" }}
            />
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
              Stent/Implant Cost
            </div>
            <input
              value={advice.stent.toString()}
              onChange={(e) => addStent({ stent: parseInt(e.target.value) })}
              type="number"
              placeholder="value"
              style={{ width: "40%" }}
            />
          </div>
          <div>
            <div>
              <div onClick={handlePrevEstimate}>Preview Estimate</div>
            </div>
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

const mapDispatchToProps = (dispacth) => {
  return {
    addVisitTotal: (item) => dispacth(addVisitTotal(item)),
    addMedicineCharge: (item) => dispacth(addMedicineCharge(item)),
    addBloodRequirement: (item) => dispacth(addBloodRequirement(item)),
    addEquipmentCharge: (item) => dispacth(addEquipmentCharge(item)),
    addStent: (item) => dispacth(addStent(item)),
    editStep: (item) => dispacth(editStep(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiCharges);
