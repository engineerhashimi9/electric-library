import React from "react";

export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors rounded-lg px-4 py-2.5 text-sm focus:outline-none";

  const variants = {
    primary: "bg-[#1A362B] hover:bg-[#132820] text-white shadow-sm",
    secondary: "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#1F2937]",
    outline: "border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#374151]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
