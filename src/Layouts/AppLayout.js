
import React from "react";

export default function AppLayout({ children }) {
  return (
    <div id="app-container" className="app-container">
      {children}
    </div>
  );
}