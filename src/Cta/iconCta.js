import React from "react";

export default function IconCta({ Icon, onClick = (e) => {} }) {
  return (
    <div className="icon-cta" role="button" onClick={onClick}>
      <Icon />
    </div>
  );
}