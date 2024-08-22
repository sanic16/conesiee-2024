import React from "react";
import classes from "./formInput.module.css";

interface FormInputProps {
  type:
    | "text"
    | "email"
    | "password"
    | "textarea"
    | "select"
    | "file"
    | "checkbox"
    | "radio";
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) =>
    | void
    | ((e: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | ((e: React.ChangeEvent<HTMLSelectElement>) => void);
  required?: boolean;
  disabled?: boolean;
  name: string;
  id: string;
  options?: string[]; // Required for select or radio buttons
  multiple?: boolean;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  required,
  disabled,
  name,
  id,
  options,
  multiple,
  error,
  helperText,
  icon,
}) => {
  return (
    <div
      className={`${classes.inputField__wrapper} ${error ? classes.error : ""}`}
    >
      <label htmlFor={id} className={classes.label}>
        {label} {required && <span className={classes.required}>*</span>}
      </label>

      <div className={classes.inputField__container}>
        {icon && <div className={classes.icon}>{icon}</div>}

        {/* Render the appropriate input type */}
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={
              onChange as unknown as (
                e: React.ChangeEvent<HTMLTextAreaElement>
              ) => void
            }
            required={required}
            disabled={disabled}
            className={`${classes.inputField} ${classes.textarea}`}
          />
        ) : type === "select" && options ? (
          <select
            id={id}
            name={name}
            value={value}
            onChange={
              onChange as unknown as (
                e: React.ChangeEvent<HTMLSelectElement>
              ) => void
            }
            required={required}
            disabled={disabled}
            className={classes.inputField}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : type === "radio" && options ? (
          options.map((option) => (
            <div key={option} className={classes.radioOption}>
              <input
                id={`${id}-${option}`} // unique id for each radio option
                name={name}
                type="radio"
                value={option}
                // checked={value === option} // check if this radio is selected
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={classes.radioInput}
              />
              <label htmlFor={`${id}-${option}`} className={classes.radioLabel}>
                {option}
              </label>
            </div>
          ))
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={classes.inputField}
          />
        )}
      </div>

      {/* Helper text or error message */}
      {helperText && !error && (
        <p className={classes.helperText}>{helperText}</p>
      )}
      {error && <p className={classes.error__message}>{error}</p>}
    </div>
  );
};

export default FormInput;
