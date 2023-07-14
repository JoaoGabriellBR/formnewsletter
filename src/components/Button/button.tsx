interface ButtonProps {
  children: any;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-full h-12 bg-violet-600 hover:bg-violet-700 text-white rounded-md"
      {...props}
    >
      {children}
    </button>
  );
}
