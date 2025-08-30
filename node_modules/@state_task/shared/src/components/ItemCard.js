import React from "react";
import { Button } from "./Button";

export const ItemCard = ({ item, onAdd }) => (
  <div style={{ border: "1px solid #ddd", padding: 12, margin: 8, borderRadius: 6 }}>
    <div style={{ fontWeight: 600 }}>{item.name}</div>
    <div style={{ marginBottom: 8 }}>${item.price}</div>
    <Button onClick={() => onAdd(item)}>Add to Cart</Button>
  </div>
);
