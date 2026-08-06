"use client";

import React, { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  actionText: string;
  onAction: () => void;
  isDanger?: boolean;
}

export function Modal({ isOpen, onClose, title, description, actionText, onAction, isDanger = true }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-[24px] p-8 w-full max-w-[400px] shadow-xl transform transition-all">
        <div className="flex items-center gap-3 mb-3">
          {isDanger && <AlertTriangle className="w-5 h-5 text-red-500" />}
          <h3 className="text-lg font-bold text-[#0F172A]">{title}</h3>
        </div>
        
        <p className="text-sm text-[#64748B] mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-[#64748B] bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onAction();
              onClose();
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              isDanger 
                ? 'bg-[#FEE2E2] text-red-500 hover:bg-red-100' 
                : 'bg-[#06530B] text-white hover:bg-[#05290b]'
            }`}
          >
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
}
