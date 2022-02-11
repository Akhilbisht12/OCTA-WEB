import moment from "moment";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar_11,
  Avatar_08,
  Avatar_09,
  Avatar_10,
  Avatar_05,
} from "../../../Entryfile/imagepath";
import Activity from "./Activity";
import Files from "./Files";
import NotesView from "./NotesView";
import Timeline from "./Timeline";
import axios from "axios";
import { SERVER_URL } from "../../../config/variables";

const TicketView = () => {
  const location = useLocation();
  const { text } = location.state;
  const [record, setRecord] = useState({});
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let firstload = localStorage.getItem("minheight");
    if (firstload === "true") {
      setTimeout(function () {
        window.location.reload(1);
        localStorage.removeItem("minheight");
      }, 1000);
    }
  });

  useEffect(async () => {
    const getsession = await axios.post(
      `${SERVER_URL}/api/v1/patient/getSession`,
      {
        sessionId: text,
      }
    );
    setRecord(getsession.data.session);
    console.log(getsession);
    setLoading(false);
  }, [render, loading]);

  const getStatusBadge = () => {
    switch (record.status) {
      case "open":
        return <span className="badge badge-warning">{record.status}</span>;
      case "firstfollowup":
        return <span className="badge badge-info">{record.status}</span>;
      case "secondfollowup":
        return <span className="badge badge-info">{record.status}</span>;
      case "thirdfollowup":
        return <span className="badge badge-info">{record.status}</span>;
      case "fourthfollowup":
        return <span className="badge badge-info">{record.status}</span>;
      case "closedwon":
        return <span className="badge badge-success">{record.status}</span>;
      case "closedfailed":
        return <span className="badge badge-danger">{record.status}</span>;
      default:
        return;
    }
  };
  if (loading) return <div className="page-wrapper">loading</div>;
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Tickets - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="chat-main-row">
        <div className="chat-main-wrapper">
          <div className="col-lg-8 message-view task-view">
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="float-left ticket-view-details">
                    <div className="ticket-header">
                      <span>Status: </span>
                      {getStatusBadge()}
                      <span className="m-l-15 text-muted">Patient: </span>
                      <a href="#">{record.patientID.name}</a>
                      <span className="m-l-15 text-muted">Created: </span>
                      <span>
                        {moment(record.createddate).format("DD-MMM-YY hh:mm A")}
                      </span>
                      <span className="m-l-15 text-muted">Created by:</span>
                      <span>
                        <Link to="/app/profile/employee-profile">OCTA Bot</Link>
                      </span>
                    </div>
                  </div>
                  <a
                    className="task-chat profile-rightbar float-right"
                    id="task_chat"
                    href="#task_window"
                  >
                    <i className="fa fa fa-comment" />
                  </a>
                </div>
              </div>
              <div className="chat-contents">
                <div className="chat-content-wrap">
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="task-wrapper">
                        <div className="card">
                          <div className="card-body">
                            <div className="project-title">
                              <div className="m-b-20">
                                <span className="h5 card-title ">
                                  Lead Timeline
                                </span>
                                <div className="float-right ticket-priority">
                                  <span>Priority:</span>
                                  <div className="btn-group">
                                    <a
                                      href="#"
                                      className="badge badge-danger dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      Highest{" "}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#">
                                        <i className="fa fa-dot-circle-o text-danger" />{" "}
                                        Highest priority
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="fa fa-dot-circle-o text-info" />{" "}
                                        High priority
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="fa fa-dot-circle-o text-primary" />{" "}
                                        Normal priority
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="fa fa-dot-circle-o text-success" />{" "}
                                        Low priority
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Timeline record={record} />
                            </div>
                          </div>
                        </div>
                        <NotesView
                          render={render}
                          setRender={setRender}
                          record={record}
                        />
                        <Files
                          render={render}
                          setRender={setRender}
                          record={record}
                        />
                      </div>
                      <div className="notification-popup hide">
                        <p>
                          <span className="task" />
                          <span className="notification-text" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 message-view task-chat-view ticket-chat-view"
            id="task_window"
          >
            <Activity record={record} />
          </div>
        </div>
      </div>
      {/* Edit Ticket Modal */}
      <div id="edit_ticket" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Ticket</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ticket Subject</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Laptop Issue"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ticket Id</label>
                      <input
                        className="form-control"
                        type="text"
                        readOnly
                        defaultValue="TKT-0001"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Assign Staff</label>
                      <select className="select">
                        <option>-</option>
                        <option>Mike Litorus</option>
                        <option>John Smith</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Client</label>
                      <select className="select">
                        <option>-</option>
                        <option>Delta Infotech</option>
                        <option>International Software Inc</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>CC</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Assign</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ticket Assignee</label>
                      <div className="project-members">
                        <a title="John Smith" data-toggle="tooltip" href="#">
                          <img src={Avatar_10} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Add Followers</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ticket Followers</label>
                      <div className="project-members">
                        <a
                          title="Richard Miles"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src={Avatar_09} alt="" />
                        </a>
                        <a
                          title="John Smith"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src={Avatar_10} alt="" />
                        </a>
                        <a
                          title="Mike Litorus"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src={Avatar_05} alt="" />
                        </a>
                        <a
                          title="Wilmer Deluna"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src={Avatar_11} alt="" />
                        </a>
                        <span className="all-team">+2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label>Upload Files</label>
                      <input className="form-control" type="file" />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Ticket Modal */}
      {/* Delete Ticket Modal */}
      <div className="modal custom-modal fade" id="delete_ticket" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Ticket</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a href="" className="btn btn-primary continue-btn">
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href=""
                      data-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Ticket Modal */}
      {/* Assignee Modal */}
      <div id="assignee" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign to this task</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to add"
                  className="form-control search-input"
                  type="text"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src={Avatar_09} alt="" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src={Avatar_10} alt="" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src={Avatar_10} alt="" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Assign</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Assignee Modal */}
      {/* Task Followers Modal */}
      <div
        id="task_followers"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add followers to this task</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to add"
                  className="form-control search-input"
                  type="text"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src={Avatar_10} alt="" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src={Avatar_08} alt="" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Catherine Manseau</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src={Avatar_11} alt="" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Wilmer Deluna</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">
                  Add to Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Task Followers Modal */}
    </div>
  );
};

export default TicketView;
