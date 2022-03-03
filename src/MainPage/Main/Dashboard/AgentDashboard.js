/**
 * Signin Firebase
 */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
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
  { m: "sept", "Converted Leads": 450, "Not Converted": 50 },
  { m: "oct", "Converted Leads": 375, "Not Converted": 30 },
  { m: "nov", "Converted Leads": 520, "Not Converted": 65 },
  { m: "dec", "Converted Leads": 652, "Not Converted": 42 },
  { m: "jan", "Converted Leads": 256, "Not Converted": 20 },
  { m: "feb", "Converted Leads": 389, "Not Converted": 23 },
  { m: "mar", "Converted Leads": 452, "Not Converted": 85 },
];
const linechartdata = [
  { stage: "Open", "Not Converted": 10 },
  { stage: "FU one", "Not Converted": 20 },
  { stage: "Fu two", "Not Converted": 10 },
  { stage: "FU three", "Not Converted": 30 },
  { stage: "FU four", "Not Converted": 50 },
];
const AgentDashboard = () => {
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
              <h3 className="page-title">Welcome Agent!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
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
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Converted Leads Ratio</h3>
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
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Non Conversion Stages %</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart
                        data={linechartdata}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                      >
                        <CartesianGrid />
                        <XAxis dataKey="stage" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="Not Converted"
                          stroke="#ff9b44"
                          fill="#ff9b44"
                          strokeWidth={3}
                          dot={{ r: 3 }}
                          activeDot={{ r: 7 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>

                    {/* <div id="line-charts" /> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Revenue Generated</h3>
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
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* /Statistics Widget */}
        <div className="row">
          <div className="col-md-12 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">leads</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th>Invoice ID</th>
                        <th>Client</th>
                        <th>Due Date</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/app/sales/invoices-view">#INV-0001</Link>
                        </td>
                        <td>
                          <h2>
                            <a href="#">Global Technologies</a>
                          </h2>
                        </td>
                        <td>11 Mar 2019</td>
                        <td>$380</td>
                        <td>
                          <span className="badge bg-inverse-warning">
                            Partially Paid
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/app/sales/invoices-view">#INV-0002</Link>
                        </td>
                        <td>
                          <h2>
                            <a href="#">Delta Infotech</a>
                          </h2>
                        </td>
                        <td>8 Feb 2019</td>
                        <td>$500</td>
                        <td>
                          <span className="badge bg-inverse-success">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/app/sales/invoices-view">#INV-0003</Link>
                        </td>
                        <td>
                          <h2>
                            <a href="#">Cream Inc</a>
                          </h2>
                        </td>
                        <td>23 Jan 2019</td>
                        <td>$60</td>
                        <td>
                          <span className="badge bg-inverse-danger">
                            Unpaid
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer">
                <Link to="/app/sales/invoices">View all Leads</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default withRouter(AgentDashboard);
