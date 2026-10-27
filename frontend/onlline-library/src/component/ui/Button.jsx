import React from "react";

export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center transition-colors rounded-lg px-4 py-2.5 text-sm focus:outline-none";

  const variants = {
    primary: "bg-[#10B981] hover:bg-[#09261C] text-[#FFFFFF] font-bold shadow-sm transition-all",
    secondary: "bg-[#EAF4F0] hover:bg-[#10B981] text-[#09261C] hover:text-[#FFFFFF] border border-[#DDECE6] font-semibold transition-all",
    outline: "border border-[#DDECE6] hover:bg-[#EAF4F0] text-[#09261C] font-semibold transition-all",
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
