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
    // Mapear variantes e tamanhos para classes daisyUI
    let daisyVariant = "btn-primary";
    switch (variant) {
      case "secondary":
        daisyVariant = "btn-secondary";
        break;
      case "outline":
        daisyVariant = "btn-outline";
        break;
      case "ghost":
        daisyVariant = "btn-ghost";
        break;
      case "link":
        daisyVariant = "btn-link";
        break;
      default:
        daisyVariant = "btn-primary";
    }

    let daisySize = "";
    switch (size) {
      case "sm":
        daisySize = "btn-sm";
        break;
      case "lg":
        daisySize = "btn-lg";
        break;
      default:
        daisySize = "btn-md";
    }

    const disabledStyle = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";

    return (
      <button
        ref={ref}
        className={`btn ${daisyVariant} ${daisySize} ${disabledStyle} ${className}`.trim()}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        type={props.type || "button"}
        {...props}
      >
        {isLoading && (
          <span className="loading loading-spinner mr-2"></span>
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
