import React, { useState } from "react";

import {
  addService,
  deleteService,
  addDoctorToSurgery,
  deleteDoctorFromSurgery,
  addMinorToSurgery,
  editMinorSurgeryPercent,
} from "../../../../store/actions/adviceAction";
import { connect } from "react-redux";
import { SurgeryList } from "../../../../config/Surgery";

const Surgery = ({
  item,
  index,
  advice,
  addService,
  deleteService,
  addDoctorToSurgery,
  deleteDoctorFromSurgery,
  addMinorToSurgery,
  editMinorSurgeryPercent,
}) => {
  const [Prescription, setPrescription] = useState([]);
  const [doctor, setDoctor] = useState("dr-jhon-doe");
  const [equipment, setEquipment] = useState("equipment_a");

  // handle every tick on finding service
  const handleSearchPres = async (div) => {
    const result = await SurgeryList.filter((str) => {
      return str.Service_Name.toLowerCase().includes(div.toLowerCase());
    });
    setPrescription(result.slice(0, 100));
  };

  const addServiceToState = (item) => {
    const tempService = {
      ...item,
      surgeon: [],
      minor: 100,
      isMinor: false,
    };
    addService({ newService: tempService, s_id: index });
  };

  const getServicePrice = () => {
    let price = null;
    for (const [key, value] of Object.entries(item)) {
      if (key === advice.wardBedType) {
        price = value + 0.3 * value + 0.35 * value + 0.9 * value + 0.15 * value;
      }
    }
    return price;
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
      height: "35px",
      paddingHorizontal: 10,
    },
  };

  return (
    <div>
      <div style={{ width: "80%" }}>
        <div
          className="flex-column"
          style={{ display: item.Service_Name ? "none" : "flex" }}
        >
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
                  className="flex-column"
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
          <div
            style={{
              width: "85%",
              flexWrap: "wrap",
              flexDirection: "div",
            }}
          >
            {item.surgeon
              ? item.surgeon.map((surgeo, surgeonIndex) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "lightblue",
                        paddingVertical: 2,
                        paddingHorizontal: 4,
                        margin: 2,
                        borderRadius: 3,
                      }}
                      key={surgeonIndex}
                    >
                      <div style={{ paddingHorizontal: 3 }}>{surgeo.name}</div>
                      <div
                        onClick={() =>
                          deleteDoctorFromSurgery({
                            surgeonIndex,
                            surgeryIndex: index,
                          })
                        }
                      >
                        <i name="fa fa-close-circle-outline" size={16} />
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
          <div
            style={{
              display: item.Department_Type == "SURGERY" ? "flex" : "none",
            }}
          >
            <div>
              <select
                style={{ width: "35%" }}
                onChange={(e) =>
                  addDoctorToSurgery({
                    surgeon: { name: e.target.value },
                    serviceindex: index,
                  })
                }
              >
                <option label="Dr Jhon Doe" value="dr-jhon-doe" />
                <option label="Dr Anna Doe" value="dr-anna-doe" />
                <option label="Dr James Doe" value="dr-james-doe" />
                <option label="Dr Shirley Doe" value="dr-shirley-doe" />
              </select>
              <select
                style={{ width: "35%" }}
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option label="equipment_a" value="equipment_a" />
                <option label="equipment_b" value="equipment_b" />
                <option label="equipment_c" value="equipment_c" />
                <option label="equipment_d" value="equipment_d" />
              </select>
            </div>
            <div style={{ display: index === 0 ? "none" : "flex" }}>
              <div>
                <div>Same Site</div>
                <div
                  onClick={() => {
                    addMinorToSurgery({
                      minorsurgeryindex: index,
                      minorsurgery: !item.isMinor,
                    });
                    editMinorSurgeryPercent({
                      surgerypercent: 50,
                      minorpercentindex: index,
                    });
                  }}
                  style={{ marginHorizontal: 10 }}
                >
                  <i
                    size={20}
                    name={item.isMinor ? "checkbox-outline" : "square-outline"}
                  />
                </div>
              </div>
              {/* <div style={{ display: item.isMinor ? "flex" : "none" }}>
                <input
                  onChangediv={(div) =>
                    editMinorSurgeryPercent({
                      surgerypercent: div,
                      minorpercentindex: index,
                    })
                  }
                  value={item.minor}
                  keyboardType="number-pad"
                  placeholder="Percent"
                  style={styles.input}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginVertical: 5 }}
        onClick={() => deleteService({ servicedeleteindex: index })}
      >
        <i name="fa fa-trash" size={20} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addService: (item) => dispatch(addService(item)),
    deleteService: (item) => dispatch(deleteService(item)),
    addDoctorToSurgery: (item) => dispatch(addDoctorToSurgery(item)),
    deleteDoctorFromSurgery: (item) => dispatch(deleteDoctorFromSurgery(item)),
    addMinorToSurgery: (item) => dispatch(addMinorToSurgery(item)),
    editMinorSurgeryPercent: (item) => dispatch(editMinorSurgeryPercent(item)),
  };
};

const mapStateToProps = (state) => {
  return {
    advice: state.advice,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Surgery);
