import React from "react";
import Error from "../../../../../assets/404.png";

export default function notFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={Error} alt="404 Not Found" style={{ width: "40%" }} />
      <h5>Page Not Found</h5>
    </div>
  );
}