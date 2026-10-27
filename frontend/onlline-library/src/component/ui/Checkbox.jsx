import React from "react";

export const Checkbox = ({ label, id, className = "", ...props }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="h-4 w-4 rounded border-[#DDECE6] bg-[#FFFFFF] text-[#10B981] accent-[#10B981] focus:ring-[#10B981] cursor-pointer"
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="text-xs text-[#111C18] font-medium select-none cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
};
