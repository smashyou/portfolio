import React from "react";
import "./modal.css";
import Resume from "../../assets/resume_jy.pdf";

const { useState, useEffect } = React;
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
        <h3 id="header-text" className="modal__title">
          John Ryu's Resume
        </h3>
        <div>
          <object
            id="my-object"
            data={Resume}
            aria-labelledby="jyresume"
          ></object>
        </div>

        <button className="btn btn-primary" onClick={onRequestClose}>
          Close this modal
        </button>
        <button className="btn btn-primary" value="download">
          <a href={Resume} download style={{ color: "#1f1f38" }}>
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

const CTA = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  console.log(useState("hello")[1]);
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
      <div className="cta">
        <a
          href={() => false}
          onClick={toggleModal}
          className="btn"
          id="jyresume"
        >
          Show Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </>
  );
};

export default CTA;
