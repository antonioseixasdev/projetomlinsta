"use client";

import React, { ReactNode, useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number; // ms
  onClose: () => void;
}

const toastColors = {
  success: "bg-green-500 text-white dark:bg-green-600",
  error: "bg-red-500 text-white dark:bg-red-600",
  info: "bg-blue-500 text-white dark:bg-blue-600",
  warning: "bg-yellow-500 text-black dark:bg-yellow-400 dark:text-black",
};

const Toast = ({ message, type = "info", duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-6 right-6 z-50 px-4 py-2 rounded shadow-lg ${toastColors[type]} animate-fade-in`}
      role="alert"
    >
      {message}
    </div>
  );
};

export { Toast };
