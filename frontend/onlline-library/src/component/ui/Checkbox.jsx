import React from "react";

export const Checkbox = ({ label, id, className = "", ...props }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="h-4 w-4 rounded border-[#D0E8E6] bg-[#FFFFFF] text-[#17A296] accent-[#17A296] focus:ring-[#17A296] cursor-pointer"
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="text-xs text-[#0A2E2C] font-medium select-none cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
};
