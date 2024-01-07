import React, { useState } from "react";

const Objects2 = () => {
  const [jobPreferences, setJobPreferences] = useState({
    job_alert_titles: [
      {
        title: "",
      },
    ],
    job_alert_location: [
      {
        location: "",
      },
    ],
  });

  const handleInsertTitle = () => {
    setJobPreferences({
      ...jobPreferences,
      job_alert_titles: [...jobPreferences.job_alert_titles, { title: "" }],
    });
  };

  const handleJobTitleChange = (idx, e) => {
    const temp = [...jobPreferences.job_alert_titles];
    temp[idx].title = e.target.value;
    setJobPreferences({
      ...jobPreferences,
      job_alert_titles: [...temp],
    });
  };

  console.log(jobPreferences, "///");
  const handleJobTitleRemove = (idx) => {
    const temp = [...jobPreferences.job_alert_titles];
    temp.splice(idx, 1);
    setJobPreferences({
      ...jobPreferences,
      job_alert_titles: [...temp],
    });
  };

  //   wejnlewmce
  const handleJobLocationChange = (idx, e) => {
    const temp = [...jobPreferences.job_alert_location];
    temp[idx].location = e.target.value;
    setJobPreferences({
      ...jobPreferences,
      job_alert_location: [...temp],
    });
  };
  const handleJobLocationRemove = (idx) => {
    const temp = [...jobPreferences.job_alert_location];
    temp.splice(idx, 1);
    setJobPreferences({
      ...jobPreferences,
      job_alert_location: [...temp],
    });
  };
  const handleInsertLocation = () => {
    setJobPreferences({
      ...jobPreferences,
      job_alert_location: [
        ...jobPreferences.job_alert_location,
        { location: "" },
      ],
    });
  };

  return (
    <div>
      <div className="jobTitles">
        Add job Titles
        <div className="inputs">
          {jobPreferences?.job_alert_titles?.map((curElem, idx, arr) => (
            <>
              <div className="input" key={idx}>
                <input
                  type="text"
                  id="title"
                  value={curElem.title}
                  onChange={(e) => {
                    handleJobTitleChange(idx, e);
                  }}
                />
              </div>
              {arr[arr.length - 1] === curElem ? (
                ""
              ) : (
                <button
                  onClick={() => {
                    handleJobTitleRemove(idx);
                  }}
                >
                  Remove
                </button>
              )}
            </>
          ))}
        </div>
        <button onClick={handleInsertTitle}>Add Another Title</button>
      </div>

      <div className="jobLocation">
        Add job Location
        <div className="inputs">
          {jobPreferences?.job_alert_location?.map((curElem, idx, arr) => (
            <>
              <div className="input" key={idx}>
                <input
                  type="text"
                  id="title"
                  value={curElem.location}
                  onChange={(e) => {
                    handleJobLocationChange(idx, e);
                  }}
                />
              </div>
              {arr[arr.length - 1] === curElem ? (
                ""
              ) : (
                <button
                  onClick={() => {
                    handleJobLocationRemove(idx);
                  }}
                >
                  Remove
                </button>
              )}
            </>
          ))}
        </div>
        <button onClick={handleInsertLocation}> Add Another Title</button>
      </div>
    </div>
  );
};

export default Objects2;
