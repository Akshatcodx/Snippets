import React, { useState } from "react";
import { JOB_EXPERIENCE, JOB_LOCATION, JOB_TYPE } from "./Dummydata";

const Objects = () => {
  const [preferences, setPreferences] = useState({
    jobType: [],
    jobLocation: [],
    jobExperience: [],
  });
  const handelPreferences = (e, value, field, idx) => {
    console.log(e.target.checked);
    console.log(field);
    if (e.target.checked) {
      setPreferences({
        ...preferences,
        [field]: [...preferences[field], value],
      });
    } else {
      const temp = [...preferences[field]];
      temp.splice(idx, 1);
      setPreferences({
        ...preferences,
        [field]: [...temp],
      });
    }
  };
  console.log(preferences);
  return (
    <div>
      <div className="jobType">
        <h1>jobType</h1>
        {JOB_TYPE?.map((curJobType, idx) => {
          return (
            <div>
              <span> {curJobType}</span>
              <input
                type="checkbox"
                onClick={(e) => {
                  handelPreferences(e, curJobType, "jobType", idx);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="location">
        <h1>location</h1>
        {JOB_LOCATION?.map((curJobLocation, idx) => {
          return (
            <div>
              <span> {curJobLocation}</span>
              <input
                type="checkbox"
                onClick={(e) => {
                  handelPreferences(e, curJobLocation, "jobLocation", idx);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="experience">
        <h1>experience</h1>
        {JOB_EXPERIENCE?.map((curJobExperience, idx) => {
          return (
            <div>
              <span> {curJobExperience}</span>
              <input
                type="checkbox"
                onClick={(e) => {
                  handelPreferences(e, curJobExperience, "jobLocation", idx);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Objects;
