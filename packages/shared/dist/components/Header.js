"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Header = exports.Header = function Header(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Buy Items" : _ref$title,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("header", {
    style: {
      background: "#111",
      color: "#fff",
      padding: 12,
      borderRadius: 6
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      margin: 0
    }
  }, title), children);
};