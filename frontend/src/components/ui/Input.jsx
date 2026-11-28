import React, { useId } from "react";

export const Input = ({
  label,
  helperText,
  error,
  icon: Icon,
  rightIcon: RightIcon,
  rightElement,
  id,
  className = "",
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const inputClasses = [
    "input-field",
    Icon ? "has-left-icon" : "",
    RightIcon || rightElement ? "has-right-icon" : "",
    error ? "has-error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-group text-start">
      {(label || helperText) && (
        <div className="input-label-row">
          {label && (
            <label htmlFor={inputId} className="input-label">
              {label}
            </label>
          )}
          {helperText && (
            <span className="input-helper-link">{helperText}</span>
          )}
        </div>
      )}
      <div className="input-wrapper">
        {Icon && (
          <span className="input-icon-left" aria-hidden="true">
            <Icon size={18} />
          </span>
        )}
        <input id={inputId} className={inputClasses} {...props} />
        {rightElement ? (
          <div className="input-icon-right">{rightElement}</div>
        ) : (
          RightIcon && (
            <span className="input-icon-right" aria-hidden="true">
              <RightIcon size={18} />
            </span>
          )
        )}
      </div>
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
};

export default Input;
