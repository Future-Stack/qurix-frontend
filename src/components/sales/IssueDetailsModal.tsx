'use client';

import React from 'react';
import { X, AlertCircle, Link as LinkIcon, FileText, CheckCircle2 } from 'lucide-react';

interface IssueData {
  id: string;
  orderId: string;
  clientName?: string;
  explanation: string;
  links?: string[];
  files?: Array<{ name: string; size?: string }>;
  status: 'Pending' | 'WIP' | 'Resolved';
}

interface IssueDetailsModalProps {
  isOpen: boolean;
  issue: IssueData | null;
  onClose: () => void;
  onStatusChange?: (id: string, newStatus: 'Pending' | 'WIP' | 'Resolved') => void;
}

export default function IssueDetailsModal({
  isOpen,
  issue,
  onClose,
  onStatusChange
}: IssueDetailsModalProps) {
  if (!isOpen || !issue) return null;

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-[#e07700] text-white';
      case 'WIP':
        return 'bg-[#001f75] text-white';
      case 'Resolved':
        return 'bg-[#06530b] text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="bg-[#f7f5f4] w-full max-w-[500px] rounded-[15px] p-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.15)] flex flex-col gap-[14px] relative select-none animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="size-5 text-[#06530b]" />
            <h3 className="font-['Roboto'] font-bold text-[18px] text-[#06530b]">
              Project Issue Details ({issue.orderId})
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-200/60"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#d6d6d6] w-full" />

        {/* Content */}
        <div className="flex flex-col gap-4">
          {/* Status Bar & Quick Actions */}
          <div className="flex items-center justify-between bg-white border border-[#d6d6d6] p-3 rounded-[8px]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 font-['Roboto']">Current Status:</span>
              <span className={`px-2.5 py-1 rounded-[6px] text-xs font-semibold ${getStatusBadgeClass(issue.status)}`}>
                {issue.status}
              </span>
            </div>

            {/* Status Change Selector */}
            {onStatusChange && (
              <select
                value={issue.status}
                onChange={(e) => onStatusChange(issue.id, e.target.value as any)}
                className="bg-white border border-[#E2E8F0] text-xs font-bold text-[#06530B] px-3 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer shadow-2xs hover:bg-gray-50 transition-colors"
              >
                <option value="Pending">Set Pending</option>
                <option value="WIP">Set WIP</option>
                <option value="Resolved">Set Resolved</option>
              </select>
            )}
          </div>

          {/* Explanation */}
          <div className="flex flex-col gap-1">
            <h4 className="font-['Roboto'] font-semibold text-[13px] text-[#06530b]">
              Explanation:
            </h4>
            <div className="bg-[#ebebeb] border border-[#d6d6d6] rounded-[6px] p-3 text-[14px] text-[#333] font-['Roboto'] whitespace-pre-wrap">
              {issue.explanation || 'No explanation provided.'}
            </div>
          </div>

          {/* Attached Links */}
          {issue.links && issue.links.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <h4 className="font-['Roboto'] font-semibold text-[13px] text-[#06530b] flex items-center gap-1.5">
                <LinkIcon className="size-3.5" /> Reference Links:
              </h4>
              <div className="flex flex-col gap-1">
                {issue.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-600 hover:underline truncate bg-white p-2 rounded-[6px] border border-[#d6d6d6]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Attached Files */}
          {issue.files && issue.files.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <h4 className="font-['Roboto'] font-semibold text-[13px] text-[#06530b] flex items-center gap-1.5">
                <FileText className="size-3.5" /> Attached Files:
              </h4>
              <div className="flex flex-wrap gap-2">
                {issue.files.map((file, idx) => (
                  <div key={idx} className="bg-white border border-[#d6d6d6] px-2.5 py-1.5 rounded-[6px] text-xs font-medium text-[#333] flex items-center gap-2">
                    <FileText className="size-3.5 text-[#06530b]" />
                    <span className="truncate max-w-[200px]">{file.name}</span>
                    {file.size && <span className="text-[10px] text-gray-400">({file.size})</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#d6d6d6] w-full mt-1" />

        {/* Footer */}
        <div className="flex items-center justify-end pt-1">
          <button
            onClick={onClose}
            className="bg-[#06530b] hover:bg-emerald-900 text-white font-['Roboto'] text-[14px] font-medium px-5 py-1.5 rounded-full transition-colors cursor-pointer shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
