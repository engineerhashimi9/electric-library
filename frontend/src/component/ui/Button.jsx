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
    primary: "bg-[#17A296] hover:bg-[#0E6760] text-[#FFFFFF] font-bold shadow-sm transition-all",
    secondary: "bg-[#E6F4F3] hover:bg-[#17A296] text-[#0E6760] hover:text-[#FFFFFF] border border-[#D0E8E6] font-semibold transition-all",
    outline: "border border-[#D0E8E6] hover:bg-[#E6F4F3] text-[#0E6760] font-semibold transition-all",
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
