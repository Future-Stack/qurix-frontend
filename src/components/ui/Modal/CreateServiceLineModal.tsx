import React, { useState, useRef, useEffect } from 'react';
import { Upload, Search, ChevronLeft, User, ArrowLeft } from 'lucide-react';
import CustomSelect from '@/components/ui/Dropdown/CustomSelect';

export interface ServiceLineData {
  id?: number | string;
  type?: 'Operations' | 'Sales';
  name?: string;
  code?: string;
  agency?: string;
  operationManager?: string;
  deputyManager?: string;
  iconBg?: string;
  iconColor?: string;
  leadName?: string;
}

interface CreateServiceLineModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceLineData?: ServiceLineData | null;
}

const mockManagers = [
  { id: 'USR-8021', name: 'Al-Rifat Hossein', role: 'Operation Manager', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
  { id: 'USR-8022', name: 'Tanvir Ahmed', role: 'Senior Manager', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
  { id: 'USR-8023', name: 'Mahmudul Hasan', role: 'Deputy Manager', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' },
  { id: 'USR-8024', name: 'Sabbir Hossain', role: 'Team Leader', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80' },
  { id: 'USR-8025', name: 'Shakil Khan', role: 'Deputy Manager', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80' },
  { id: 'USR-8026', name: 'Naimur Rahman', role: 'Operation Lead', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80' },
];

export function CreateServiceLineModal({ isOpen, onClose, serviceLineData }: CreateServiceLineModalProps) {
  const [serviceLineType, setServiceLineType] = useState<'Operations' | 'Sales'>('Operations');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [agency, setAgency] = useState('Softvence Omega Force');
  const [operationManager, setOperationManager] = useState('');
  const [deputyManager, setDeputyManager] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [showOpDropdown, setShowOpDropdown] = useState(false);
  const [showDepDropdown, setShowDepDropdown] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const opRef = useRef<HTMLDivElement>(null);
  const depRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (opRef.current && !opRef.current.contains(e.target as Node)) {
        setShowOpDropdown(false);
      }
      if (depRef.current && !depRef.current.contains(e.target as Node)) {
        setShowDepDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (serviceLineData) {
      setServiceLineType(serviceLineData.type || 'Operations');
      setName(serviceLineData.name || '');
      setCode(serviceLineData.code || 'FO41BD');
      setAgency(serviceLineData.agency || 'Softvence Omega Force');
      setOperationManager(serviceLineData.operationManager || serviceLineData.leadName || '');
      setDeputyManager(serviceLineData.deputyManager || '');
      setPreviewUrl(null);
    } else {
      setServiceLineType('Operations');
      setName('');
      setCode('');
      setAgency('Softvence Omega Force');
      setOperationManager('');
      setDeputyManager('');
      setPreviewUrl(null);
    }
  }, [serviceLineData, isOpen]);

  if (!isOpen) return null;

  const isEditMode = Boolean(serviceLineData);
  const isSales = serviceLineType === 'Sales';

  const filteredOpManagers = mockManagers.filter(m =>
    !operationManager ||
    m.name.toLowerCase().includes(operationManager.toLowerCase()) ||
    m.id.toLowerCase().includes(operationManager.toLowerCase())
  );

  const filteredDepManagers = mockManagers.filter(m =>
    !deputyManager ||
    m.name.toLowerCase().includes(deputyManager.toLowerCase()) ||
    m.id.toLowerCase().includes(deputyManager.toLowerCase())
  );

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
        className="bg-white rounded-[28px] shadow-2xl w-full max-w-2xl p-6 sm:p-8 relative animate-in fade-in zoom-in duration-200 cursor-default"
      >
        
        {/* Upload Icon Section matching Figma */}
        <div className="flex flex-col items-center mb-6 mt-1 text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/svg+xml"
            className="hidden"
            onChange={handleFileChange}
          />

          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-16 h-16 bg-[#F1F5F9] rounded-[20px] flex items-center justify-center mb-3 border border-[#E2E8F0] cursor-pointer hover:bg-gray-100 transition-colors overflow-hidden relative group shrink-0 shadow-2xs"
            title="Click to upload brand icon"
          >
            {previewUrl ? (
              <>
                <img src={previewUrl} alt="Brand Icon Preview" className="w-full h-full object-cover" />
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
            className="text-[17px] sm:text-[18px] font-bold text-[#0F172A] mb-1 cursor-pointer hover:text-[#06530B] transition-colors"
          >
            {isEditMode
              ? (isSales ? 'Edit Sales Line Brand Icon' : 'Edit Service Line Brand Icon')
              : (isSales ? 'Sales Line Icon / Brand Identity' : 'Service Line Icon / Brand Identity')}
          </h3>
          <p className="text-[12px] text-[#64748B]">
            Recommended dimensions: 256x256px. Formats: PNG, SVG or JPG (Max 2MB).
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
          
          {/* Service Line Type Selection Dropdown */}
          <div>
            <CustomSelect
              label="Service Line Type *"
              options={[
                { label: 'Operations', value: 'Operations' },
                { label: 'Sales', value: 'Sales' },
              ]}
              value={serviceLineType}
              onChange={(val) => setServiceLineType(val as 'Operations' | 'Sales')}
              variant="form"
            />
          </div>

          {/* Service Line Name & Service Line Code */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Service Line Name */}
            <div>
              <label className="block text-xs font-bold text-[#475569] mb-2">
                Service Line Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#06530B] absolute left-4 top-1/2 -translate-y-1/2 shrink-0" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isSales ? "Sales Stack" : "Future Stack"}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#06530B] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-[#06530B]"
                />
              </div>
            </div>

            {/* Service Line Code */}
            <div>
              <label className="block text-xs font-bold text-[#475569] mb-2">
                Service Line Code <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#06530B]">
                  {isSales ? 'SLS-' : 'FSD-'}
                </div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="FO41BD"
                  className="w-full pl-14 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-semibold text-[#06530B] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-[#06530B]"
                />
              </div>
            </div>
          </div>

          {/* Select Agency */}
          <div>
            <CustomSelect
              label="Select Agency *"
              options={[
                { label: 'Softvence Omega Force', value: 'Softvence Omega Force' },
                { label: 'Softvence Alpha Force', value: 'Softvence Alpha Force' },
              ]}
              value={agency}
              onChange={setAgency}
              variant="form"
            />
          </div>

          {/* Managers Grid Section (2 columns for Operations, 1 column for Sales) */}
          {isSales ? (
            <div className="relative" ref={opRef}>
              <label className="block text-xs font-bold text-[#06530B] mb-2">
                Operation Manager <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={operationManager}
                  onFocus={() => setShowOpDropdown(true)}
                  onChange={(e) => {
                    setOperationManager(e.target.value);
                    setShowOpDropdown(true);
                  }}
                  placeholder="Search by name or user ID.."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-400"
                />
              </div>

              {/* Autocomplete Dropdown */}
              {showOpDropdown && filteredOpManagers.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E2E8F0] rounded-2xl shadow-xl z-50 overflow-hidden max-h-48 overflow-y-auto py-1 animate-in fade-in duration-150">
                  {filteredOpManagers.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setOperationManager(`${m.name} (${m.id})`);
                        setShowOpDropdown(false);
                      }}
                      className="w-full px-3.5 py-2.5 flex items-center gap-3 hover:bg-emerald-50/60 transition-colors text-left cursor-pointer border-b border-gray-50 last:border-0"
                    >
                      <img src={m.avatar} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 shadow-2xs" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#0F172A] truncate">{m.name}</p>
                        <p className="text-[10px] text-[#64748B] font-mono">{m.id} • {m.role}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pb-1">
              {/* Operation Manager */}
              <div className="relative" ref={opRef}>
                <label className="block text-xs font-bold text-[#06530B] mb-2">
                  Operation Manager <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={operationManager}
                    onFocus={() => setShowOpDropdown(true)}
                    onChange={(e) => {
                      setOperationManager(e.target.value);
                      setShowOpDropdown(true);
                    }}
                    placeholder="Search by name or user ID.."
                    className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-400"
                  />
                </div>

                {/* Autocomplete Dropdown */}
                {showOpDropdown && filteredOpManagers.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E2E8F0] rounded-2xl shadow-xl z-50 overflow-hidden max-h-48 overflow-y-auto py-1 animate-in fade-in duration-150">
                    {filteredOpManagers.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          setOperationManager(`${m.name} (${m.id})`);
                          setShowOpDropdown(false);
                        }}
                        className="w-full px-3.5 py-2.5 flex items-center gap-3 hover:bg-emerald-50/60 transition-colors text-left cursor-pointer border-b border-gray-50 last:border-0"
                      >
                        <img src={m.avatar} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 shadow-2xs" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-[#0F172A] truncate">{m.name}</p>
                          <p className="text-[10px] text-[#64748B] font-mono">{m.id} • {m.role}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Deputy Manager */}
              <div className="relative" ref={depRef}>
                <label className="block text-xs font-bold text-[#475569] mb-2">
                  Deputy Manager
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={deputyManager}
                    onFocus={() => setShowDepDropdown(true)}
                    onChange={(e) => {
                      setDeputyManager(e.target.value);
                      setShowDepDropdown(true);
                    }}
                    placeholder="Search by name or user ID.."
                    className="w-full pl-11 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-400"
                  />
                </div>

                {/* Autocomplete Dropdown */}
                {showDepDropdown && filteredDepManagers.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E2E8F0] rounded-2xl shadow-xl z-50 overflow-hidden max-h-48 overflow-y-auto py-1 animate-in fade-in duration-150">
                    {filteredDepManagers.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          setDeputyManager(`${m.name} (${m.id})`);
                          setShowDepDropdown(false);
                        }}
                        className="w-full px-3.5 py-2.5 flex items-center gap-3 hover:bg-emerald-50/60 transition-colors text-left cursor-pointer border-b border-gray-50 last:border-0"
                      >
                        <img src={m.avatar} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 shadow-2xs" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-[#0F172A] truncate">{m.name}</p>
                          <p className="text-[10px] text-[#64748B] font-mono">{m.id} • {m.role}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-3">
            <button
              type="button"
              onClick={handleClose}
              className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:bg-gray-50 transition-colors shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 bg-[#06530B] hover:bg-[#05290b] text-white rounded-xl text-[15px] font-bold transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              {isEditMode
                ? 'Save Changes'
                : (isSales ? '+ Create Sales Line' : '+ Create Service Line')}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

