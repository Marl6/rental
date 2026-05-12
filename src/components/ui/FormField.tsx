import type { FC } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export const FormField: FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder = " ",
  className = "",
}) => {
  return (
    <div className={`relative group ${className}`}>
      <input
        className="peer w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary px-0 py-2 transition-colors"
        placeholder={placeholder}
        id={id}
        type={type}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-2 -translate-y-6 text-label-md font-label-md text-on-surface-variant uppercase transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-body-md peer-focus:-translate-y-6 peer-focus:text-label-md peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
};
