import React from "react";

const CommonButton = ({
  text,
  isDisabled,
  onClickCallback,
  loader,
  children,
}) => {
  return (
    <button disabled={isDisabled} onClick={onClickCallback}>
      {text}
      {children}
    </button>
  );
};

export default CommonButton;
