import React, { useEffect } from "react";

export default function TextInput({ labelText, inpID, size, icon }) {
  const eeventFocusIn = (e) => {
    e.target.parentNode.parentNode.classList.add("focus");
    e.target.parentNode.parentNode.classList.add("active");
  };

  const eventFocusOut = (e) => {
    e.target.parentNode.parentNode.classList.remove("focus");
    if (!e.target.value) {
      e.target.parentNode.parentNode.classList.remove("active");
    }
  };

  const bindEvents = (e) => {
    const floatField = e.querySelector("input");
    floatField.addEventListener("focusin", eeventFocusIn);
    floatField.addEventListener("focusout", eventFocusOut);
  };

  useEffect(() => {
    const textInp = document.querySelectorAll(".input-container");
    textInp.forEach((e) => {
      bindEvents(e);
    });
  });

  return (
    <div className={`input-container ${size}`}>
      <div className="icon-holder">{icon}</div>
      <div className="input-holder">
        <label>{labelText}</label>
        <input tabIndex="0" type="text" id={inpID}></input>
      </div>
    </div>
  );
}
