import React, { useState } from "react";
import "./FileSubmit.css";

const FileSubmit = () => {
  const [file, setFile] = useState(null);
  const [fileMsg, setFileMsg] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.name.match(/\.(pdf|doc|docx)$/)) {
      setFile(file);
      setFileMsg(file.name);
    } else {
      setFileMsg("invalid document type");
    }
  };
  return (
    <div className="registerPage">
      <div className="registerContainer">
        <h1>Register</h1>
        <form className="registerForm" encType="multipart/form-data">
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" />
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
          {/* file submit button */}
          <div className="fileButton btn">
            <label htmlFor="file">Attach File</label>
            <input
              id="file"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          {fileMsg && <p>{fileMsg}</p>}
          {/* file submit button */}
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileSubmit;
