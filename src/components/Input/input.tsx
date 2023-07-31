import { CSSProperties } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  style?: CSSProperties;
}

export default function Input({
  label,
  placeholder,
  type,
  ...props
}: InputProps) {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-start">
        <label className="mb-2">{label}:</label>
        <input
          className="w-full h-12 px-4 flex flex-row justify-center items-center text-zinc-300 bg-zinc-600 border-none rounded-md outline-none"
          placeholder={placeholder}
          type={type}
          {...props}
        />
      </div>
    </>
  );
}
