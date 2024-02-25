import axios from "axios";
import React, { useRef, useState } from "react";

const One = () => {
  const [fileError, setFileError] = useState(false);
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const videoRef = useRef();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.name.match(/\.(png|jpeg|jpg)$/)) {
      setFile(file);
      setFileError(false);
      convertFileToUrl(file);
      console.log(url, "handlefile");
    } else {
      setFileError(true);
    }
  };
  const convertFileToUrl = (File) => {
    console.log(File, "filr");
    const reader = new FileReader();
    reader.readAsDataURL(File);
    reader.onload = () => {
      console.log(reader.result, "inddijkds");
      setUrl(reader.result);
    };
  };
  const convertUrlToFile = (URL) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "image", { type: blob.type });
        console.log(file, "file");
      });
  };
  if (url) {
    convertUrlToFile(url);
  }
  return (
    <div>
      <div className="fileButton btn">
        <label htmlFor="file">Attach File</label>
        <input
          id="file"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e)}
        />
        {file && <p>{file.name}</p>}
        {fileError && <p style={{ color: "error" }}>"Invalid file document"</p>}
      </div>
      {url && <img src={url} />}
      <div className="video">
        <video ref={videoRef} controls width="500px">
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          ></source>
        </video>
        <button
          onClick={() => {
            videoRef.current.play();
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            videoRef.current.pause();
          }}
        >
          pause
        </button>
      </div>
    </div>
  );
};

export default One;
