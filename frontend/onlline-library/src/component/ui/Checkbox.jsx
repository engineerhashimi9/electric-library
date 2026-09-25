import React from "react";

export const Checkbox = ({ label, id, className = "", ...props }) => {
  return (
    <div className="flex items-center space-x-2 space-x-reverse text-right">
      <input
        type="checkbox"
        id={id}
        className="h-4 w-4 rounded border-gray-300 text-[#1A362B] focus:ring-[#1A362B] cursor-pointer"
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="text-xs text-[#4A5568] select-none cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
};
