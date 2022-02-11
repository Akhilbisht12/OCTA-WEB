import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { mailSend, messageSend } from "../../../utils/Communication";

const TicketActions = ({ show, setShow, action, session }) => {
  const record = session.patientID;
  const engagementMessage = [
    {
      id: 0,
      message:
        "Engagement message one Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt, nunc a aliquam viverra, arcu elit sagittis dolor, in blandit ex arcu scelerisque nibh. Fusce tortor lectus, suscipit ac faucibus quis, rutrum a enim. Nullam at posuere libero, eget egestas nisl. Quisque sed mattis dui, et dapibus leo. Sed porta mauris tellus, et aliquet elit viverra egestas. Curabitur posuere nisl non tortor aliquet, vestibulum eleifend sapien porta. Pellentesque congue leo molestie enim auctor, sed facilisis eros blandit. Sed eget lectus ut nibh accumsan fringilla. Cras et consequat dolor. Mauris eu egestas quam. Nunc ut feugiat orci, vestibulum luctus enim. Morbi lacinia porttitor metus, ac suscipit nibh ultrices eu. Suspendisse potenti. Aliquam erat volutpat.",
    },
    {
      id: 1,
      message:
        "Engagement message two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt, nunc a aliquam viverra, arcu elit sagittis dolor, in blandit ex arcu scelerisque nibh. Fusce tortor lectus, suscipit ac faucibus quis, rutrum a enim. Nullam at posuere libero, eget egestas nisl. Quisque sed mattis dui, et dapibus leo. Sed porta mauris tellus, et aliquet elit viverra egestas. Curabitur posuere nisl non tortor aliquet, vestibulum eleifend sapien porta. Pellentesque congue leo molestie enim auctor, sed facilisis eros blandit. Sed eget lectus ut nibh accumsan fringilla. Cras et consequat dolor. Mauris eu egestas quam. Nunc ut feugiat orci, vestibulum luctus enim. Morbi lacinia porttitor metus, ac suscipit nibh ultrices eu. Suspendisse potenti. Aliquam erat volutpat.",
    },
    {
      id: 2,
      message:
        "Engagement message three Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt, nunc a aliquam viverra, arcu elit sagittis dolor, in blandit ex arcu scelerisque nibh. Fusce tortor lectus, suscipit ac faucibus quis, rutrum a enim. Nullam at posuere libero, eget egestas nisl. Quisque sed mattis dui, et dapibus leo. Sed porta mauris tellus, et aliquet elit viverra egestas. Curabitur posuere nisl non tortor aliquet, vestibulum eleifend sapien porta. Pellentesque congue leo molestie enim auctor, sed facilisis eros blandit. Sed eget lectus ut nibh accumsan fringilla. Cras et consequat dolor. Mauris eu egestas quam. Nunc ut feugiat orci, vestibulum luctus enim. Morbi lacinia porttitor metus, ac suscipit nibh ultrices eu. Suspendisse potenti. Aliquam erat volutpat.",
    },
  ];
  const [message, setMessage] = useState("");
  const [To, setTo] = useState("All Mediums");
  const [medium, setMedium] = useState("all");

  const handleSendAction = async (e) => {
    e.preventDefault();
    switch (medium) {
      case "all":
        await mailSend(record.email, "subject", message, session._id);
        const all = await messageSend(record.phone, message, session._id);
        alert(all.data.message);
        clearNclose();
        break;
      case "text":
        const text = await messageSend(record.phone, message, session._id);
        alert(text.data.message);
        clearNclose();
        break;
      case "whatsapp":
        const whatsapp = await messageSend(record.phone, message, session._id);
        alert(whatsapp.data.message);
        clearNclose();
        break;
      case "email":
        const mail = await mailSend(
          record.email,
          "subject",
          message,
          session._id
        );
        console.log(mail);
        alert(mail.data.message);
        clearNclose();
      default:
        break;
    }
  };

  const clearNclose = () => {
    setMessage("");
    setTo("All Mediums");
    setMedium("all");
    setShow(false);
  };
  const handleMediumChange = (e) => {
    setMedium(e.target.value);
    switch (e.target.value) {
      case "all":
        setTo("All Mediums");
        break;
      case "text":
        setTo(record.phone);
        break;
      case "whatsapp":
        setTo(record.phone);
        break;
      case "email":
        setTo(record.email);
      default:
        break;
    }
  };

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Send Action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>To</label>
                  <input
                    value={To}
                    onChange={null}
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Template</label>
                  <select
                    className="form-control"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setMessage(engagementMessage[e.target.value].message);
                    }}
                  >
                    <option value={0}>Engagement Message One</option>
                    <option value={1}>Engagement Message two</option>
                    <option value={2}>Engagement Message three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Send To</label>
                  <select
                    value={medium}
                    onChange={handleMediumChange}
                    className="form-control"
                  >
                    <option value="whatsapp">Whatsapp</option>
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                    <option value="all">All</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
              </div>
            </div>
            <div className="submit-section">
              <button
                onClick={handleSendAction}
                className="btn btn-primary submit-btn"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TicketActions;
