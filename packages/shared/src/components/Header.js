import React from "react";

export const Header = ({ title = "Buy Items" ,children}) => (
  <header style={{ background: "#111", color: "#fff", padding: 12, borderRadius: 6 }}>
    <h1 style={{ margin: 0 }}>{title}</h1>
    {children}
  </header>
);
