import React, { useState } from "react";
import SkillModal from "./SkillModal";

const Func4 = () => {
  const [skills, setSkills] = useState([]);
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [editData, setEditData] = useState({ show: false, data: null });
  const toggleSkillModal = () => {
    setEditData({ show: false, data: null });
    setShowSkillModal(!showSkillModal);
  };
  const handleEdit = (data, idx) => {
    setEditData({ show: true, data, index: idx });
    setShowSkillModal(true);
  };
  console.log(editData, "edit");
  return (
    <>
      <div>
        <div
          className="addSkill"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={toggleSkillModal}>Add skill</button>
        </div>
        <div className="listing">
          {skills.length > 0 &&
            skills.map((curSkill, idx) => (
              <div
                className="skill"
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <p>SkillName :{curSkill.skillName}</p>
                <p>SkillDescription:{curSkill.skillDescription}</p>
                <p>skillLevel:{curSkill.skillLevel}</p>
                <button
                  onClick={() => {
                    handleEdit(curSkill, idx);
                  }}
                >
                  Edit
                </button>
              </div>
            ))}
        </div>
      </div>
      {showSkillModal && (
        <SkillModal
          toggleSkillModal={toggleSkillModal}
          setSkills={setSkills}
          skills={skills}
          showEdit={editData.show}
          editData={editData.data}
          index={editData.index}
        />
        // code can be reduced by only passing editData rather than passing index,data,show seprately but had left like this so that you can understand easily
      )}
    </>
  );
};

export default Func4;
