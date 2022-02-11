import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import {
  Attachment,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  User,
} from "../../../Entryfile/imagepath";

const Activity = ({ record }) => {
  const activities = record.activity;
  console.log(record.activity);
  return (
    <div className="chat-window">
      <div className="fixed-header">
        <div className="navbar">
          <div className="task-assign">
            <span className="assign-title">Acitivities </span>
            {/* <a
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="John Doe"
              className="avatar"
            >
              <img src={Avatar_02} alt="" />
            </a>
            <a
              href="#"
              className="followers-add"
              title="Add Assignee"
              data-toggle="modal"
              data-target="#assignee"
            >
              <i className="material-icons">add</i>
            </a> */}
          </div>
          <ul className="nav float-right custom-menu">
            <li className="nav-item dropdown dropdown-action">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="material-icons">more_vert</i>
              </a>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#edit_ticket"
                >
                  Edit Ticket
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#delete_ticket"
                >
                  Delete Ticket
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="chat-contents task-chat-contents">
        <div className="chat-content-wrap">
          <div className="chat-wrap-inner">
            <div className="chat-box">
              <div className="chats">
                {activities.map((item) => {
                  return (
                    <div key={item._id} className="chat chat-left">
                      <div className="chat-avatar">
                        <Link
                          to="/app/profile/employee-profile"
                          className="avatar"
                        >
                          <img src={Avatar_02} alt="" />
                        </Link>
                      </div>
                      <div className="chat-body">
                        <div className="chat-bubble">
                          <div className="chat-content">
                            <span className="task-chat-user">OCTA Bot</span>{" "}
                            <span className="chat-time">
                              {moment(item.createdAt).format(
                                "DD-MMM-YY hh:mm A"
                              )}
                            </span>
                            <p>{item.taskMessage}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-footer">
        {/* <div className="message-bar">
          <div className="message-inner">
            <a className="link attach-icon" href="#">
              <img src={Attachment} alt="" />
            </a>
            <div className="message-area">
              <div className="input-group">
                <textarea
                  className="form-control"
                  placeholder="Type message..."
                  defaultValue={""}
                />
                <span className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fa fa-send" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="project-members task-followers">
          <span className="followers-title">Followers</span>
          <a
            href="#"
            data-toggle="tooltip"
            title="Richard Miles"
            className="avatar"
          >
            <img src={Avatar_09} alt="" />
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            title="John Smith"
            className="avatar"
          >
            <img src={Avatar_10} alt="" />
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            title="Mike Litorus"
            className="avatar"
          >
            <img src={Avatar_05} alt="" />
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            title="Wilmer Deluna"
            className="avatar"
          >
            <img src={Avatar_11} alt="" />
          </a>
          <a
            href="#"
            className="followers-add"
            data-toggle="modal"
            data-target="#task_followers"
          >
            <i className="material-icons">add</i>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Activity;
