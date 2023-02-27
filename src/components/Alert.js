import React, { useEffect } from "react";
import { GlobalContext } from "../context/Context";

const Alert = ({ closeAlert }) => {
  const { state, dispatch } = GlobalContext();
  const { showAlert } = state;

  useEffect(() => {
    closeAlert();
  }, [showAlert]);

  return (
    <div className={`${showAlert ? "alert-box alert-box-show " : "alert-box"}`}>
      This is an alert
    </div>
  );
};

export default Alert;
