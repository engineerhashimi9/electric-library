import React from "react";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 select-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17A296] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs min-h-[36px]",
    md: "px-4 py-2.5 text-sm min-h-[42px]",
    lg: "px-6 py-3 text-base min-h-[48px]",
  };

  const variants = {
    primary:
      "bg-[#17A296] hover:bg-[#0E6760] text-[#FFFFFF] shadow-library-sm hover:shadow-library",
    secondary:
      "bg-[#E6F4F3] hover:bg-[#D0E8E6] text-[#0E6760] border border-[#D0E8E6] shadow-library-sm",
    outline:
      "bg-transparent border border-[#D0E8E6] hover:border-[#17A296] hover:bg-[#E6F4F3] text-[#0E6760]",
    ghost:
      "bg-transparent hover:bg-[#E6F4F3] text-[#0E6760]",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
