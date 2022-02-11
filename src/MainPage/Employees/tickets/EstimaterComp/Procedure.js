import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addProcedure,
  addProcedureTotal,
  deleteProcedure,
} from "../../../../store/actions/adviceAction";
import { ProcedureList } from "../../../../config/Procedures";

const Procedure = ({ item, index, advice, addProcedure, deleteProcedure }) => {
  const [Prescription, setPrescription] = useState([]);

  const handleSearchPres = async (div) => {
    const result = await ProcedureList.filter((str) => {
      return str.Service_Name.toLowerCase().includes(div.toLowerCase());
    });
    setPrescription(result.slice(0, 100));
  };

  const addServiceToState = (item) => {
    addProcedure({ newProcedure: item, p_id: index });
  };

  const getServicePrice = () => {
    let price = null;
    for (const [key, value] of Object.entries(item)) {
      if (key === advice.wardBedType) {
        price = value;
      }
    }
    return price;
  };

  return (
    <div>
      <div style={{ width: "80%" }}>
        <div style={{ display: item.Service_Name ? "none" : "flex" }}>
          <input
            placeholder="find service"
            onChange={(e) => handleSearchPres(e.target.value)}
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              marginVertical: 1,
              paddingVertical: 2,
              paddingHorizontal: 10,
            }}
          />
          <div style={{ marginVertical: 2, padding: 2, maxHeight: "15%" }}>
            {Prescription.map((item) => {
              return (
                <div
                  style={styles.service}
                  key={item.ServiceId}
                  onClick={() => addServiceToState(item)}
                >
                  <div>{item.Service_Name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: item.Service_Name ? "flex" : "none",
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: "lightgray",
            borderRadius: 5,
            marginVertical: 4,
          }}
        >
          <div>
            <div>
              <div style={{ width: "60%" }}>
                {item.Service_Name ? item.Service_Name : ""}
              </div>
              <div>
                <div style={styles.badge}>
                  {item.Department_Name ? item.Department_Name : ""}
                </div>
                <div style={styles.badge}>
                  {item.Department_Type ? item.Department_Type : ""}
                </div>
              </div>
            </div>
            <div>
              <div>{getServicePrice()}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginVertical: 5 }}
        onClick={() => deleteProcedure({ procedureindex: index })}
      >
        <i name="fa fa-trash" size={20} />
      </div>
    </div>
  );
};
const styles = {
  service: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: "lightgray",
    marginVertical: 2,
    borderRadius: 5,
  },
  badge: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    margin: 2,
  },
  input: {
    width: "20%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    height: 35,
    paddingHorizontal: 10,
  },
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProcedure: (item) => dispatch(deleteProcedure(item)),
    addProcedure: (item) => dispatch(addProcedure(item)),
    addProcedureTotal: (item) => dispatch(addProcedureTotal(item)),
  };
};

const mapStateToProps = (state) => {
  return {
    advice: state.advice,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Procedure);
