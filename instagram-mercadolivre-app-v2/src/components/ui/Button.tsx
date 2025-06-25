"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  primary: "bg-areia-light text-white hover:bg-areia-dark",
  secondary:
    "bg-nude-dark text-cinza-fundo-dark hover:bg-areia-light hover:text-white",
  outline:
    "bg-transparent border border-areia-light text-areia-light hover:bg-areia-light hover:text-white",
  ghost: "bg-transparent text-areia-light hover:bg-areia-light hover:text-white",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      iconLeft,
      iconRight,
      isLoading = false,
      className = "",
      disabled,
      variant = "primary",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center gap-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        type={props.type || "button"}
        {...props}
      >
        {isLoading && (
          <span className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
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
