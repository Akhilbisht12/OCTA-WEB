/**
 * TermsCondition Page
 */
import { Select, Table } from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import {
  Avatar_01,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
  Avatar_19,
} from "../../../Entryfile/imagepath";
import axios from "axios";
import { SERVER_URL } from "../../../config/variables";

const ClientProfile = () => {
  const [data, setData] = useState([]);
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
          doctor: item.estimate ? item.estimate.doctor : "Doctor",
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
  }, []);
  const columns = [
    {
      title: "Patient Name",
      dataIndex: "patient",
      render: (text, record) => <div>{text}</div>,
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
      title: "Doctor",
      dataIndex: "doctor",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/app/profile/client-profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/app/profile/client-profile">{text}</Link>
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
        <Select className="" style={{ width: 120 }} value={text}>
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
        <Select className="" style={{ width: 120 }} value={text}>
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
            <div>
              <i className="fa fa-thin fa-phone mx-1"></i>
            </div>
            <div className="">
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
        <title>Client Profile - HRMS admin Template</title>
        <meta name="description" content="Reactify Blank Page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Profile</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                  <div className="profile-img-wrap">
                    <div className="profile-img">
                      <a href="">
                        <img src={Avatar_19} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="profile-basic">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile-info-left">
                          <h3 className="user-name m-t-0">Sneha Kapoor</h3>
                          <h5 className="company-role m-t-0 mb-0">
                            Medical Counsellor
                          </h5>
                          {/* <small className="text-muted">CEO</small> */}
                          <div className="staff-id">Employee ID : CLT-0001</div>
                          <div className="staff-msg">
                            <Link
                              to="/conversation/chat"
                              className="btn btn-custom"
                            >
                              Send Message
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <ul className="personal-info">
                          <li>
                            <span className="title">Phone:</span>
                            <span className="text">
                              <a href="">9876543210</a>
                            </span>
                          </li>
                          <li>
                            <span className="title">Email:</span>
                            <span className="text">
                              <a href="">barrycuda@example.com</a>
                            </span>
                          </li>
                          <li>
                            <span className="title">Birthday:</span>
                            <span className="text">2nd August</span>
                          </li>
                          <li>
                            <span className="title">Address:</span>
                            <span className="text">
                              5754 Airport Rd, Coosada, AL, 36020
                            </span>
                          </li>
                          <li>
                            <span className="title">Gender:</span>
                            <span className="text">Male</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          style={{ overflowX: "auto" }}
          columns={columns}
          // bordered
          dataSource={data}
          rowKey={(record) => record.id}
          onChange={console.log("change")}
        />
      </div>
      {/* /Page Content */}
    </div>
  );
};
export default ClientProfile;
