import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../../config/variables";
import { Attachment, Avatar_02 } from "../../../Entryfile/imagepath";
const NotesView = ({ record, render, setRender }) => {
  const notes = record.notes;
  const [note, setNote] = useState("");
  const handleSubmitNote = async (e) => {
    e.preventDefault();
    if (!note) {
      alert("note is empty");
      return;
    }
    try {
      const createnote = await axios.post(`${SERVER_URL}/api/v1/lms/addNote`, {
        sessionId: record._id,
        agentId: "61bc417ee91b155be2ba19ca",
        note,
      });
      if (createnote.status === 200) {
        alert("note added");
      }
      setRender(!render);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setNote("");
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title m-b-20">Notes</h5>
        <div>
          {notes.map((item) => {
            return (
              <div key={item._id} className="chat chat-left">
                <div className="chat-avatar">
                  <Link to="/" className="avatar">
                    <img src={Avatar_02} alt="" />
                  </Link>
                </div>
                <div className="chat-body w-75">
                  <div className="chat-bubble">
                    <div className="chat-content">
                      <span className="task-chat-user">OCTA Bot</span>{" "}
                      <span className="chat-time">
                        {moment(item.createdAt).format("DD-MM-YY hh:mm A")}
                      </span>
                      <p>{item.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="message-bar">
            <div className="message-inner">
              <a className="link attach-icon" href="#">
                <img src={Attachment} alt="" />
              </a>
              <div className="message-area">
                <div className="input-group">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="form-control"
                    placeholder="Type note..."
                  />
                  <span className="input-group-append">
                    <button
                      onClick={handleSubmitNote}
                      className="btn btn-primary"
                      type="button"
                    >
                      <i className="fa fa-send" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesView;
