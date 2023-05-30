import { FC, MouseEventHandler } from "react";

type ButtonProps = {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "Primary" | "Secondary";
  disabled?: boolean;
};

// https://v1.tailwindcss.com/components/buttons
const Button: FC<ButtonProps> = ({
  onClick,
  label,
  className,
  variant,
  disabled,
}) => {
  let buttonClasses = `text-white font-bold py-2 px-4 rounded ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  }`;
  switch (variant) {
    case "Primary":
    default:
      buttonClasses =
        buttonClasses + ` bg-blue-500 ${!disabled && "hover:bg-blue-700"}`;
      break;
    case "Secondary":
      buttonClasses =
        buttonClasses + ` bg-green-500 ${!disabled && "hover:bg-green-700"}`;
  }
  return (
    <button
      type="button"
      className={`${buttonClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
