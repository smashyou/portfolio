import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./modal.css";
import Resume from "../../assets/resume_jy.pdf";

// Use version-matching worker from CDN (CRA-safe)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js`;

const Modal = ({ onRequestClose }) => {
  const ref = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(800);

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        setContainerWidth(width - 40); // Padding buffer
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onRequestClose();
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") onRequestClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", updateSize);
    };
  }, [onRequestClose]);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="modal__backdrop">
      <div className="modal__container" ref={ref}>
        <h3 className="modal__title">John Ryu's Resume</h3>

        <div className="modal__object">
          <Document
            file={Resume}
            onLoadSuccess={onLoadSuccess}
            loading="Loading resume..."
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth}
              />
            ))}
          </Document>
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
