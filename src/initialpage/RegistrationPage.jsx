/**
 * Signin Firebase
 */

import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Applogo } from "../Entryfile/imagepath.jsx";
import axios from "axios";
import Cookies from "universal-cookie";

const Registrationpage = (props) => {
  // ON user Registration
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agentID, setAgentID] = useState("");
  const handleRegister = async () => {
    const cookies = new Cookies();
    try {
      if (!(firstName && lastName && email && phone && password)) {
        alert("All fields are required");
      }
      const agent = await axios.post(
        "http://localhost:3333/api/v1/agent/signup",
        {
          firstName,
          lastName,
          email,
          agentID,
          phone,
          password,
        }
      );
      cookies.set("agent", agent.data, { path: "/" });
      props.history.push("/app/main/dashboard");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  /**
   * On User Login
   */
  const onUserLogin = (e) => {
    e.preventDefault();

    if (this.state.email !== "" && this.state.password !== "") {
      this.props.signinUserInFirebase(this.state, this.props.history);
    }
  };

  const onApplyJob = (e) => {
    e.preventDefault();
    localStorage.removeItem("jobview");
    this.props.history.push("/applyjob/joblist");
  };

  const { loading } = props;
  return (
    <>
      <Helmet>
        <title>Register - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">
          Apply Job
        </Link>
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <Link to="/app/main/dashboard">
              <img src={Applogo} alt="Dreamguy's Technologies" />
            </Link>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Register</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>LastName</label>
                  <input
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <label>Agent ID</label>
                  <input
                    value={agentID}
                    onChange={(e) => setAgentID(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    type="number"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    type="password"
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    onClick={handleRegister}
                    className="btn btn-primary account-btn"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrationpage;
