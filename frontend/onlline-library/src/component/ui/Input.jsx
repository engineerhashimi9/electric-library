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
          <span className="text-[#52665E] font-medium">{helperText}</span>
        )}
        {label && <label className="text-[#111C18] font-semibold">{label}</label>}
      </div>
      <div className="relative flex items-center">
        {Icon && (
          <span className="absolute left-3 text-[#6B9080]">
            <Icon size={18} />
          </span>
        )}
        <input
          className={`w-full bg-[#FFFFFF] border border-[#DDECE6] rounded-lg px-3 py-2.5 text-sm text-[#111C18] placeholder-[#52665E]/60 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all ${Icon ? "pl-10" : ""} ${RightIcon ? "pr-10" : ""} ${className}`}
          {...props}
        />
        {RightIcon && (
          <span className="absolute right-3 text-[#6B9080]">
            <RightIcon size={18} />
          </span>
        )}
      </div>
    </div>
  );
};
