import React, { useState } from 'react';
import { AlertTriangle, Check } from 'lucide-react';

interface UrgentActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (explanation: string, notifyAll: boolean) => void;
}

export function UrgentActionModal({
  isOpen,
  onClose,
  onConfirm,
}: UrgentActionModalProps) {
  const [explanation, setExplanation] = useState('');
  const [notifyAll, setNotifyAll] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-lg p-8 relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <h2 className="text-xl font-bold text-[#0F172A] mb-4">Mark Project as urgent</h2>

        {/* Warning Alert Box */}
        <div className="flex gap-3 bg-[#FEF2F2] rounded-2xl p-4 mb-4">
          <AlertTriangle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
          <p className="text-sm font-medium text-[#EF4444] leading-relaxed">
            This action will move the project to the top of all members' chat lists and trigger an urgent notification to everyone.
          </p>
        </div>

        {/* Policy Text */}
        <p className="text-[13px] text-[#475569] leading-relaxed mb-6">
          This feature is for top-emergencies only, such as client cancellation risk, emergency meetings, critical deadline changes, product roll-backs, or urgent client issues. Repeated misuse may lead to disciplinary review according to company policy.
        </p>

        {/* Explanation Textarea */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#0F172A] mb-2">Explanation</label>
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Briefly describe the urgency ..."
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-sm text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-green-500 min-h-[100px] resize-none"
          />
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-3 cursor-pointer mb-8">
          <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
            notifyAll ? 'bg-[#06530B] border-[#06530B]' : 'bg-white border-[#E2E8F0]'
          }`}>
            {notifyAll && <Check className="w-3.5 h-3.5 text-white" />}
          </div>
          <span className="text-sm font-medium text-[#0F172A]">Notify all members in this group</span>
          <input 
            type="checkbox" 
            className="hidden" 
            checked={notifyAll} 
            onChange={(e) => setNotifyAll(e.target.checked)} 
          />
        </label>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-50 hover:bg-gray-100 text-[#64748B] rounded-xl text-sm font-bold transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm(explanation, notifyAll);
              onClose();
            }}
            className="px-6 py-2.5 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
          >
            Mark as urgent
          </button>
        </div>

      </div>
    </div>
  );
}
