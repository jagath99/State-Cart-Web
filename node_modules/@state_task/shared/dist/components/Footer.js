"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Footer = exports.Footer = function Footer() {
  return /*#__PURE__*/_react["default"].createElement("footer", {
    style: {
      marginTop: 20,
      padding: 12,
      color: "#666",
      fontSize: 13
    }
  }, "\xA9 ", new Date().getFullYear(), " Add items to cart");
};