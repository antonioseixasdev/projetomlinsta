"use client";

import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, iconLeft, iconRight, className = "", ...props },
    ref
  ) => {
    return (
      <div className="form-control w-full">
        {label && (
          <label className="label">
            <span className="label-text dark:text-texto-base-dark">{label}</span>
          </label>
        )}
        <div className="relative">
          {iconLeft && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300">{iconLeft}</span>}
          <input
            ref={ref}
            className={`input input-bordered w-full ${iconLeft ? 'pl-10' : ''} ${iconRight ? 'pr-10' : ''} ${error ? 'input-error' : ''} ${className}`.trim()}
            {...props}
          />
          {iconRight && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300">{iconRight}</span>}
        </div>
        {error && <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
