import React from "react";
import { Modal } from "react-bootstrap";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import {
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
} from "../../../Entryfile/imagepath";

const AddService = ({ showAddService, setShowAddService }) => {
  const onImageUpload = (fileList) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      ReactSummernote.insertImage(reader.result);
    };
    reader.readAsDataURL(fileList[0]);
  };
  return (
    <div>
      <Modal
        size="lg"
        show={showAddService}
        onHide={() => setShowAddService(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add A New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Create Project Modal */}

          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Project Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Client</label>
                    <select className="select">
                      <option>Global Technologies</option>
                      <option>Delta Infotech</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Start Date</label>
                    <div>
                      <input
                        className="form-control datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>End Date</label>
                    <div>
                      <input
                        className="form-control datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Rate</label>
                    <input
                      placeholder="$50"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>&nbsp;</label>
                    <select className="select">
                      <option>Hourly</option>
                      <option>Fixed</option>
                    </select>
                  </div>
                </div>
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
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Project Leader</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Team Leader</label>
                    <div className="project-members">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        title="Jeffery Lalor"
                        className="avatar"
                      >
                        <img src={Avatar_16} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Team</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Team Members</label>
                    <div className="project-members">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        title="John Doe"
                        className="avatar"
                      >
                        <img src={Avatar_16} alt="" />
                      </a>
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
                      <span className="all-team">+2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <ReactSummernote
                  value="Default value"
                  options={{
                    lang: "ru-RU",
                    height: 350,
                    dialogsInBody: true,
                    toolbar: [
                      ["style", ["style"]],
                      ["font", ["bold", "underline", "clear"]],
                      ["fontname", ["fontname"]],
                      ["para", ["ul", "ol", "paragraph"]],
                      ["table", ["table"]],
                      ["insert", ["link", "picture", "video"]],
                      ["view", ["fullscreen", "codeview"]],
                    ],
                  }}
                  // onChange={this.onChange}
                  onImageUpload={onImageUpload}
                />
                {/* <textarea rows={4} className="form-control summernote" placeholder="Enter your message here" defaultValue={""} /> */}
              </div>
              <div className="form-group">
                <label>Upload Files</label>
                <input className="form-control" type="file" />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
          {/* /Create Project Modal */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddService;
