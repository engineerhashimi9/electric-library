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
          <span className="text-[#C86D51] font-medium">{helperText}</span>
        )}
        {label && <label className="text-[#374151] font-medium">{label}</label>}
      </div>
      <div className="relative flex items-center">
        {Icon && (
          <span className="absolute left-3 text-gray-400">
            <Icon size={18} />
          </span>
        )}
        <input
          className={`w-full bg-[#F3F4F6] border border-transparent rounded-lg px-3 py-2.5 text-sm text-[#1F2937] placeholder-gray-400 focus:outline-none focus:border-[#1A362B] focus:bg-white transition-all ${Icon ? "pl-10" : ""} ${RightIcon ? "pr-10" : ""} ${className}`}
          {...props}
        />
        {RightIcon && (
          <span className="absolute right-3 text-gray-400">
            <RightIcon size={18} />
          </span>
        )}
      </div>
    </div>
  );
};
