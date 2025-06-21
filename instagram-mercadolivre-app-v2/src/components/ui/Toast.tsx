"use client";

import React, { ReactNode, useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number; // ms
  onClose: () => void;
}

const toastColors = {
  success: "alert-success",
  error: "alert-error",
  info: "alert-info",
  warning: "alert-warning",
};

const Toast = ({ message, type = "info", duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`alert ${toastColors[type]} fixed top-6 right-6 z-50 shadow-lg animate-fade-in`}
      role="alert"
    >
      <span>{message}</span>
    </div>
  );
};

export { Toast };
