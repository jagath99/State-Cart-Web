import React from "react";

export const Checkbox = ({ label, checked, onChange }) => (
    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
);
