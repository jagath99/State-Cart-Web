"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;
var _react = _interopRequireDefault(require("react"));
var _ItemInCart = require("./ItemInCart");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Cart = exports.Cart = function Cart(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    onAdd = _ref.onAdd,
    onSub = _ref.onSub,
    onRemove = _ref.onRemove;
  return /*#__PURE__*/_react["default"].createElement("aside", {
    style: {
      border: "1px solid #ccc",
      padding: 12,
      borderRadius: 6
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Cart"), items.length === 0 ? /*#__PURE__*/_react["default"].createElement("div", null, "Cart is empty") : items.map(function (it) {
    return /*#__PURE__*/_react["default"].createElement(_ItemInCart.ItemInCart, {
      key: it.id,
      item: it,
      onAdd: onAdd,
      onSub: onSub,
      onRemove: onRemove
    });
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: 8,
      fontWeight: 700
    }
  }, "Total: $", items.reduce(function (s, i) {
    return s + i.price * i.qty;
  }, 0)));
};