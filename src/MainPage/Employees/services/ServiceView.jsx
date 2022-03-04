import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_16,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_01,
  PlaceHolder,
} from "../../../Entryfile/imagepath";

const ServiceView = () => {
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });
  return (
    <div className="page-wrapper">
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
              <h3 className="page-title">Coronary Artery Bypass Graft</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">CABG</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#edit_project"
              >
                <i className="fa fa-plus" /> Edit Project
              </a>
              <Link
                to="/app/projects/task-board"
                className="btn btn-white float-right m-r-10"
                data-toggle="tooltip"
                title="Task Board"
              >
                <i className="fa fa-bars" />
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="project-title">
                  <h5 className="card-title">CABG</h5>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">2</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">5</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                </div>
                <strong>What is CABG?</strong>
                <p>
                  A coronary artery bypass graft (CABG) is a surgical procedure
                  used to treat sever coronary heart disease (CAD). It diverts
                  blood around narrowed or clogged parts of the major arteries
                  to improve blood flow and oxygen supply to the heart.
                </p>
                <strong>Why have you been advised CABG?</strong>
                <p>
                  CAD is the narrowing of the coronary arteries—the blood
                  vessels that supply oxygen and nutrients to the heart muscle.
                  This condition is caused by a buildup of fatty material called
                  plaque within the walls of the arteries.Over time, that
                  plaque—made up of fat, cholesterol, calcium, and other
                  substances found in the blood—will become very hard. When this
                  happens, the coronary arteries are narrowed or blocked. You
                  may have been experiencing: - Chest pain or discomfort called
                  angina - irregular heartbeat - shortness of breath CAD also
                  can cause a blood clot to form, cutting off blood flow and
                  leading to a heart attack. You have been advised Medicines,
                  lifestyle changes, and other procedures before CABG is
                  recommended for you. You my have experienced limited success
                  with these other treatment choices, and hance CABG may be an
                  effective and viable option for you at this time
                </p>
                <strong>What will happen during the surgery?</strong>
                <p>
                  How long does it take: CABG usually lasts 3-6 hours. But it
                  may take longer depending on how many blood vessels are being
                  attached. Who is the operation theatre: - your CTVS surgeon -
                  who performs the surgery - assistant CTVS surgeon - an
                  anaesthetist - monitors vitals and administers anaesthesia -
                  perfusionist - operates heart lung bypass machine - nurses and
                  technicians - to assist the surgeon What will happen during
                  the surgery: Blood vessels can be taken from your leg
                  (saphenous vein), inside your chest (internal mammary artery),
                  or your arm (radial artery). The number of blood vessels used
                  will depend on how severe your coronary heart disease is and
                  how many of the coronary blood vessels have become narrowed.
                  One of the graft vessels is usually taken from your chest
                  (internal mammary artery). Once all the graft vessels have
                  been removed, your surgeon will make a cut down the middle of
                  your chest so they can divide your breastbone (sternum) and
                  access your heart. During the procedure, your blood may be
                  rerouted to a heart-lung bypass machine. This takes over from
                  your heart and lungs, pumping blood and oxygen through your
                  body. Your heart will be temporarily stopped using medicine
                  while your surgeon attaches the new grafts to divert the blood
                  supply around the blocked artery. After the grafts have been
                  attached, your heart will be started again using controlled
                  electrical shocks. Your breastbone will then be fixed together
                  using permanent metal wires and the skin on your chest sewn up
                  using dissolvable stitches
                </p>
                <strong>Recovery in Hospital</strong>
                <p>
                  After surgery, you will typically spend one or two days in an
                  intensive care unit. Your heart rate and blood pressure will
                  be continuously monitored during this time. Intravenous
                  medicines (medicines injected through a vein) are often given
                  to regulate blood circulation and blood pressure. You will
                  then be moved to a less intensive care area of the hospital
                  for three to five days before going home.
                </p>
                <strong>Recovery at Home</strong>
                <p>
                  your doctor will give you specific instructions for recovering
                  at home, especially concerning: - How to care for your healing
                  incisions - How to recognize signs of infection or other
                  complications - When to call the doctor immediately - When to
                  make follow-up appointments You also may receive instructions
                  on how to deal with common after-effects from surgery.
                  After-effects often go away within four to six weeks after
                  surgery, but may include: - Discomfort or itching from healing
                  incisions - Swelling of the area where an artery or vein was
                  taken for grafting - Muscle pain or tightness in the shoulders
                  and upper back - Fatigue (tiredness), mood swings or
                  depression - Difficulty sleeping or loss of appetite -
                  Constipation - Chest pain around the site of the chest bone
                  incision (more frequent with the traditional surgery) Full
                  recovery from traditional CABG may take six to 12 weeks or
                  more
                </p>
                <strong>
                  How should you prepare for CABG (including one day before
                  admission)
                </strong>
                <p>
                  Before surgery, you'll attend a pre-admission clinic, where
                  you'll be seen by a member of the team who'll be looking after
                  you in hospital. At this clinic, you'll have a physical
                  examination and be asked for details of your medical history.
                  You may also have some tests, such as a chest X-ray, blood
                  tests and an electrocardiogram (ECG). During an ECG, small
                  electrodes are put on your arms, legs and chest to record the
                  electrical signals produced by your heart. You'll usually be
                  told more about the operation during your visit to the
                  pre-admission clinic. This is a good time to ask any questions
                  you have about the procedure, although you can discuss
                  concerns at any time. While at the pre-admission clinic,
                  you'll also be asked: whether you're taking any tablets or
                  other types of medicine – it helps if you bring details with
                  you of anything you're taking (perhaps bring the packaging
                  with you) about previous anaesthetics you have had and whether
                  you had any problems with these, such as feeling sick whether
                  you're allergic to anything You'll be advised to stop smoking
                  if you smoke. This is because smoking increases your chances
                  of developing a serious chest infection and slows down the
                  time your wounds will take to heal. Smoking can also increase
                  your risk of getting blood clots.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title m-b-20">Uploaded image files</h5>
                <div className="row">
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img
                          src="https://upgrate.in/wp-content/uploads/2022/02/cabg.jpeg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="uploaded-img-name">Intro.png</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img
                          src="https://upgrate.in/wp-content/uploads/2022/02/procedure_cabg.jpeg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="uploaded-img-name">Procedure.png</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img
                          src="https://upgrate.in/wp-content/uploads/2022/02/prepare_cabg.jpeg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="uploaded-img-name">Preparation.png</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img
                          src="https://upgrate.in/wp-content/uploads/2022/02/recovery_hosp_cabg.jpeg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="uploaded-img-name">Recovery.png</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title m-b-20">Uploaded files</h5>
                <ul className="files-list">
                  <li>
                    <div className="files-cont">
                      <div className="file-type">
                        <span className="files-icon">
                          <i className="fa fa-file-pdf-o" />
                        </span>
                      </div>
                      <div className="files-info">
                        <span className="file-name text-ellipsis">
                          <a href="#">
                            AHA Selfcare Mobile Application Test-Cases.xls
                          </a>
                        </span>
                        <span className="file-author">
                          <a href="#">John Doe</a>
                        </span>{" "}
                        <span className="file-date">May 31st at 6:53 PM</span>
                        <div className="file-size">Size: 14.8Mb</div>
                      </div>
                      <ul className="files-action">
                        <li className="dropdown dropdown-action">
                          <a
                            href=""
                            className="dropdown-toggle btn btn-link"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_horiz</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="">
                              Download
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#share_files"
                            >
                              Share
                            </a>
                            <a className="dropdown-item" href="">
                              Delete
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="files-cont">
                      <div className="file-type">
                        <span className="files-icon">
                          <i className="fa fa-file-pdf-o" />
                        </span>
                      </div>
                      <div className="files-info">
                        <span className="file-name text-ellipsis">
                          <a href="#">
                            AHA Selfcare Mobile Application Test-Cases.xls
                          </a>
                        </span>
                        <span className="file-author">
                          <a href="#">Richard Miles</a>
                        </span>{" "}
                        <span className="file-date">May 31st at 6:53 PM</span>
                        <div className="file-size">Size: 14.8Mb</div>
                      </div>
                      <ul className="files-action">
                        <li className="dropdown dropdown-action">
                          <a
                            href=""
                            className="dropdown-toggle btn btn-link"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_horiz</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="">
                              Download
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#share_files"
                            >
                              Share
                            </a>
                            <a className="dropdown-item" href="">
                              Delete
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title m-b-15">Service details</h6>
                <table className="table table-striped table-border">
                  <tbody>
                    <tr>
                      <td>Package Price:</td>
                      <td className="text-right">Rs. 150000</td>
                    </tr>
                    <tr>
                      <td>Hospitalisation Days:</td>
                      <td className="text-right">5 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card project-user">
              <div className="card-body">
                <h6 className="card-title m-b-20">
                  Doctors{" "}
                  <button
                    type="button"
                    className="float-right btn btn-primary btn-sm"
                    data-toggle="modal"
                    data-target="#assign_leader"
                  >
                    <i className="fa fa-plus" /> Add
                  </button>
                </h6>
                <ul className="list-box">
                  <li>
                    <Link to="/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_11} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Wilmer Deluna</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            cardio surgeon
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_01} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Lesley Grauer</span>
                          <div className="clearfix" />
                          <span className="message-content">surgeon</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_01} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jhon Grauer</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Anaesthesiology
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Assign Leader Modal */}
      <div id="assign_leader" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign Leader to this project</h5>
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
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to add a leader"
                  className="form-control search-input"
                  type="text"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_09} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_10} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_16} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Assign Leader Modal */}
      {/* Assign User Modal */}
      <div id="assign_user" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign the user to this project</h5>
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
              <div className="input-group m-b-30">
                <input
                  placeholder="Search a user to assign"
                  className="form-control search-input"
                  type="text"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_09} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_10} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_16} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Assign User Modal */}
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
                <span aria-hidden="true">×</span>
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
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Jeffery Lalor"
                        >
                          <img alt="" src={Avatar_16} />
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
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="John Doe"
                        >
                          <img alt="" src={Avatar_02} />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Richard Miles"
                        >
                          <img alt="" src={Avatar_09} />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="John Smith"
                        >
                          <img alt="" src={Avatar_10} />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Mike Litorus"
                        >
                          <img alt="" src={Avatar_05} />
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
    </div>
  );
};

export default ServiceView;
