import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { MODAL_CLOSE } from "../../config/Actions";

const Modal = ({ isOpen, name, text, close }) => {
  return (
    <div className={`modal-overlay ${isOpen ? `isModalOpen` : null} `}>
      <div className="modal-container">
        <h2>{name}</h2>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>{text}</p>
        <button onClick={close} className="btn btn-primary">
          close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

const mapStateToProps = ({ modalState: { isOpen, name, text } }) => {
  return { isOpen, name, text };
};

function mapDispatchToProps(dispatch) {
  return { close: () => dispatch({ type: MODAL_CLOSE }) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
