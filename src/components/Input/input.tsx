import { CSSProperties } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value: any;
  onChange: any;
  style?: CSSProperties;
}

export default function Input({
  label,
  placeholder,
  type,
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-start">
        <label className="mb-2 text-black">{label}:</label>
        <input
          className="w-full h-12 px-4 text-black bg-transparent border-solid border-2 border-violet-600 rounded-md outline-none"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </>
  );
}
