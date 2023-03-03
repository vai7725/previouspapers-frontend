import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const Error = ({ msg }) => {
  const { state, dispatch } = GlobalContext;
  return (
    <section className="error-page">
      <h1>{msg ? msg : "Error 404! Module not found"}</h1>
      <Link
        to="/"
        className="btn error-page-btn"
        onClick={() =>
          dispatch({
            type: "THROW_ERROR",
            payload: {
              throwError: false,
              errorMsg: "",
            },
          })
        }
      >
        Back Home
      </Link>
    </section>
  );
};

export default Error;
