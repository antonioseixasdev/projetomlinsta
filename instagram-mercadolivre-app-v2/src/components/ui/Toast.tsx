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

const toastStyles = {
  success: {
    bg: "bg-white dark:bg-cinza-elemento-dark border-l-4 border-green-500",
    icon: (
      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  error: {
    bg: "bg-white dark:bg-cinza-elemento-dark border-l-4 border-red-500",
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  info: {
    bg: "bg-white dark:bg-cinza-elemento-dark border-l-4 border-blue-500",
    icon: (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" />
      </svg>
    ),
  },
  warning: {
    bg: "bg-white dark:bg-cinza-elemento-dark border-l-4 border-yellow-500",
    icon: (
      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
  },
};

const Toast = ({ message, type = "info", duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const { bg, icon } = toastStyles[type] || toastStyles.info;

  return (
    <div
      className={`fixed top-6 right-6 z-50 min-w-[260px] max-w-xs flex items-start gap-3 p-4 rounded-lg shadow-2xl border transition-all animate-fade-in ${bg}`}
      role="alert"
    >
      <span className="mt-0.5">{icon}</span>
      <span className="flex-1 text-sm text-texto-base-light dark:text-texto-base-dark">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
        aria-label="Fechar toast"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export { Toast };
