import React, { useEffect, useRef } from "react";
import "./modal.css";
import Resume from "../../assets/resume_jy.pdf";

const Modal = ({ onRequestClose }) => {
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onRequestClose();
    }
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        onRequestClose();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, onRequestClose]);

  return (
    <div className="modal__backdrop">
      <div className="modal__container" ref={ref}>
        <h3 className="modal__title">John Ryu's Resume</h3>
        <div className="modal__object">
          <iframe
            id="resume_iframe"
            title="Resume"
            src={`${Resume}#toolbar=0&navpanes=0&scrollbar=0`}
          />
        </div>
        <div className="modal__cta">
          <button className="modal__btn" onClick={onRequestClose}>
            Close This Modal
          </button>
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
