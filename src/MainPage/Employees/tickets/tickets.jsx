import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_11,
  Avatar_09,
  Avatar_02,
  Avatar_10,
  Avatar_05,
  Avatar_08,
} from "../../../Entryfile/imagepath";
import axios from "axios";
import { Select, Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import moment from "moment";
import TicketActions from "./TicketActions";
import ShowExpandedPatient from "./ShowExpandedPatient";
import PhoneView from "./PhoneView";
import { SERVER_URL } from "../../../config/variables";

const Tickets = () => {
  const [data, setData] = useState([]);

  const [render, setrender] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  const [actionPatient, setActionPatient] = useState({});

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const changeStatus = async (session, status) => {
    try {
      const statusChanged = await axios.post(
        "http://localhost:3333/api/v1/lms/changeStatus",
        {
          session,
          status,
        }
      );
      console.log(statusChanged);
      alert("status changed");
    } catch (error) {
      alert(error);
      console.log(error);
    }
    setrender(!render);
  };
  const changePriority = async (session, priority) => {
    try {
      const priorityChanged = await axios.post(
        "http://localhost:3333/api/v1/lms/changePriority",
        {
          session,
          priority,
        }
      );
      console.log(priorityChanged);
      alert(priorityChanged.data.message);
    } catch (error) {
      alert(error.data.message);
      console.log(error);
    }
    setrender(!render);
  };
  useEffect(async () => {
    try {
      const getSession = await axios.post(`${SERVER_URL}/api/v1/lms/leads`, {
        board: "newlead",
      });
      console.log(getSession);
      const temp = [];
      await getSession.data.map((item) => {
        console.log(item._id);
        temp.push({
          id: item._id,
          patient: item.patientID.firstName + " " + item.patientID.lastName,
          image: Avatar_02,
          name: item.patientID.firstName + " " + item.patientID.lastName,
          doctor: item.estimate
            ? item.estimate.doctor
            : item.quickPrescription.doctor,
          leadid: item._id,
          ticketsubject: "Internet Issue",
          createddate: item.createdAt,
          dealvalue: item.estimate ? item.estimate.total : "Unknown",
          priority: item.priority,
          status: item.status,
          data: item,
          estimate: item.estimate ? item.estimate : null,
          phone: item.patientID.phone,
        });
      });
      setData(temp);
    } catch (error) {
      alert(
        "something went wrong while fetching leads, please check console for more info"
      );
      console.log(error);
    }
  }, [render]);

  const renderPackagedBlock = (record, text) => {
    return (
      <div>
        <Link
          to={{
            pathname: "/app/profile/employee-profile",
            state: { patientID: record.data.patientID._id },
          }}
          className="text-dark"
        >
          <div>{text}</div>
        </Link>
        <div>
          {record.estimate ? (
            record.estimate.isIPDPackage ? (
              <div>
                <div className="badge bg-info text-white">
                  {record.estimate.paymentType}
                </div>
                <div className="badge bg-info text-white mx-1">Pkgd</div>
              </div>
            ) : (
              <div>
                <div className="badge bg-info text-white">
                  {record.estimate.paymentType}
                </div>
                <div className="badge bg-info text-white mx-1">Non Pkgd</div>
              </div>
            )
          ) : (
            <div className="badge bg-primary text-white">Pending</div>
          )}
        </div>
      </div>
    );
  };

  const OpenActionModal = (record) => {
    setActionPatient(record.data);
    setShow(true);
  };

  // table columns
  const columns = [
    {
      title: "Patient Name",
      dataIndex: "patient",
      render: (text, record) => <div>{renderPackagedBlock(record, text)}</div>,
      sorter: (a, b) => a.patient.length - b.patient.length,
    },
    {
      title: "Lead Id",
      dataIndex: "leadid",
      render: (text, record) => (
        <Link
          onClick={() => localStorage.setItem("minheight", "true")}
          to={{
            pathname: "/app/employees/singleTicket",
            state: { text },
          }}
        >
          #LD{text.slice(0, 5)}
        </Link>
      ),
    },
    {
      title: "Assigned Staff",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/">Agent</Link>
        </h2>
      ),
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/">{text}</Link>
        </h2>
      ),
    },
    {
      title: "Deal Age",
      dataIndex: "createddate",
      sorter: (a, b) => {
        const d1 = new Date(a.createddate);
        const d2 = new Date(b.createddate);
        return d1 - d2;
      },
      render: (text, render) => moment(text).fromNow(),
    },

    {
      title: "Deal Value",
      dataIndex: "dealvalue",
      sorter: (a, b) => a.lastreply.length - b.lastreply.length,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      filters: [
        {
          text: "Highest",
          value: "highest",
        },
        {
          text: "High",
          value: "high",
        },
        {
          text: "Medium",
          value: "medium",
        },
        {
          text: "Low",
          value: "low",
        },
      ],
      onFilter: (value, record) => record.priority.startsWith(value),
      filterSearch: true,
      render: (text, record) => (
        <Select
          className=""
          onChange={(value) => changePriority(record.data._id, value)}
          style={{ width: 120 }}
          value={text}
        >
          <Option value="highest">
            <i className="fa fa-dot-circle-o text-danger mx-1" />
            Highest
          </Option>
          <Option value="high">
            <i className="fa fa-dot-circle-o text-danger mx-1" />
            High
          </Option>
          <Option value="medium">
            <i className="fa fa-dot-circle-o text-success mx-1" />
            Medium
          </Option>
          <Option value="low">
            <i className="fa fa-dot-circle-o text-warning mx-1" />
            Low
          </Option>
        </Select>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "Open",
          value: "open",
        },
        {
          text: "First Follow Up",
          value: "firstfollowup",
        },
        {
          text: "Second Follow Up",
          value: "secondfollowup",
        },
        {
          text: "Third Follow Up",
          value: "thirdfollowup",
        },
        {
          text: "Fourth Follow Up",
          value: "fourthfollowup",
        },
        {
          text: "Closed Won",
          value: "closedwon",
        },
        {
          text: "Closed Failed",
          value: "closedfailed",
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: true,
      render: (text, record) => (
        <Select
          className=""
          onChange={(value) => changeStatus(record.data._id, value)}
          style={{ width: 120 }}
          value={text}
        >
          <Option value="open">
            <i className="fa fa-dot-circle-o text-warning mx-1" />
            Open
          </Option>
          <Option value="firstfollowup">
            <i className="fa fa-dot-circle-o text-info mx-1" />
            FU One
          </Option>
          <Option value="secondfollowup">
            <i className="fa fa-dot-circle-o text-info mx-1" />
            FU Two
          </Option>
          <Option value="thirdfollowup">
            <i className="fa fa-dot-circle-o text-info mx-1" />
            FU Three
          </Option>
          <Option value="fourthfollowup">
            <i className="fa fa-dot-circle-o text-info mx-1" />
            FU Four
          </Option>
          <Option value="closedwon">
            <i className="fa fa-dot-circle-o text-success mx-1" />
            Closed Won
          </Option>
          <Option value="closedfailed">
            <i className="fa fa-dot-circle-o text-danger mx-1" />
            Closed Failed
          </Option>
        </Select>
      ),
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="d-flex items-center justify-between">
          <div className="d-flex">
            <div
              onClick={() => {
                setShowPhone(true);
                setActionPatient(record.data);
              }}
            >
              <i className="fa fa-thin fa-phone mx-1"></i>
            </div>
            <div className="" onClick={() => OpenActionModal(record)}>
              <i className="fa fa-square mx-1" />
              <i className="fa fa-thin fa-envelope mx-1" />
              <i className="fa fa-thin fa-whatsapp mx-1" />
            </div>
          </div>
          <div className="dropdown dropdown-action text-right">
            <a
              href="#"
              className="action-icon dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="material-icons">more_vert</i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_ticket"
              >
                <i className="fa fa-pencil m-r-5" /> Edit
              </a>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_ticket"
              >
                <i className="fa fa-trash-o m-r-5" /> Delete
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Tickets - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Tickets</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Tickets</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_ticket"
              >
                <i className="fa fa-plus" /> Add Ticket
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="card-group m-b-30">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Open Leads</span>
                    </div>
                    <div>
                      <span className="text-success">+10%</span>
                    </div>
                  </div>
                  <h3 className="mb-3">542</h3>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Follow Up</span>
                    </div>
                    <div>
                      <span className="text-success">+12.5%</span>
                    </div>
                  </div>
                  <h3 className="mb-3">250</h3>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Closed Won</span>
                    </div>
                    <div>
                      <span className="text-danger">-2.8%</span>
                    </div>
                  </div>
                  <h3 className="mb-3">1500</h3>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Closed Failed</span>
                    </div>
                    <div>
                      <span className="text-danger">-75%</span>
                    </div>
                  </div>
                  <h3 className="mb-3">125</h3>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Search Filter */}
        {/* <div className="row filter-row">
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee Name</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <select
                value={filter}
                onChange={(e) => handleFilterRequest(e)}
                className="select floating"
              >
                <option value=""> -- Select -- </option>
                <option value="open"> Open </option>
                <option value="firstfollowup"> First Follow Up </option>
                <option value="secondfollowup"> Second Follow Up </option>
                <option value="thirdfollowup"> Third Follow Up </option>
                <option value="fourthfollowup"> Fourth Follow Up </option>
                <option value="won"> Won </option>
                <option value="failed"> Failed </option>
              </select>
              <label className="focus-label">Status</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option> -- Select -- </option>
                <option> High </option>
                <option> Low </option>
                <option> Medium </option>
              </select>
              <label className="focus-label">Priority</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <div>
                <input
                  className="form-control floating datetimepicker"
                  type="date"
                />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <div>
                <input
                  className="form-control floating datetimepicker"
                  type="date"
                />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <a href="#" className="btn btn-success btn-block">
              {" "}
              Search{" "}
            </a>
          </div>
        </div> */}
        {/* /Search Filter */}
        {/* page content */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                pagination={{
                  total: data.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                expandable={{
                  expandedRowRender: (record) => (
                    <ShowExpandedPatient
                      render={render}
                      setrender={setrender}
                      record={record}
                    />
                  ),
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={data}
                rowKey={(record) => record.id}
                onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Ticket Modal */}
      <div id="add_ticket" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Ticket</h5>
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Ticket Subject</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Ticket Id</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Assign Staff</label>
                      <select className="select">
                        <option>-</option>
                        <option>Mike Litorus</option>
                        <option>John Smith</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>CC</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Assign</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Ticket Assignee</label>
                      <div className="project-members">
                        <a
                          title="John Smith"
                          data-placement="top"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src={Avatar_02} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Followers</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
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
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <label>Upload Files</label>
                      <input className="form-control" type="file" />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Ticket Modal */}

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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Ticket Subject</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Laptop Issue"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Assign Staff</label>
                      <select className="select">
                        <option>-</option>
                        <option>Mike Litorus</option>
                        <option>John Smith</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>CC</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Assign</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Ticket Assignee</label>
                      <div className="project-members">
                        <a
                          title="John Smith"
                          data-placement="top"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src={Avatar_02} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Followers</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
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
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
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
      <TicketActions session={actionPatient} show={show} setShow={setShow} />
      <PhoneView
        showPhone={showPhone}
        record={actionPatient}
        setShowPhone={setShowPhone}
      />
    </div>
  );
};

export default Tickets;
