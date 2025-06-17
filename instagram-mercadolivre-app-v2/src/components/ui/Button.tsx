"use client";

import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      iconLeft,
      iconRight,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyle =
      "font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 inline-flex items-center justify-center rounded-md";

    let variantStyle = "";
    switch (variant) {
      case "primary":
        variantStyle =
          "bg-areia-light text-white dark:bg-areia-dark dark:text-cinza-fundo-dark hover:opacity-90 focus:ring-areia-light dark:focus:ring-areia-dark";
        break;
      case "secondary":
        variantStyle =
          "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-400";
        break;
      case "outline":
        variantStyle =
          "bg-transparent border border-areia-light text-areia-light dark:border-areia-dark dark:text-areia-dark hover:bg-areia-light/10 dark:hover:bg-areia-dark/10";
        break;
      case "ghost":
        variantStyle =
          "bg-transparent text-areia-light dark:text-areia-dark hover:bg-areia-light/10 dark:hover:bg-areia-dark/10";
        break;
      case "link":
        variantStyle =
          "bg-transparent underline text-areia-light dark:text-areia-dark hover:opacity-80";
        break;
      default:
        variantStyle =
          "bg-areia-light text-white dark:bg-areia-dark hover:opacity-90";
    }

    let sizeStyle = "";
    switch (size) {
      case "sm":
        sizeStyle = "px-3 py-1.5 text-sm";
        break;
      case "lg":
        sizeStyle = "px-6 py-3 text-lg";
        break;
      default:
        sizeStyle = "px-4 py-2 text-base";
    }

    const disabledStyle = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";

    return (
      <button
        ref={ref}
        className={`
          ${baseStyle} ${variantStyle} ${sizeStyle} ${disabledStyle} ${className}
        `.trim()}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        type={props.type || "button"}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {!isLoading && iconRight && <span className="ml-2">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
