import React from 'react';
import { X, Zap, DollarSign, Users, User, FileText, MessageSquare } from 'lucide-react';
import StatusBadge from './StatusBadge';
import CountdownTimer from './CountdownTimer';

interface Project {
  id: string;
  client: string;
  profile: string;
  team: string;
  status: string;
  value: string;
  initialSeconds: number;
}

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

const getDescription = (client: string) => {
  const descriptions: Record<string, string> = {
    'lawalx': 'Create a fully interactive UI/UX mockup in Figma, including mobile responsiveness and a production-ready design handoff system.',
    'Wade Warren': 'Execute a frontend code audit and refactor existing React pages to next-gen App Router structure, incorporating Tailwind CSS.',
    'Dianne Russell': 'Deploy Next.js App Router API proxy handlers, optimize load times, and configure Tailwind v4 global CSS variable theme mapping.',
    'Ronald Richards': 'Implement the Qurix Design System components in Next.js, verifying accessibility (a11y) and performance (Lighthouse >95).',
    'Leslie Alexander': 'Design and implement full-stack admin dashboards with role-based access control, PostgreSQL schema, and real-time WebSockets notifications.',
    'Guy Hawkins': 'Audit mobile responsive CSS breakpoints and fix sidebar overlap bugs on iOS and Android devices.',
    'Jenny Wilson': 'Build a highly scalable and reusable component library in React, matching atomic design principles and custom-tailored branding.',
  };
  return descriptions[client] || 'Custom service request designed to build out new components, refine responsive structures, and handoff assets in full compliance with agency standards.';
};

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const description = getDescription(project.client);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-[24px] border border-[#eaecf0] shadow-2xl w-full max-w-lg overflow-hidden relative flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header decoration bar */}
        {/* <div className="h-1.5 w-full bg-gradient-to-r from-[#16A34A] to-[#4ADE80]"></div> */}
        
        {/* Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-[#eaecf0]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-xl flex items-center justify-center shadow-[0px_4px_7px_rgba(22,163,74,0.3)]">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-[18px] text-[#101828]">Order Details</h3>
              <p className="font-inter font-medium text-xs text-[#64748B] mt-0.5">{project.id}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
          {/* Status and Timer Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-condensed">Status:</span>
              <StatusBadge status={project.status} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-condensed">Remaining:</span>
              <CountdownTimer initialSeconds={project.initialSeconds} />
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <User className="size-4" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Client Name</div>
                <div className="text-[14px] text-[#101828] font-medium font-sans mt-0.5">{project.client}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                <Users className="size-4" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Profile / Username</div>
                <div className="text-[14px] text-[#101828] font-medium font-sans mt-0.5">{project.profile}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                <Zap className="size-4" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Assigned Team</div>
                <div className="text-[14px] text-[#101828] font-medium font-sans mt-0.5">{project.team} Team</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                <DollarSign className="size-4" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Project Value</div>
                <div className="text-[14px] text-[#101828] font-medium font-sans mt-0.5">{project.value}</div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-condensed flex items-center gap-1.5">
              <FileText className="size-3.5 text-gray-400" />
              <span>Project Requirements & Brief</span>
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50/50 border border-gray-100/50 rounded-xl p-4 font-sans">
              {description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-[#eaecf0] flex items-center justify-end gap-3 bg-gray-50/50">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer font-sans"
          >
            Close
          </button>
          {/* <button
            onClick={() => alert(`Starting agency chat for project ${project.id}...`)}
            className="px-4 py-2 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs font-sans"
          >
            <MessageSquare className="size-4" />
            <span>Message Team</span>
          </button> */}
        </div>

      </div>
    </div>
  );
}
