import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  const isOpen = true;

  return (
    <div className={`modal-overlay ${isOpen ? `isModalOpen` : null} `}>
      <div className="modal-container">
        <h2>Random Matrix</h2>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
          Randomness of random text
        </p>
        <button className="btn btn-primary">close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
