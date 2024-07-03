import React from "react";
import "../styles/pagenotfound.scss";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handelBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className="mainpage">
        <button style={{ marginTop: "200px" }} onClick={handelBack}>
          Back to Home
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
