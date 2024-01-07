import React, { useState } from "react";

const PlusLayout = () => {
  const [box, setBoxes] = useState([
    {
      username: "",
      email: "",
    },
  ]);
  const handleInsert = () => {
    if (box[box.length - 1].username !== "")
      setBoxes([...box, { username: "", email: "" }]);
  };
  const handleChange = (e, idx, type) => {
    if (type === "username") {
      const tempBoxes = [...box];
      tempBoxes[idx].username = e.target.value;
      setBoxes(tempBoxes);
    } else {
      const tempBoxes = [...box];
      tempBoxes[idx].email = e.target.value;
      setBoxes(tempBoxes);
    }
    // const tempBoxes = [...box];
    // tempBoxes[idx].type = e.target.value;
    // setBoxes(tempBoxes);
  };
  const handleRemove = (idx) => {
    if (arr.length > 1) {
      const tempBoxes = [...box];
      tempBoxes.splice(idx, 1);
      setBoxes(tempBoxes);
    }
  };
  return (
    <div className="layoutPage">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {box.map((curBox, idx, arr) => {
          return (
            <div className="box" key={idx}>
              <div className="field1">
                <label>Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    handleChange(e, idx, "username");
                  }}
                  value={curBox.username}
                />
              </div>
              <div className="field2">
                <label>email</label>
                <input
                  type="text"
                  onChange={(e) => {
                    handleChange(e, idx, "email");
                  }}
                  value={curBox.email}
                />
              </div>
              {arr[arr.length - 1] === curBox ? (
                ""
              ) : (
                <button
                  onClick={() => {
                    handleRemove(idx);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
        <button className="insert" onClick={handleInsert}>
          ➕
        </button>
      </div>
    </div>
  );
};

export default PlusLayout;
