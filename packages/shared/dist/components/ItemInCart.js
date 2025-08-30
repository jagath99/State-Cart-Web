"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemInCart = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ItemInCart = exports.ItemInCart = function ItemInCart(_ref) {
  var item = _ref.item,
    onAdd = _ref.onAdd,
    onSub = _ref.onSub,
    onRemove = _ref.onRemove;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: 8,
      borderBottom: "1px solid #eee"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontWeight: 600
    }
  }, item.name), /*#__PURE__*/_react["default"].createElement("div", null, "$", item.price, " \xD7 ", item.qty)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      flexdirection: "row",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return onAdd(item.id);
    }
  }, "+"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return onSub(item.id);
    }
  }, "-"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return onRemove(item.id);
    }
  }, "X")));
};