import React, { useState } from "react";
import Modal from "./Modal";

const CTA = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
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
          Contact me
        </a>
      </div>
    </>
  );
};

export default CTA;
