"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("./Button");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ItemCard = exports.ItemCard = function ItemCard(_ref) {
  var item = _ref.item,
    onAdd = _ref.onAdd;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: "1px solid #ddd",
      padding: 12,
      margin: 8,
      borderRadius: 6
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: 600
    }
  }, item.name), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: 8
    }
  }, "$", item.price), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return onAdd(item);
    }
  }, "Add to Cart"));
};