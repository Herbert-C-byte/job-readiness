import type { PropsWithChildren } from "react";
import type { ButtonProps } from "../types";

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}: PropsWithChildren<ButtonProps>) {
  const buttonStyle =
    "w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 active:bg-red-500 transition-colors duration-200 transition-transform duration-150 ease-in-out active:scale-95";

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
