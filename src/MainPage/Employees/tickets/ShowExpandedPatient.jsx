import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Avatar_01 } from "../../../Entryfile/imagepath";
import { ChangeState } from "../../../store/actions/adviceAction";
import EstimateModal from "./EstimateModal";
import PreviewEstimate from "./PreviewEstimate";
import FileView from "./FileView";
import { SERVER_URL } from "../../../config/variables";

const ShowExpandedPatient = ({ record, render, setrender, changeState }) => {
  const [note, setnote] = useState("");
  const [estimateShow, setEstimateShow] = useState(false);
  const [prevEst, setPrevEst] = useState(false);
  const [fileShow, setFileShow] = useState(false);
  const [file, setFile] = useState({});
  const handleSubmitNote = async (e) => {
    e.preventDefault();
    try {
      const createnote = await axios.post(`${SERVER_URL}/api/v1/lms/addNote`, {
        sessionId: record.id,
        agentId: "61bc417ee91b155be2ba19ca",
        note,
      });
      if (createnote.status === 200) {
        alert("note added");
      }
      setrender(!render);
    } catch (error) {
      console.log(error);
      alert(error.message);
      setrender(!render);
    }
    setnote("");
  };

  const handleViewEstimate = () => {
    changeState({ incState: record.data.estimate });
    setPrevEst(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="w-100">
            <div className="text-primary">Packages</div>
            <div>
              {record.data.estimate
                ? record.data.estimate.packages.map((item) => {
                    return <div key={item.ServiceId}>{item.Service_Name}</div>;
                  })
                : "no packages added"}
            </div>
            <div className="text-primary">Surgeries</div>
            <div>
              {record.data.estimate
                ? record.data.estimate.services.map((item) => {
                    return <div key={item.ServiceId}>{item.Service_Name}</div>;
                  })
                : "no surgeries added"}
            </div>
          </div>
        </div>
        <div className="col-3" style={{ height: "30vh", overflowY: "scroll" }}>
          <div className="text-info" onClick={() => setPrevEst(true)}>
            Notes
          </div>
          <div>{record.data.notes.length === 0 ? "" : ""}</div>
          <div>
            {record.data.notes
              .slice(record.data.notes.length - 2, record.data.notes.length)
              .map((item) => {
                return (
                  <div key={item._id} className="d-flex align-items-center">
                    <div>
                      <img className="avatar" src={Avatar_01} />
                    </div>
                    <div>
                      <div className="text-wrap">{item.note}</div>
                      <div className="">
                        {moment(item.createdAt).format("D-MMM-YY hh:mm:ss A")}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <form onSubmit={handleSubmitNote}>
            <div className="d-flex align-items-center">
              <div>
                <img className="avatar" src={Avatar_01} />
              </div>
              <div>
                <input
                  value={note}
                  onChange={(e) => setnote(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mx-1">
                <i
                  onClick={handleSubmitNote}
                  className="fa fa-solid fa-arrow-up fs-1"
                ></i>
              </div>
            </div>
          </form>
        </div>
        <div className="col-3" style={{ height: "30vh", overflowY: "scroll" }}>
          <div>Files</div>
          <div>
            {record.data.files.map((item) => {
              return (
                <div className="border p-1 my-1 w-100 rounded">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-primary">{item.fileName}</div>
                    <div
                      onClick={() => {
                        setFile(item);
                        setFileShow(true);
                      }}
                      className="badge bg-primary text-white"
                    >
                      View
                    </div>
                  </div>
                  <div className="w-100 text-wrap">{item.fileNotes}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <div>Estimate</div>
          <div className="my-2">
            {record.estimate ? (
              <div className="d-flex flex-column">
                <div
                  className="btn btn-info btn-sm my-1"
                  onClick={handleViewEstimate}
                >
                  View Estimate
                </div>
                <div className="btn btn-primary btn-sm my-1">Edit Estimate</div>
                <div className="btn btn-danger btn-sm my-1">
                  Delete Estimate
                </div>
              </div>
            ) : (
              <div
                onClick={() => setEstimateShow(true)}
                className="btn btn-primary btn-sm my-1"
              >
                Create Estimate
              </div>
            )}
          </div>
        </div>
      </div>
      <EstimateModal
        setPrevEst={setPrevEst}
        estimateShow={estimateShow}
        setEstimateShow={setEstimateShow}
      />
      <PreviewEstimate
        prevEst={prevEst}
        record={record.data}
        setPrevEst={setPrevEst}
        render={render}
        setrender={setrender}
      />
      <FileView file={file} fileShow={fileShow} setFileShow={setFileShow} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeState: (item) => dispatch(ChangeState(item)),
  };
};
export default connect(null, mapDispatchToProps)(ShowExpandedPatient);
