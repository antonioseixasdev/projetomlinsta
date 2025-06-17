"use client";

import React, { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, title, children, className = "" }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className={`bg-white dark:bg-cinza-elemento-dark rounded-lg shadow-lg max-w-md w-full p-6 relative ${className}`}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
          aria-label="Fechar modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {title && <h3 className="text-lg font-bold mb-4 text-texto-base-light dark:text-texto-base-dark">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export { Modal };
