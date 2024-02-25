import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const SkillModal = ({
  toggleSkillModal,
  setSkills,
  skills,
  showEdit,
  editData,
  index,
}) => {
  useEffect(() => {
    console.log(editData?.index);
    if (showEdit) {
      console.log(editData);
      Object.entries(editData).map((curValue) =>
        setValue(curValue[0], curValue[1])
      );
    }
  }, []);
  const schema = yup.object({
    skillName: yup.string().required("This field is required"),
    skillDescription: yup.string().required("this field is required"),
    skillLevel: yup.string().required("At least one field must be selected"),
  });
  const {
    values,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    if (showEdit) {
      const tempSkills = [...skills];
      tempSkills[index] = data;
      setSkills(tempSkills);
      toggleSkillModal();
    } else {
      setSkills([...skills, { ...data }]);
      toggleSkillModal();
    }
  };
  console.log(editData, "editData");
  return (
    <div>
      <Modal show={true} onHide={toggleSkillModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>{showEdit ? "Edit Skill" : "Add Skill"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Skill Name</label>
            <input
              type="text"
              placeholder="Add skill name"
              {...register("skillName")}
            />
            {errors.skillName && (
              <span style={{ color: "red" }}>{errors.skillName.message}</span>
            )}
            <br />
            <label>Skill Description</label>
            <input
              type="text"
              placeholder="Add skill description"
              {...register("skillDescription")}
            />
            {errors.skillDescription && (
              <span style={{ color: "red" }}>
                {errors.skillDescription.message}
              </span>
            )}

            <div className="skillLevel">
              <p>Skill </p>
              <input
                type="radio"
                value="Begineer"
                name="level"
                {...register("skillLevel")}
              />
              Begineer
              <input
                type="radio"
                value="Intermediate"
                name="level"
                {...register("skillLevel")}
              />
              Intermediate
              <input
                type="radio"
                value="Expert"
                name="level"
                {...register("skillLevel")}
              />
              Expert
            </div>
            {errors.skillLevel && (
              <span style={{ color: "red" }}>{errors.skillLevel.message}</span>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              {showEdit ? "Update skill" : "Add Skill"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default SkillModal;
