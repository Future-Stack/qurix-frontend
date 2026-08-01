import React, { useState, useRef, useEffect } from 'react';
import { Upload, Search, ChevronLeft, ChevronDown } from 'lucide-react';
import CustomSelect from '@/components/ui/Dropdown/CustomSelect';

export interface TeamData {
  id?: number | string;
  name?: string;
  code?: string;
  serviceLine?: string;
  teamLeader?: string;
  shiftLeader?: string;
  logo?: string;
}

interface CreateTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamData?: TeamData | null;
}

export function CreateTeamModal({ isOpen, onClose, teamData }: CreateTeamModalProps) {
  const [teamName, setTeamName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [serviceLine, setServiceLine] = useState('Custom FSD');
  const [teamLeader, setTeamLeader] = useState('');
  const [shiftLeader, setShiftLeader] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (teamData) {
      setTeamName(teamData.name || '');
      setTeamCode(teamData.code || 'FO41BD');
      setServiceLine(teamData.serviceLine || 'Custom FSD');
      setTeamLeader(teamData.teamLeader || '');
      setShiftLeader(teamData.shiftLeader || '');
      setPreviewUrl(teamData.logo || null);
    } else {
      setTeamName('');
      setTeamCode('');
      setServiceLine('Custom FSD');
      setTeamLeader('');
      setShiftLeader('');
      setPreviewUrl(null);
    }
  }, [teamData, isOpen]);

  if (!isOpen) return null;

  const isEditMode = Boolean(teamData);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    setPreviewUrl(null);
    onClose();
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-lg w-full max-w-2xl p-8 relative animate-in fade-in zoom-in duration-200 cursor-default"
      >
        
        {/* Upload Icon Section */}
        <div className="flex flex-col items-center mb-8 mt-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/svg+xml"
            className="hidden"
            onChange={handleFileChange}
          />
          
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-4 border border-[#E2E8F0] cursor-pointer hover:bg-gray-100 transition-colors overflow-hidden relative group shrink-0"
            title="Click to upload team brand icon"
          >
            {previewUrl ? (
              <>
                <img src={previewUrl} alt="Team Icon Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Upload className="w-5 h-5 text-white" />
                </div>
              </>
            ) : (
              <Upload className="w-6 h-6 text-[#94A3B8] group-hover:scale-110 transition-transform" />
            )}
          </div>

          <h3
            onClick={() => fileInputRef.current?.click()}
            className="text-[17px] font-bold text-[#0F172A] mb-1 cursor-pointer hover:text-[#06530B] transition-colors"
          >
            {isEditMode ? 'Edit Team Brand Icon' : 'Team Icon / Brand Identity'}
          </h3>
          <p className="text-[11px] text-[#64748B]">
            Recommended dimensions: 256x256px, Formats: PNG, SVG or JPG (Max 2MB)
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
          <div className="grid grid-cols-2 gap-6">
            {/* Team Name */}
            <div>
              <label className="block text-[11px] font-bold text-[#64748B] mb-2">
                Team Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center opacity-80">
                  <span className="text-[8px] text-white font-bold">{teamName ? teamName.charAt(0).toUpperCase() : 'A'}</span>
                </div>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Future Stack"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-[#0F172A]"
                />
              </div>
            </div>

            {/* Team Code */}
            <div>
              <label className="block text-[11px] font-bold text-[#64748B] mb-2">
                Team Code <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#00AB0C]">
                  FST-
                </div>
                <input
                  type="text"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value)}
                  placeholder="#041B0"
                  className="w-full pl-14 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#00AB0C] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-[#00AB0C]"
                />
              </div>
            </div>
          </div>

          {/* Service Line */}
          <div>
            <CustomSelect
              label="Service Line *"
              options={[
                { label: 'Custom FSD', value: 'Custom FSD' },
                { label: 'Shopify', value: 'Shopify' },
                { label: 'Framer', value: 'Framer' },
                { label: 'Squarespace', value: 'Squarespace' },
              ]}
              value={serviceLine}
              onChange={setServiceLine}
              variant="form"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 pb-2">
            {/* Team Leader */}
            <div>
              <label className="block text-[11px] font-bold text-[#00AB0C] mb-2">
                Team Leader <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={teamLeader}
                  onChange={(e) => setTeamLeader(e.target.value)}
                  placeholder="Search by name or user ID..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-400 font-medium text-[#0F172A]"
                />
              </div>
            </div>

            {/* Shift Leader */}
            <div>
              <label className="block text-[11px] font-bold text-[#64748B] mb-2">
                Shift Leader
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={shiftLeader}
                  onChange={(e) => setShiftLeader(e.target.value)}
                  placeholder="Search by name or user ID..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-400 font-medium text-[#0F172A]"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="w-12 h-12 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-gray-50 transition-colors shrink-0 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-[15px] font-bold transition-colors shadow-sm cursor-pointer"
            >
              {isEditMode ? 'Save Changes' : '+ Create Team'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
