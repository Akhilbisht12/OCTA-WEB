/**
 * App Header
 */
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  let pathname = props.location.pathname;
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link
                    className={
                      pathname.includes("main/agent-dashboard") ? "active" : ""
                    }
                    to="/app/main/agent-dashboard"
                  >
                    Agent Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      pathname.includes("main/conversion-head-dashboard")
                        ? "active"
                        : ""
                    }
                    to="/app/main/conversion-head-dashboard"
                  >
                    Conversion Head Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      pathname.includes("main/unit-head-dashboard")
                        ? "active"
                        : ""
                    }
                    to="/app/main/unit-head-dashboard"
                  >
                    Unit Head Dashboard
                  </Link>
                </li>
              </ul>
            </li>

            <li className={pathname.includes("clients") ? "active" : ""}>
              <Link to="/app/employees/clients">
                {" "}
                <i className="la la-user" /> <span>All Agents</span>
              </Link>
            </li>

            <li className={pathname.includes("allemployees") ? "active" : ""}>
              <Link to="/app/employee/allemployees">
                <i className="la la-users" /> <span>Patients</span>
              </Link>
            </li>

            <li className="submenu">
              <a href="#">
                <i className="la la-rocket" /> <span> Services</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link
                    className={
                      pathname.includes("t_dashboard")
                        ? "active"
                        : pathname.includes("projects-list")
                        ? "active"
                        : pathname.includes("cts-view")
                        ? "active"
                        : ""
                    }
                    to="/app/services/"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={
                pathname.includes("tickets")
                  ? "active"
                  : pathname.includes("ticket-view")
                  ? "active"
                  : ""
              }
            >
              <Link to="/app/employees/tickets">
                <i className="la la-ticket" /> <span>Tickets</span>
              </Link>
            </li>
            <li className="menu-title">
              <span>HR</span>
            </li>

            <li>
              <Link to="/settings/companysetting">
                <i className="la la-cog" /> <span>Settings</span>
              </Link>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-user" /> <span> Profile </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link
                    className={
                      pathname.includes("profile/employee-") ? "active" : ""
                    }
                    to="/app/profile/employee-profile"
                  >
                    {" "}
                    Employee Profile{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname.includes("client-") ? "active" : ""}
                    to="/app/profile/client-profile"
                  >
                    {" "}
                    Client Profile{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-key" /> <span> Authentication </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link to="/login"> Login </Link>
                </li>
                <li>
                  <Link to="/register"> Register </Link>
                </li>
                <li>
                  <Link to="/forgotpassword"> Forgot Password </Link>
                </li>
                <li>
                  <Link to="/otp"> OTP </Link>
                </li>
                <li>
                  <Link to="/lockscreen"> Lock Screen </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
