import type { PropsWithChildren } from "react";

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "reset" | "submit";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}: PropsWithChildren<ButtonProps>) {
  const buttonStyle =
    "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${buttonStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
