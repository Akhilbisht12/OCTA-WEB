import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import { SERVER_URL } from "../../../config/variables";

const FileView = ({ file, fileShow, setFileShow }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const showFile = () => {
    switch (file.fileType) {
      case "jpg":
        return (
          <img
            className="w-100"
            style={{ objectFit: "contain" }}
            src={`${SERVER_URL}/api/v1/patient/getFile/${file.url}`}
          />
        );
      case "png":
        return (
          <img
            className="w-100"
            style={{ objectFit: "contain" }}
            src={`${SERVER_URL}/api/v1/patient/getFile/${file.url}`}
          />
        );
      case "jpeg":
        return (
          <img
            className="w-100"
            style={{ objectFit: "contain" }}
            src={`${SERVER_URL}/api/v1/patient/getFile/${file.url}`}
          />
        );
      case "pdf":
        return (
          <embed
            className="w-100"
            style={{ height: "60vh" }}
            src={`${SERVER_URL}/api/v1/patient/getFile/${file.url}`}
          />
        );
      default:
        break;
    }
  };
  return (
    <Modal size="lg" show={fileShow} onHide={() => setFileShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{file.fileName}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "80vh", overflowY: "scroll" }}>
        <div className="text-center">{file.fileNotes}</div>
        {showFile()}
      </Modal.Body>
    </Modal>
  );
};

export default FileView;
