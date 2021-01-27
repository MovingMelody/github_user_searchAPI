import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle as info } from "@fortawesome/free-solid-svg-icons";
const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon={info} /> {alert.msg}
      </div>
    )
  );
};
export default Alert;
