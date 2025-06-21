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
      className={`card bg-base-100 ${
        shadow ? "shadow-xl" : ""
      } ${rounded ? "rounded-lg" : ""} ${border ? "border" : ""} p-6 transition-colors ${className}`.trim()}
    >
      <div className="card-body p-0">{children}</div>
    </div>
  );
};

export { Card };
