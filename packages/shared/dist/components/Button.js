"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = exports.Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    style: style
  }, children);
};