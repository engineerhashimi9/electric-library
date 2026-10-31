import React from "react";

export const Input = ({
  label,
  helperText,
  icon: Icon,
  rightIcon: RightIcon,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full text-right">
      <div className="flex justify-between items-center mb-1.5 text-xs">
        {helperText && (
          <span className="text-[#4A6B68] font-medium">{helperText}</span>
        )}
        {label && <label className="text-[#0A2E2C] font-semibold">{label}</label>}
      </div>
      <div className="relative flex items-center">
        {Icon && (
          <span className="absolute left-3 text-[#236D64]">
            <Icon size={18} />
          </span>
        )}
        <input
          className={`w-full bg-[#FFFFFF] border border-[#D0E8E6] rounded-lg px-3 py-2.5 text-sm text-[#0A2E2C] placeholder-[#4A6B68]/60 focus:outline-none focus:border-[#17A296] focus:ring-1 focus:ring-[#17A296] transition-all ${Icon ? "pl-10" : ""} ${RightIcon ? "pr-10" : ""} ${className}`}
          {...props}
        />
        {RightIcon && (
          <span className="absolute right-3 text-[#236D64]">
            <RightIcon size={18} />
          </span>
        )}
      </div>
    </div>
  );
};
