/**
 * Signin Firebase
 */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Select } from "antd";
import {
  User,
  Avatar_19,
  Avatar_07,
  Avatar_06,
  Avatar_14,
} from "../../../Entryfile/imagepath.jsx";

import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "../../index.css";
// import 'Assets/plugins/morris/morris.min.js';
// import 'Assets/plugins/raphael/raphael.min.js';
// import 'Assets/js/chart.js';

const barchartdata = [
  { dept: "Cardiology", "Converted Leads": 450, "Not Converted": 50 },
  { dept: "Oncology", "Converted Leads": 375, "Not Converted": 30 },
  { dept: "Neurology", "Converted Leads": 520, "Not Converted": 65 },
];
const doctordata = [
  { m: "Dr. Jhon Doe", "Converted Leads": 450, "Not Converted": 50 },
  { m: "Dr. Anna Doe", "Converted Leads": 375, "Not Converted": 30 },
  { m: "Dr. Milley Doe", "Converted Leads": 520, "Not Converted": 65 },
  { m: "Dr. James Lock", "Converted Leads": 652, "Not Converted": 42 },
  { m: "Dr. Hermi Lock", "Converted Leads": 256, "Not Converted": 20 },
  { m: "Dr. Geeta williams", "Converted Leads": 389, "Not Converted": 23 },
  { m: "Dr. Kiran Williams", "Converted Leads": 452, "Not Converted": 85 },
];
const revenuedata = [
  { m: "sept", total: 45000 },
  { m: "oct", total: 37500 },
  { m: "nov", total: 52000 },
  { m: "dec", total: 65200 },
  { m: "jan", total: 25600 },
  { m: "feb", total: 38900 },
  { m: "mar", total: 45200 },
];
const specificSpeciality = [
  { m: "Dr. Jhon Doe", "Converted Leads": 450, "Not Converted": 50 },
  { m: "Dr. Anna Doe", "Converted Leads": 375, "Not Converted": 30 },
  { m: "Dr. Milley Doe", "Converted Leads": 520, "Not Converted": 65 },
  { m: "Dr. James Lock", "Converted Leads": 652, "Not Converted": 42 },
  { m: "Dr. Hermi Lock", "Converted Leads": 256, "Not Converted": 20 },
  { m: "Dr. Geeta williams", "Converted Leads": 389, "Not Converted": 23 },
  { m: "Dr. Kiran Williams", "Converted Leads": 452, "Not Converted": 85 },
];
const reasondata = [
  { reason: "Financial Problem", "total patients": 10 },
  { reason: "Treatment in diff hosp", "total patients": 20 },
  { reason: "Expensive", "total patients": 10 },
  { reason: "Trust issue", "total patients": 30 },
  { reason: "Other", "total patients": 50 },
];
const UnitHead = () => {
  useEffect(() => {
    let firstload = localStorage.getItem("firstload");
    if (firstload === "true") {
      setTimeout(function () {
        window.location.reload(1);
        localStorage.removeItem("firstload");
      }, 1000);
    }
  });

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Dashboard - HRMS Admin Template</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Welcome Unit Head!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-cubes" />
                </span>
                <div className="dash-widget-info">
                  <h3>112</h3>
                  <span>Open Leads</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-usd" />
                </span>
                <div className="dash-widget-info">
                  <h3>44</h3>
                  <span>Follow Up</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-diamond" />
                </span>
                <div className="dash-widget-info">
                  <h3>37</h3>
                  <span>Closed Won</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-user" />
                </span>
                <div className="dash-widget-info">
                  <h3>10</h3>
                  <span>Closed Failed</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Conversion Performance</h3>
                    {/* <div id="bar-charts" /> */}
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={barchartdata}
                        margin={{
                          top: 5,
                          right: 5,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid />
                        <XAxis dataKey="m" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Converted Leads" fill="#ff9b44" />
                        <Bar dataKey="Not Converted" fill="#fc6075" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Missed Opportunity</h3>
                    {/* <div id="bar-charts" /> */}
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={revenuedata}
                        margin={{
                          top: 5,
                          right: 5,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid />
                        <XAxis dataKey="m" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="tomato" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Reasons for Non-Conversion</h3>
                    {/* <div id="bar-charts" /> */}
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={reasondata}
                        layout="vertical"
                        margin={{
                          top: 5,
                          right: 5,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="reason" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total patients" fill="tomato" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Department comparision */}
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 d-flex flex-column align-items-center my-4">
                <h3 className="page-title text-center">
                  Speciality Performance Index
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Speciality Wise Conversion</h3>
                    {/* <div id="bar-charts" /> */}
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={barchartdata}
                        margin={{
                          top: 5,
                          right: 5,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid />
                        <XAxis dataKey="dept" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Converted Leads" fill="#ff9b44" />
                        <Bar dataKey="Not Converted" fill="#fc6075" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      <span className="d-block my-1">
                        Speciality wise conversions by doctor
                      </span>
                      <Select
                        style={{ width: 200 }}
                        value="highest"
                        className=""
                      >
                        <Option value="highest">
                          <i className="fa fa-dot-circle-o text-danger mx-1" />
                          Oncology
                        </Option>
                        <Option value="high">
                          <i className="fa fa-dot-circle-o text-danger mx-1" />
                          Cardiology
                        </Option>
                        <Option value="medium">
                          <i className="fa fa-dot-circle-o text-success mx-1" />
                          Neurology
                        </Option>
                      </Select>
                    </h3>
                    {/* <div id="bar-charts" /> */}
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={specificSpeciality}
                        margin={{
                          top: 5,
                          right: 5,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid />
                        <XAxis dataKey="m" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Converted Leads" fill="#ff9b44" />
                        <Bar dataKey="Not Converted" fill="#fc6075" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UnitHead);
