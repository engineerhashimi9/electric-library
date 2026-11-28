import React, { useId, useRef } from "react";
import { useTranslation } from "react-i18next";

/**
 * Reusable accessible form input using a flex wrapper for leading/trailing icons
 * and language-aware text direction (`rtl` in Dari, `ltr` in English) so the
 * cursor always moves naturally with typing and never overlaps icons.
 */
export const Input = ({
  label,
  helperText,
  error,
  icon: Icon,
  rightIcon: RightIcon,
  rightElement,
  id,
  type = "text",
  dir,
  className = "",
  ...props
}) => {
  const generatedId = useId();
  const inputRef = useRef(null);
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const inputId = id || generatedId;
  const isDateInput = type === "date";
  const resolvedDir = dir ?? (isRtl ? "rtl" : "ltr");

  // Hide duplicate native date icon without blocking segment cursor navigation
  const datePickerClass = isDateInput
    ? "[&::-webkit-calendar-picker-indicator]:hidden"
    : "";

  const handleIconClick = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
    if (isDateInput && typeof inputRef.current.showPicker === "function") {
      try {
        inputRef.current.showPicker();
      } catch {
        // Fallback silently on browsers without showPicker support
      }
    }
  };

  return (
    <div className="w-full text-start">
      {(label || helperText) && (
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 text-xs">
          {label && (
            <label htmlFor={inputId} className="text-[#0A2E2C] font-bold">
              {label}
            </label>
          )}
          {helperText && (
            <span className="text-[#236D64] font-semibold text-[11px] sm:text-xs">
              {helperText}
            </span>
          )}
        </div>
      )}

      <div
        className={`relative flex items-center gap-2.5 w-full min-h-[44px] bg-[#FFFFFF] border rounded-xl px-3.5 transition-all duration-200 shadow-library-sm ${
          error
            ? "border-red-400 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-200"
            : "border-[#D0E8E6] focus-within:border-[#17A296] focus-within:ring-2 focus-within:ring-[#17A296]/20"
        }`}
      >
        {Icon &&
          (isDateInput ? (
            <button
              type="button"
              onClick={handleIconClick}
              aria-label="Open calendar"
              className="text-[#236D64] hover:text-[#0E6760] flex items-center justify-center shrink-0 transition-colors"
            >
              <Icon size={18} aria-hidden="true" />
            </button>
          ) : (
            <span className="text-[#236D64] pointer-events-none flex items-center justify-center shrink-0">
              <Icon size={18} aria-hidden="true" />
            </span>
          ))}

        <input
          ref={inputRef}
          id={inputId}
          type={type}
          dir={resolvedDir}
          className={`w-full min-w-0 flex-1 bg-transparent py-2.5 text-sm text-start text-[#0A2E2C] placeholder-[#4A6B68]/60 outline-none ${datePickerClass} ${className}`}
          {...props}
        />

        {rightElement ? (
          <div className="flex items-center justify-center shrink-0">
            {rightElement}
          </div>
        ) : (
          RightIcon && (
            <span className="text-[#236D64] flex items-center justify-center pointer-events-none shrink-0">
              <RightIcon size={18} aria-hidden="true" />
            </span>
          )
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};

export default Input;
