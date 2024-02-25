import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Form_1 = () => {
  const [showPass, setShowPass] = useState({
    password: false,
    confirmPassword: false,
  });
  const schema = yup.object({
    username: yup.string().required("Please enter username"),
    email: yup.string().email().required("please enter your email"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    phone: yup.number().required("please enter phone"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("this field is necessary"),
  });
  const {
    values,
    handleSubmit,
    register,
    watch,
    control,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {};

  const handleChange = (type, value) => {
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
    if (type === "password") {
      if (value === confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "", // Clear the error message
        });
      } else {
        if (confirmPassword?.length > 0) {
          setError("confirmPassword", {
            type: "manual",
            message: "Passwords and confirm password must match",
          });
        }
      }
    }
    if (type === "confirmPassword") {
      if (password === value) {
        setError("confirmPassword", {
          type: "manual",
          message: "", // Clear the error message
        });
      }
    }
  };
  return (
    <div>
      <div className="form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username.message}</span>
          )}
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}

          <label>Phone number</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <input {...field} />}
          />
          {errors.phone && (
            <span style={{ color: "red" }}>{errors.phone.message}</span>
          )}

          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type={showPass.password ? "text" : "password"}
                onChange={(e) => {
                  handleChange("password", e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
          <div
            className="eyw"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowPass({ ...showPass, password: !showPass.password });
            }}
          >
            {showPass.password ? <FaEye /> : <FaEyeSlash />}
          </div>
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}

          <label htmlFor="confirmPassword"> Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type={showPass.confirmPassword ? "text" : "password"}
                onChange={(e) => {
                  handleChange("confirmPassword", e.target.value);
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
          <div
            className="eye"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowPass({
                ...showPass,
                confirmPassword: !showPass.confirmPassword,
              });
            }}
          >
            {showPass.confirmPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
          {errors.confirmPassword && (
            <span style={{ color: "red" }}>
              {errors.confirmPassword.message}
            </span>
          )}

          <div className="role" style={{ display: "flex", flexDirection: "" }}>
            <label>Role</label>
            <input type="radio" name="role" />
            Teacher
            <input type="radio" name="role" />
            student
          </div>
          <label>Remember me</label>
          <input type="checkbox" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form_1;
