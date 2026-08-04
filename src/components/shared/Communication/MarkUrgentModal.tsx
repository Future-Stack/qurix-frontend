'use client';

import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface MarkUrgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (explanation: string, notifyAll: boolean) => void;
}

export default function MarkUrgentModal({ isOpen, onClose, onConfirm }: MarkUrgentModalProps) {
  const [explanation, setExplanation] = useState('');
  const [notifyAll, setNotifyAll] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(explanation, notifyAll);
    setExplanation('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-[24px] max-w-md md:max-w-lg w-full p-6 md:p-7 shadow-2xl relative animate-in zoom-in-95 duration-200 border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <h2 className="text-xl md:text-[22px] font-bold text-[#06530B] tracking-tight mb-4">
          Mark Project as urgent
        </h2>

        {/* Red Alert Banner */}
        <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-[14px] p-3.5 mb-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
          <p className="text-[13px] font-medium text-[#EF4444] leading-snug">
            This action will move this project to the top of all members&apos; chat lists and trigger an urgent notification to everyone.
          </p>
        </div>

        {/* Body Text */}
        <p className="text-[13px] text-[#475569] leading-relaxed font-normal mb-5">
          This feature is for <strong className="font-bold text-[#1E293B]">real emergencies only</strong>, such as client cancellation risk, emergency meetings, critical deadline changes, production blockers, or urgent client issues. Repeated misuse may result in disciplinary review according to company policy.
        </p>

        {/* Form Controls */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[14px] font-bold text-[#06530B] mb-2">
              Explanation
            </label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Briefly describe the urgency..."
              rows={3}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[14px] p-3.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:border-[#06530B] outline-none min-h-[95px] resize-none transition-all"
            />
          </div>

          {/* Checkbox Option */}
          <div className="pt-1">
            <label className="inline-flex items-center gap-2.5 cursor-pointer text-[13px] font-medium text-[#1E293B] select-none">
              <input
                type="checkbox"
                checked={notifyAll}
                onChange={(e) => setNotifyAll(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#06530B] focus:ring-[#06530B] accent-[#06530B] cursor-pointer"
              />
              <span>Notify all members in this group</span>
            </label>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#334155] font-semibold text-sm rounded-full transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Mark as Urgent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
