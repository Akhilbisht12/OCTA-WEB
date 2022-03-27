import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { SERVER_URL } from "../../../config/variables";
const AddAgents = ({ addAgent, setAddAgent }) => {
  const [agent, setAgent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "",
    photo: "",
  });
  console.log(SERVER_URL);
  const handleAddAgent = async (e) => {
    e.preventDefault();
    try {
      const agentData = new FormData();
      for (const [key, value] of Object.entries(agent)) {
        agentData.append(key, value);
      }

      for (var pair of agentData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      const uploadAgent = await axios.post(
        `${SERVER_URL}/api/v1/agent/signup`,
        agentData
      );
      console.log(uploadAgent);
      alert("Agent Added");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <Modal size="lg" show={addAgent} onHide={() => setAddAgent(!addAgent)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAddAgent}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  value={agent.firstName}
                  onChange={(e) =>
                    setAgent({ ...agent, firstName: e.target.value })
                  }
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">Last Name</label>
                <input
                  value={agent.lastName}
                  onChange={(e) =>
                    setAgent({ ...agent, lastName: e.target.value })
                  }
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">
                  Role <span className="text-danger">*</span>
                </label>
                <select
                  value={agent.role}
                  onChange={(e) => setAgent({ ...agent, role: e.target.value })}
                  className="form-control"
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="agent">Agent</option>
                  <option value="unit-head">Unit Head</option>
                  <option value="conversion-head">Conversion Head</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  value={agent.email}
                  onChange={(e) =>
                    setAgent({ ...agent, email: e.target.value })
                  }
                  className="form-control floating"
                  type="email"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">Password</label>
                <input
                  value={agent.password}
                  onChange={(e) =>
                    setAgent({ ...agent, password: e.target.value })
                  }
                  className="form-control"
                  type="password"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">Confirm Password</label>
                <input
                  value={agent.confirmPassword}
                  onChange={(e) =>
                    setAgent({ ...agent, confirmPassword: e.target.value })
                  }
                  className="form-control"
                  type="password"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">Phone </label>
                <input
                  value={agent.phone}
                  onChange={(e) =>
                    setAgent({ ...agent, phone: e.target.value })
                  }
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label">
                  Agent Picture <span className="text-danger">*</span>
                </label>
                <input
                  onChange={(e) =>
                    setAgent({ ...agent, photo: e.target.files[0] })
                  }
                  className="form-control floating"
                  type="file"
                />
              </div>
            </div>
          </div>
          <div className="submit-section">
            <button type="submit" className="btn btn-primary submit-btn">
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddAgents;
