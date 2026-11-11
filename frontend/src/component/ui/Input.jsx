import React, { useId } from "react";

export const Input = ({
  label,
  helperText,
  error,
  icon: Icon,
  rightIcon: RightIcon,
  id,
  className = "",
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="w-full text-start">
      {(label || helperText) && (
        <div className="flex justify-between items-center mb-1.5 text-xs">
          {label && (
            <label htmlFor={inputId} className="text-[#0A2E2C] font-bold">
              {label}
            </label>
          )}
          {helperText && (
            <span className="text-[#4A6B68] font-medium text-[11px] sm:text-xs">
              {helperText}
            </span>
          )}
        </div>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <span className="absolute left-3.5 rtl:left-auto rtl:right-3.5 text-[#236D64] pointer-events-none flex items-center justify-center">
            <Icon size={18} />
          </span>
        )}
        <input
          id={inputId}
          className={`w-full bg-[#FFFFFF] border rounded-xl px-3.5 py-2.5 text-sm text-[#0A2E2C] placeholder-[#4A6B68]/60 transition-all duration-200 outline-none shadow-library-sm ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-[#D0E8E6] focus:border-[#17A296] focus:ring-2 focus:ring-[#17A296]/20"
          } ${Icon ? "pl-11 rtl:pl-3.5 rtl:pr-11" : ""} ${
            RightIcon ? "pr-11 rtl:pr-3.5 rtl:pl-11" : ""
          } ${className}`}
          {...props}
        />
        {RightIcon && (
          <span className="absolute right-3.5 rtl:right-auto rtl:left-3.5 text-[#236D64] flex items-center justify-center">
            <RightIcon size={18} />
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};

export default Input;
