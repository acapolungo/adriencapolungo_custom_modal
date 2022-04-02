"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _modalModule = _interopRequireDefault(require("./styles/modal.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Modal = _ref => {
  let {
    zindex = 'z-10',
    header,
    text,
    modal,
    onClose,
    modalStyle,
    backdropStyle
  } = _ref;
  const modalRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (modal) {
      modalRef.current.classList.add(_modalModule.default.visible);
    } else {
      modalRef.current.classList.remove(_modalModule.default.visible);
    }
  }, [modal]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: modalRef,
    style: backdropStyle,
    className: "".concat(zindex, " ").concat(_modalModule.default.modal__wrap)
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    style: {
      borderRadius: '50%',
      border: 'none',
      width: 40,
      height: 40,
      position: 'absolute',
      top: 20,
      right: 30,
      margin: '1rem',
      fontSize: '20px'
    },
    className: _modalModule.default.close__btn
  }, "x"), /*#__PURE__*/_react.default.createElement("div", {
    style: modalStyle,
    className: _modalModule.default.modal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content__header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, header)), /*#__PURE__*/_react.default.createElement("div", {
    className: "content__text"
  }, /*#__PURE__*/_react.default.createElement("p", null, text)))));
};

var _default = Modal;
exports.default = _default;