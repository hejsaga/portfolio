import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const LoadingPage = () => {
  return (
    <div className="loading">
      <PulseLoader className="spinner" />
    </div>
  );
};

export default LoadingPage;
