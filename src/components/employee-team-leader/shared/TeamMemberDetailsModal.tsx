import React from 'react';
import { X, User, Briefcase, Mail, Calendar, Clock, Hash, Phone } from 'lucide-react';
import StatusBadge from './StatusBadge';

interface TeamMember {
    id: string;
    name: string;
    handle: string;
    empId: string;
    designation: string;
    email: string;
    status: string;
    joiningDate: string;
    lastLogin: string;
    avatar: string;
    phone?: string;
}

interface TeamMemberDetailsModalProps {
    member: TeamMember;
    onClose: () => void;
}

export default function TeamMemberDetailsModal({ member, onClose }: TeamMemberDetailsModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-[24px] border border-[#eaecf0] shadow-2xl w-full max-w-lg overflow-hidden relative flex flex-col animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="p-6 pb-4 flex items-center justify-between border-b border-[#eaecf0]">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] rounded-xl flex items-center justify-center shadow-[0px_4px_7px_rgba(22,163,74,0.3)]">
                            <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-sans font-bold text-[18px] text-[#101828]">Member Details</h3>
                            <p className="font-medium text-xs text-[#64748B] mt-0.5">{member.empId}</p>
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

                    {/* Avatar + Name + Status bar */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                            <div className="font-bold text-[16px] text-[#101828] truncate">{member.name}</div>
                            <div className="text-sm text-[#64748B] mt-0.5">{member.handle}</div>
                        </div>
                        <StatusBadge status={member.status} />
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                <Briefcase className="size-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Designation</div>
                                <div className="text-[13px] text-[#101828] font-medium font-sans mt-0.5">{member.designation}</div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                                <Hash className="size-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Employee ID</div>
                                <div className="text-[13px] text-[#101828] font-medium font-sans mt-0.5">{member.empId}</div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3">
                            <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                                <Calendar className="size-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Joining Date</div>
                                <div className="text-[13px] text-[#101828] font-medium font-sans mt-0.5">{member.joiningDate}</div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3">
                            <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                                <Clock className="size-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Last Active</div>
                                <div className="text-[13px] text-[#101828] font-medium font-sans mt-0.5">{member.lastLogin}</div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-[#eaecf0] bg-white flex items-center gap-3 col-span-2">
                            <div className="w-8 h-8 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
                                <Phone className="size-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider font-condensed">Phone Number</div>
                                <div className="text-[13px] text-[#101828] font-medium font-sans mt-0.5">{member.phone ?? 'Not provided'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-condensed flex items-center gap-1.5">
                            <Mail className="size-3.5 text-gray-400" />
                            <span>Contact Email</span>
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed bg-gray-50/50 border border-gray-100/50 rounded-xl p-4 font-sans">
                            {member.email}
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
                </div>

            </div>
        </div>
    );
}
