import moment from "moment";
import React from "react";

const Timeline = ({ record }) => {
  const line = record.timeline;
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex">
          <div className="card profile-box flex-fill">
            <div className="card-body">
              <div className="experience-box">
                <ul className="experience-list">
                  <li>
                    <div className="experience-user">
                      <div
                        className={`before-circle ${
                          line.prescription.value ? "bg-success" : ""
                        }`}
                      />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="/" className="name">
                          Prescription Uploaded
                        </a>
                        <span className="time">
                          {line.prescription.value
                            ? moment(line.prescription.date).format(
                                "DD-MMM-YY hh:mm A"
                              )
                            : "yet to be updated"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div
                        className={`before-circle ${
                          line.estimate.value ? "bg-success" : ""
                        }`}
                      />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="/" className="name">
                          Estimate Created
                        </a>
                        <span className="time">
                          {line.estimate.value
                            ? moment(line.estimate.date).format(
                                "DD-MMM-YY hh:mm A"
                              )
                            : "yet to be updated"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div
                        className={`before-circle ${
                          line.automation.value ? "bg-success" : ""
                        }`}
                      />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="/" className="name">
                          Automated Conversations Sent
                        </a>
                        <span className="time">
                          {line.automation.value
                            ? moment(line.automation.date).format(
                                "DD-MMM-YY hh:mm A"
                              )
                            : "yet to be updated"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div
                        className={`before-circle ${
                          line.fone.value ? "bg-success" : ""
                        }`}
                      />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="/" className="name">
                          First Follow up Captured
                        </a>
                        <span className="time">
                          {line.fone.value
                            ? moment(line.fone.date).format("DD-MMM-YY hh:mm A")
                            : "yet to be updated"}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex">
          <div className="card profile-box flex-fill">
            <div className="card-body">
              <div className="experience-box">
                <ul className="experience-list">
                  <li>
                    <div className="experience-user">
                      <div
                        className={`before-circle ${
                          line.ftwo.value ? "bg-success" : ""
                        }`}
                      />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="/" className="name">
                          Second Follow Up Captured
                        </a>
                        <span className="time">
                          {line.ftwo.value
                            ? moment(line.ftwo.date).format("DD-MMM-YY hh:mm A")
                            : "yet to be updated"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div
                        className={`before-circle ${
                          line.fthree.value ? "bg-success" : ""
                        }`}
                      />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="/" className="name">
                          Third Follow Up Captured
                        </a>
                        <span className="time">
                          {line.fthree.value
                            ? moment(line.fthree.date).format(
                                "DD-MMM-YY hh:mm A"
                              )
                            : "yet to be updated"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div
                        className={`before-circle ${
                          line.ffour.value ? "bg-success" : ""
                        }`}
                      />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="/" className="name">
                          Fourth Follow Up Captured
                        </a>
                        <span className="time">
                          {line.ffour.value
                            ? moment(line.ffour.date).format(
                                "DD-MMM-YY hh:mm A"
                              )
                            : "yet to be updated"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="experience-user">
                      <div
                        className={`before-circle ${
                          line.closed.value ? "bg-success" : ""
                        }`}
                      />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a href="/" className="name">
                          Lead Closed
                        </a>
                        <span className="time">
                          {line.closed.value
                            ? moment(line.closed.date).format(
                                "DD-MMM-YY hh:mm A"
                              )
                            : "yet to be updated"}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
