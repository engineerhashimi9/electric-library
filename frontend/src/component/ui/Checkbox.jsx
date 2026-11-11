import React, { useId } from "react";

export const Checkbox = ({ label, id, className = "", ...props }) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className="h-4.5 w-4.5 rounded border-[#D0E8E6] bg-[#FFFFFF] text-[#17A296] accent-[#17A296] focus:ring-2 focus:ring-[#17A296]/30 cursor-pointer transition-colors"
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className="text-xs sm:text-sm text-[#0A2E2C] font-medium select-none cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
