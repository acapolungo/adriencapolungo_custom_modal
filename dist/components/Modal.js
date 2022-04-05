"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _modalModule = _interopRequireDefault(require("./styles/modal.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// header - which one can customize the header
// text - which one can customize the text
// modal - Boolean property which will decide wheather the modal is open or not.
// modalStyle - With which one can customize the styling of visible modal window.
// backdropStyle - With which one can customize the styling of the backdrop of modal window.
// onClose - Event handler with which one can write logic to close the modal.
const Modal = _ref => {
  let {
    header,
    text,
    closeModal,
    headerStyle,
    modalStyle,
    backdropStyle
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: backdropStyle,
    className: "".concat(_modalModule.default.modal__wrap)
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: modalStyle,
    className: _modalModule.default.modal
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: closeModal,
    style: {
      borderRadius: '50%',
      border: 'none',
      width: 25,
      height: 25,
      position: 'absolute',
      top: 0,
      right: 10,
      margin: '0.8rem',
      fontSize: '20px',
      color: '#08d',
      cursor: 'pointer'
    },
    className: _modalModule.default.close__btn
  }, "x"), /*#__PURE__*/_react.default.createElement("div", {
    style: headerStyle
  }, /*#__PURE__*/_react.default.createElement("h2", null, header)), /*#__PURE__*/_react.default.createElement("div", {
    className: "content__text"
  }, /*#__PURE__*/_react.default.createElement("p", null, text)))));
};

var _default = Modal;
exports.default = _default;