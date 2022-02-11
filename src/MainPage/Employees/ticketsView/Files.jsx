import axios from "axios";
import React, { useState } from "react";
import { SERVER_URL } from "../../../config/variables";
import FileView from "../tickets/FileView";

const Files = ({ record, render, setRender }) => {
  const files = record.files;
  const [file, setFile] = useState({});
  const [fileShow, setFileShow] = useState(false);
  const [upload, setUpload] = useState({
    fileName: "",
    fileNote: "",
    file: null,
  });
  const handleFileUpload = async (e) => {
    if (!(upload.fileName && upload.fileNote && upload.file)) {
      alert("fill all fields");
      return;
    }
    e.preventDefault();
    try {
      const fileSplit = upload.file.name.split(".");
      const fileType = fileSplit[fileSplit.length - 1];
      console.log(upload.file);
      const formdata = new FormData();
      formdata.append("sessionID", record._id);
      formdata.append("fileName", upload.fileName);
      formdata.append("fileNote", upload.fileNote);
      formdata.append("fileType", fileType);
      //   formdata.append("file", {
      //     uri: upload.file,
      //     name: `${record.data._id + "on" + Date.now()}`,
      //     type: fileType,
      //   });
      formdata.append("file", upload.file);
      const fileupload = await axios.post(
        `${SERVER_URL}/api/v1/patient/fileUpload`,
        formdata
      );
      console.log(fileupload);
      alert(fileupload.data.message);
      console.log(upload);
      setRender(!render);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div className="card mb-0">
      <div className="card-body">
        <h5 className="card-title m-b-20">Uploaded files</h5>
        <ul className="files-list">
          {files.map((item) => {
            return (
              <li key={item._id}>
                <div className="files-cont">
                  <div className="file-type">
                    <span className="files-icon">
                      <i className="fa fa-file-pdf-o" />
                    </span>
                  </div>
                  <div className="files-info">
                    <span className="file-name text-ellipsis">
                      <a href="#">{item.fileName}</a>
                    </span>
                    <span className="file-author">
                      <a href="#">OCTA Bot</a>
                    </span>{" "}
                    <span className="file-date">{item.fileNotes}</span>
                    <div className="d-block">
                      <div
                        className="badge bg-primary"
                        onClick={() => {
                          setFile(item);
                          setFileShow(true);
                        }}
                      >
                        View
                      </div>
                    </div>
                  </div>
                  <ul className="files-action">
                    <li className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="dropdown-toggle btn btn-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_horiz</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
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
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div>
          <h5 className="fs-5 m-b-20">Upload new files</h5>
          <div className="row">
            <div className="col-6">
              <input
                value={upload.fileName}
                onChange={(e) =>
                  setUpload({ ...upload, fileName: e.target.value })
                }
                placeholder="File Name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-6">
              <input
                value={upload.fileNote}
                onChange={(e) =>
                  setUpload({ ...upload, fileNote: e.target.value })
                }
                placeholder="File Note"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-12 my-2">
              <input
                onChange={(e) =>
                  setUpload({ ...upload, file: e.target.files[0] })
                }
                type="file"
                accept=".jpg,.png,.jpeg,.pdf,.doc"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <div onClick={handleFileUpload} className="btn btn-primary">
                Upload
              </div>
            </div>
          </div>
        </div>
      </div>
      <FileView file={file} fileShow={fileShow} setFileShow={setFileShow} />
    </div>
  );
};

export default Files;
