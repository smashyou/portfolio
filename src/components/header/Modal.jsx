import React, { useEffect } from "react";
import "./modal.css";
import Resume from "../../assets/resume_jy.pdf";

// Call To Action Component
const Modal = ({ onRequestClose }) => {
  // Use useEffect to add an event listener to the document
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

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <h3 className="modal__title">John Ryu's Resume</h3>
        <div className="modal__object">
          {/* <object
            data={Resume}
            type="application/pdf"
            aria-labelledby="jyresume"
            width={"100%"}
            height={"100%"}
          ></object> */}
          <iframe title="jyresume" src={Resume} frameborder="0"></iframe>
        </div>

        <div className="modal__cta">
          <a href="#home" className="modal__btn" onClick={onRequestClose}>
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
