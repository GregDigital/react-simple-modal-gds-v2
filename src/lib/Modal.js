import React from "react";
import "./Modal.css";
export default function Modal(props) {
  let { content, handleChange, value } = props;

  const closeModal = (_) => {
    handleChange(false);
  };

  return (
    <>
      {value && (
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={closeModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">{content}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
