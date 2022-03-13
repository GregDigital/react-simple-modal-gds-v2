"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(props) {
  let {
    content,
    handleChange,
    value
  } = props;

  const closeModal = _ => {
    handleChange(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, value && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button",
    onClick: closeModal
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, content)))));
}