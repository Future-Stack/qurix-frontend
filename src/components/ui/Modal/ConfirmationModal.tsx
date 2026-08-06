import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Delete',
  cancelText = 'Cancel',
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[20px] shadow-lg w-full max-w-sm p-6 relative animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col gap-4">
          
          {/* Header */}
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[15px] font-bold text-[#0F172A] leading-snug">{title}</h3>
            </div>
          </div>

          {/* Description */}
          <div className="pl-8">
            <p className="text-[11px] font-medium text-[#64748B] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-2">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#64748B] rounded-xl text-xs font-bold transition-colors"
            >
              {cancelText}
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="px-6 py-2 bg-[#FEE2E2] hover:bg-[#FECACA] text-[#EF4444] rounded-xl text-xs font-bold transition-colors"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
