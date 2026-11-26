import React, { useId } from "react";

export const Checkbox = ({ label, id, className = "", ...props }) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <label htmlFor={checkboxId} className={`checkbox-container ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        style={{
          width: "18px",
          height: "18px",
          borderRadius: "4px",
          accentColor: "var(--primary-light)",
          cursor: "pointer",
        }}
        {...props}
      />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;
