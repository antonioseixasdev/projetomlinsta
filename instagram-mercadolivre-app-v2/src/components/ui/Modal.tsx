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
      <div className={`modal-box relative ${className}`}>
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          aria-label="Fechar modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {title && <h3 className="font-bold text-lg mb-4">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export { Modal };
