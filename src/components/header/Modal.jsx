import React, { useEffect, useRef } from "react";
import "./modal.css";
import Resume from "../../assets/resume_jy.pdf";

// Call To Action buttons
const Modal = ({ onRequestClose }) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      // Close the modal when clicked outside of the modal
      onRequestClose();
    }
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", handleClickOutside);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <h3 className="modal__title">John Ryu's Resume</h3>
        <div className="modal__object">
          <iframe
            id="resume_iframe"
            title="Resume"
            src={`${Resume}#view=FitH`}
            frameBorder="0"
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>
        <div className="modal__cta">
          <a
            ref={ref}
            href="#home"
            className="modal__btn"
            onClick={onRequestClose}
          >
            Close this modal
          </a>
          <a href={Resume} className="modal__btn" download>
            Download Resume
          </a>
        </div>
        <div className="modal__exit">
          <small>Press 'ESC' to close</small>
        </div>
      </div>
    </div>
  );
};

export default Modal;
