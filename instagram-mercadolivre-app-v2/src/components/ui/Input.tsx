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
      <div className="w-full">
        {label && (
          <label className="block mb-1 text-sm font-medium text-texto-base-light dark:text-texto-base-dark">
            {label}
          </label>
        )}
        <div className={`flex items-center rounded-md border bg-white dark:bg-cinza-elemento-dark border-gray-300 dark:border-cinza-elemento-dark focus-within:ring-2 focus-within:ring-areia-light dark:focus-within:ring-areia-dark transition ${error ? 'border-red-500 ring-red-500' : ''} ${className}`}>
          {iconLeft && <span className="pl-3 text-gray-400 dark:text-gray-300">{iconLeft}</span>}
          <input
            ref={ref}
            className={`flex-1 bg-transparent outline-none px-3 py-2 text-texto-base-light dark:text-texto-base-dark placeholder-gray-400 dark:placeholder-gray-500 ${iconLeft ? 'pl-1' : ''} ${iconRight ? 'pr-1' : ''}`}
            {...props}
          />
          {iconRight && <span className="pr-3 text-gray-400 dark:text-gray-300">{iconRight}</span>}
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
