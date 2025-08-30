import React from "react";
import { ItemInCart } from "./ItemInCart";

export const Cart = ({ items = [], onAdd, onSub, onRemove }) => (
  <aside style={{ border: "1px solid #ccc", padding: 12, borderRadius: 6 }}>
    <h3>Cart</h3>
    {items.length === 0 ? <div>Cart is empty</div> : items.map(it => (
      <ItemInCart key={it.id} item={it} onAdd={onAdd} onSub={onSub} onRemove={onRemove} />
    ))}
    <div style={{ marginTop: 8, fontWeight: 700 }}>
      Total: ${items.reduce((s, i) => s + i.price * i.qty, 0)}
    </div>
  </aside>
);
