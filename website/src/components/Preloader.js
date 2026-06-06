import React from 'react';
import BothiveLogo from "../assets/img/bothive-logo.svg";

export default (props) => {
  const { show } = props;

  return (
    <div
      className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "d-flex" : "d-none"}`}
      style={{ textAlign: "center" }}
    >
      {/* LOGO */}
      <img
        className="loader-element mb-3"
        src={BothiveLogo}
        height={80}
        alt="Bothive"
      />

      {/* MAIN TEXT */}
      <h5
        style={{
          fontWeight: 700,
          color: "#0f3460",
          marginBottom: "6px",
          letterSpacing: "0.5px"
        }}
      >
        Bothive Systems
      </h5>

      {/* SUB TEXT */}
      <p
        style={{
          fontSize: "13px",
          color: "#666",
          margin: 0
        }}
      >
        Building Smart Business Solutions
      </p>

      {/* FOOTER TEXT */}
      <small
        style={{
          marginTop: "12px",
          fontSize: "11px",
          color: "#aaa",
          letterSpacing: "0.5px"
        }}
      >
        MuneneApps
      </small>
    </div>
  );
};