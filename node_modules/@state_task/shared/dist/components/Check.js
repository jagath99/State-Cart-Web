"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Checkbox = exports.Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
    checked = _ref.checked,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }), label);
};