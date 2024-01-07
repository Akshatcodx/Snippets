import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

const Password = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  return (
    <div className="passwordPage">
      <div className="passwords">
        <h3>Password</h3>
        <div className="password1">
          <input type={showPassword.password ? "text" : "password"} />
          <span
            onClick={() => {
              setShowPassword({
                ...showPassword,
                password: !showPassword.password,
              });
            }}
          >
            {showPassword.password ? <FaEye /> : <IoIosEyeOff />}
          </span>
        </div>
        <h3>Confirm Password</h3>

        <div className="password2">
          <input type={showPassword.confirmPassword ? "text" : "password"} />
          <span
            onClick={() => {
              setShowPassword({
                ...showPassword,
                confirmPassword: !showPassword.confirmPassword,
              });
            }}
          >
            {showPassword.confirmPassword ? <FaEye /> : <IoIosEyeOff />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Password;
