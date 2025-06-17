"use client";

import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
  rounded?: boolean;
  border?: boolean;
}

const Card = ({
  children,
  className = "",
  shadow = true,
  rounded = true,
  border = false,
}: CardProps) => {
  return (
    <div
      className={`
        bg-white dark:bg-cinza-elemento-dark
        ${shadow ? "shadow-md dark:shadow-lg" : ""}
        ${rounded ? "rounded-lg" : ""}
        ${border ? "border border-gray-200 dark:border-cinza-fundo-dark" : ""}
        p-6
        transition-colors
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export { Card };
