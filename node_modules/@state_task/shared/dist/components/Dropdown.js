"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Dropdown = exports.Dropdown = function Dropdown(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("select", {
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    style: {
      padding: 6
    }
  }, options.map(function (opt, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: opt
    }, opt);
  }));
};