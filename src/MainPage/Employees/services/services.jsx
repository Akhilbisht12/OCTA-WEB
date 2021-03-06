import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles

import "../../index.css";
import {
  Avatar_16,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_01,
} from "../../../Entryfile/imagepath";
import AddService from "./addservice";

const Services = () => {
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });
  const [showAddService, setShowAddService] = useState(false);

  return (
    <div className="page-wrapper">
      <AddService
        showAddService={showAddService}
        setShowAddService={setShowAddService}
      />
      <Helmet>
        <title>Projects - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Services</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Services</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                onClick={() => setShowAddService(true)}
                // data-toggle="modal"
                // data-target="#create_project"
              >
                <i className="fa fa-plus" /> Add Service
              </a>
              <div className="view-icons">
                <Link
                  to="/app/projects/project_dashboard"
                  className="grid-view btn btn-link active"
                >
                  <i className="fa fa-th" />
                </Link>
                <Link
                  to="/app/projects/projects-list"
                  className="list-view btn btn-link"
                >
                  <i className="fa fa-bars" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Department Name</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Service Name</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>Select Service</option>
                <option>CABG</option>
                <option>Microdiscectomy</option>
                <option>Craniotomy</option>
                <option>Angioplasty</option>
              </select>
              <label className="focus-label">Designation</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <a href="#" className="btn btn-success btn-block">
              {" "}
              Search{" "}
            </a>
          </div>
        </div>
        {/* Search Filter */}
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="dropdown dropdown-action profile-action">
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
                      data-target="#edit_project"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="project-title">
                  <Link to="/app/serviceView/">CABG</Link>
                </h4>
                <small className="block text-ellipsis m-b-15">
                  <span className="text-xs">1</span>{" "}
                  <span className="text-muted">open leads, </span>
                  <span className="text-xs">9</span>{" "}
                  <span className="text-muted">leads completed</span>
                </small>
                <p className="text-muted">
                  A coronary artery bypass graft (CABG) is a surgical procedure
                  used to treat sever coronary heart disease (CAD). It diverts
                  blood around narrowed or clogged parts of the major arteries
                  to improve blood flow and oxygen supply to the heart.
                </p>
                {/* <div className="pro-deadline m-b-15">
                  <div className="sub-title">Deadline:</div>
                  <div className="text-muted">17 Apr 2019</div>
                </div> */}
                <div className="project-members m-b-15">
                  <div>Service Leader :</div>
                  <ul className="team-members">
                    <li>
                      <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                        <img alt="" src={Avatar_16} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="project-members m-b-15">
                  <div>Team :</div>
                  <ul className="team-members">
                    <li>
                      <a href="#" data-toggle="tooltip" title="John Doe">
                        <img alt="" src={Avatar_02} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="Richard Miles">
                        <img alt="" src={Avatar_09} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="John Smith">
                        <img alt="" src={Avatar_10} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="Mike Litorus">
                        <img alt="" src={Avatar_05} />
                      </a>
                    </li>
                    <li className="dropdown avatar-dropdown">
                      <a
                        href="#"
                        className="all-users dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        +15
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="avatar-group">
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_02} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_09} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_10} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_05} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_11} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_12} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_13} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_01} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_16} />
                          </a>
                        </div>
                        <div className="avatar-pagination">
                          <ul className="pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">??</span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">??</span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="m-b-5">
                  Progress <span className="text-success float-right">40%</span>
                </p>
                <div className="progress progress-xs mb-0">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    data-toggle="tooltip"
                    title="40%"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="dropdown dropdown-action profile-action">
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
                      data-target="#edit_project"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="project-title">
                  <Link to="/app/projects/projects-view">Microdiscectomy</Link>
                </h4>
                <small className="block text-ellipsis m-b-15">
                  <span className="text-xs">2</span>{" "}
                  <span className="text-muted">open leads, </span>
                  <span className="text-xs">5</span>{" "}
                  <span className="text-muted">leads completed</span>
                </small>
                <p className="text-muted">
                  Microdiscectomy is a very common, if not the most common,
                  surgery performed by spine surgeons. The operation consists of
                  removing a portion of the intervertebral disc, the herniated
                  or protruding portion that is compressing the traversing
                  spinal nerve root.
                </p>
                {/* <div className="pro-deadline m-b-15">
                  <div className="sub-title">Deadline:</div>
                  <div className="text-muted">17 Apr 2019</div>
                </div> */}
                <div className="project-members m-b-15">
                  <div>Service Leader :</div>
                  <ul className="team-members">
                    <li>
                      <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                        <img alt="" src={Avatar_16} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="project-members m-b-15">
                  <div>Team :</div>
                  <ul className="team-members">
                    <li>
                      <a href="#" data-toggle="tooltip" title="John Doe">
                        <img alt="" src={Avatar_02} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="Richard Miles">
                        <img alt="" src={Avatar_09} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="John Smith">
                        <img alt="" src={Avatar_10} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="Mike Litorus">
                        <img alt="" src={Avatar_05} />
                      </a>
                    </li>
                    <li className="dropdown avatar-dropdown">
                      <a
                        href="#"
                        className="all-users dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        +15
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="avatar-group">
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_02} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_09} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_10} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_05} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_11} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_12} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_13} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_01} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_16} />
                          </a>
                        </div>
                        <div className="avatar-pagination">
                          <ul className="pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">??</span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">??</span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="m-b-5">
                  Progress <span className="text-success float-right">40%</span>
                </p>
                <div className="progress progress-xs mb-0">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    data-toggle="tooltip"
                    title="40%"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="dropdown dropdown-action profile-action">
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
                      data-target="#edit_project"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="project-title">
                  <Link to="/app/projects/projects-view">Craniotomy</Link>
                </h4>
                <small className="block text-ellipsis m-b-15">
                  <span className="text-xs">3</span>{" "}
                  <span className="text-muted">open leads, </span>
                  <span className="text-xs">3</span>{" "}
                  <span className="text-muted">leads completed</span>
                </small>
                <p className="text-muted">
                  A craniotomy is the surgical removal of part of the bone from
                  the skull to expose the brain. Specialized tools are used to
                  remove the section of bone called the bone flap. The bone flap
                  is temporarily removed, then replaced after the brain surgery
                  has been done.
                </p>
                {/* <div className="pro-deadline m-b-15">
                  <div className="sub-title">Deadline:</div>
                  <div className="text-muted">17 Apr 2019</div>
                </div> */}
                <div className="project-members m-b-15">
                  <div>Service Leader :</div>
                  <ul className="team-members">
                    <li>
                      <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                        <img alt="" src={Avatar_16} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="project-members m-b-15">
                  <div>Team :</div>
                  <ul className="team-members">
                    <li>
                      <a href="#" data-toggle="tooltip" title="John Doe">
                        <img alt="" src={Avatar_02} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="Richard Miles">
                        <img alt="" src={Avatar_09} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="John Smith">
                        <img alt="" src={Avatar_10} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="Mike Litorus">
                        <img alt="" src={Avatar_05} />
                      </a>
                    </li>
                    <li className="dropdown avatar-dropdown">
                      <a
                        href="#"
                        className="all-users dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        +15
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="avatar-group">
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_02} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_09} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_10} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_05} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_11} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_12} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_13} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_01} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_16} />
                          </a>
                        </div>
                        <div className="avatar-pagination">
                          <ul className="pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">??</span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">??</span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="m-b-5">
                  Progress <span className="text-success float-right">40%</span>
                </p>
                <div className="progress progress-xs mb-0">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    data-toggle="tooltip"
                    title="40%"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="dropdown dropdown-action profile-action">
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
                      data-target="#edit_project"
                    >
                      <i className="fa fa-pencil m-r-5" /> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="project-title">
                  <Link to="/app/projects/projects-view">Angioplasty</Link>
                </h4>
                <small className="block text-ellipsis m-b-15">
                  <span className="text-xs">12</span>{" "}
                  <span className="text-muted">open lead, </span>
                  <span className="text-xs">4</span>{" "}
                  <span className="text-muted">leads completed</span>
                </small>
                <p className="text-muted">
                  Angioplasty is a procedure used to open blocked coronary
                  arteries caused by coronary artery disease. It restores blood
                  flow to the heart muscle without open-heart surgery.
                  Angioplasty can be done in an emergency setting such as a
                  heart attack.
                </p>
                {/* <div className="pro-deadline m-b-15">
                  <div className="sub-title">Deadline:</div>
                  <div className="text-muted">17 Apr 2019</div>
                </div> */}
                <div className="project-members m-b-15">
                  <div>Service Leader :</div>
                  <ul className="team-members">
                    <li>
                      <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                        <img alt="" src={Avatar_16} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="project-members m-b-15">
                  <div>Team :</div>
                  <ul className="team-members">
                    <li>
                      <a href="#" data-toggle="tooltip" title="John Doe">
                        <img alt="" src={Avatar_02} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="Richard Miles">
                        <img alt="" src={Avatar_09} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="John Smith">
                        <img alt="" src={Avatar_10} />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" title="Mike Litorus">
                        <img alt="" src={Avatar_05} />
                      </a>
                    </li>
                    <li className="dropdown avatar-dropdown">
                      <a
                        href="#"
                        className="all-users dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        +15
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="avatar-group">
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_02} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_09} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_10} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_05} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_11} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_12} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_13} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_01} />
                          </a>
                          <a className="avatar avatar-xs" href="#">
                            <img alt="" src={Avatar_16} />
                          </a>
                        </div>
                        <div className="avatar-pagination">
                          <ul className="pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">??</span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">??</span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="m-b-5">
                  Progress <span className="text-success float-right">40%</span>
                </p>
                <div className="progress progress-xs mb-0">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    data-toggle="tooltip"
                    title="40%"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* Edit Project Modal */}
      <div id="edit_project" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Project</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">??</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Project Name</label>
                      <input
                        className="form-control"
                        defaultValue="Project Management"
                        type="text"
                      />
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
                        defaultValue="$5000"
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
                  <textarea
                    rows={4}
                    className="form-control"
                    placeholder="Enter your message here"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label>Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Project Modal */}
      {/* Delete Project Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_project"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Project</h3>
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
      {/* /Delete Project Modal */}
    </div>
  );
};

export default Services;
