import React from 'react';
import BothiveLogo from "../assets/img/bothive-logo.svg";

export default (props) => {
  const { show } = props;
  return (
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "" : "show"}`}>
      <img className="loader-element" src={BothiveLogo} height={80} alt="BotHive" />
    </div>
  );
};
