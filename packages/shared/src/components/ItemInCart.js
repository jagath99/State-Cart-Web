import React from "react";

export const ItemInCart = ({ item, onAdd, onSub, onRemove }) => (
  <div style={{ display: "flex", justifyContent: "space-between", padding: 8, borderBottom: "1px solid #eee" }}>
    <div>
      <div style={{ fontWeight: 600 }}>{item.name}</div>
      <div>${item.price} × {item.qty}</div>
    </div>
    <div style={{ display: "flex",flexdirection:"row", gap: 6, alignItems: "center" }}>
      <button onClick={() => onAdd(item.id)}>+</button>
      <button onClick={() => onSub(item.id)}>-</button>
      <button onClick={() => onRemove(item.id)}>X</button>
    </div>
  </div>
);
