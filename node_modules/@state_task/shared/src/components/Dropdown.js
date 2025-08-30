import React from "react";

export const Dropdown = ({ options = [], value, onChange }) => (
  <select value={value} onChange={e => onChange(e.target.value)} style={{ padding: 6 }}>
    {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
  </select>
);
