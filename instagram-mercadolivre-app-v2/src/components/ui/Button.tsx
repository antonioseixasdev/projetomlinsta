"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      iconLeft,
      iconRight,
      isLoading = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`.trim()}
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
