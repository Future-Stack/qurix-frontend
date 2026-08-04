import React, { useState, useRef, useEffect } from 'react';
import { X, Link as LinkIcon, UploadCloud, FileText, ChevronDown, Search, Check } from 'lucide-react';

export interface ProjectOption {
  id: string;
  orderId: string;
  clientName: string;
  profileName: string;
}

interface AddIssueModalProps {
  isOpen: boolean;
  projectId: string;
  orderId: string;
  projectsList?: ProjectOption[];
  onClose: () => void;
  onSubmit: (issueData: {
    projectId: string;
    orderId: string;
    explanation: string;
    links: string[];
    files: Array<{ name: string; size: string }>;
  }) => void;
}

export default function AddIssueModal({
  isOpen,
  projectId,
  orderId,
  projectsList = [],
  onClose,
  onSubmit
}: AddIssueModalProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectId || projectsList[0]?.id || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projectSearch, setProjectSearch] = useState('');

  const [explanation, setExplanation] = useState('');
  const [linkInput, setLinkInput] = useState('');
  const [links, setLinks] = useState<string[]>([]);
  const [files, setFiles] = useState<Array<{ name: string; size: string }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectId) {
      setSelectedProjectId(projectId);
    } else if (projectsList.length > 0 && projectsList[0]?.id) {
      setSelectedProjectId(projectsList[0].id);
    }
  }, [projectId, projectsList]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const currentProject = projectsList.find(p => p.id === selectedProjectId) || {
    id: projectId || 'proj-1',
    orderId: orderId || 'FO2D9BC6E142',
    clientName: 'tprice34',
    profileName: 'tech_omega'
  };

  const filteredProjects = projectsList.filter(p => {
    const query = projectSearch.toLowerCase();
    return (
      p.clientName.toLowerCase().includes(query) ||
      p.profileName.toLowerCase().includes(query) ||
      p.orderId.toLowerCase().includes(query)
    );
  });

  const handleAddLink = () => {
    if (!linkInput.trim()) return;
    const url = linkInput.startsWith('http') ? linkInput : `https://${linkInput}`;
    setLinks([...links, url]);
    setLinkInput('');
  };

  const handleKeyDownLink = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddLink();
    }
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      }));
      setFiles([...files, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      projectId,
      orderId,
      explanation,
      links,
      files
    });
    // Reset and close
    setExplanation('');
    setLinks([]);
    setFiles([]);
    setLinkInput('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="bg-[#f7f5f4] w-full max-w-[500px] rounded-[15px] p-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.15)] flex flex-col gap-[14px] relative select-none animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-['Roboto'] font-bold text-[18px] text-[#06530b]">
            Add Project Issue
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-200/60"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Divider line */}
        <div className="h-px bg-[#d6d6d6] w-full" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
          {/* Section 0: Select Project */}
          <div className="flex flex-col gap-[6px] relative" ref={dropdownRef}>
            <label className="font-['Roboto'] font-bold text-[14px] text-[#06530b]">
              Select Project <span className="text-red-500">*</span>
            </label>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#ebebeb] border border-[#d6d6d6] hover:border-[#06530b] rounded-[8px] px-3.5 py-2.5 text-sm text-[#0F172A] flex justify-between items-center w-full cursor-pointer font-medium transition-all"
            >
              <span className="truncate font-mono">
                {`${currentProject.clientName} || ${currentProject.profileName} || ${currentProject.orderId}`}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ${isDropdownOpen ? 'rotate-180 text-[#06530b]' : ''}`} />
            </button>

            {/* Dropdown Menu matching Figma 764:1481 */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#f0f2f5] border border-[#d6d6d6] rounded-[12px] shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                {/* Search Header Input */}
                <div className="p-2.5 border-b border-[#e0e0e0] bg-[#e6e8ec] flex items-center gap-2">
                  <Search className="w-4 h-4 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full bg-transparent text-sm text-[#0F172A] placeholder:text-gray-400 outline-none font-sans"
                    autoFocus
                  />
                </div>

                {/* Projects List */}
                <div className="max-h-48 overflow-y-auto py-1">
                  {filteredProjects.length === 0 ? (
                    <div className="px-3.5 py-2.5 text-xs text-gray-400 text-center font-sans">
                      No matching projects
                    </div>
                  ) : (
                    filteredProjects.map((p) => {
                      const isSelected = p.id === currentProject.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => {
                            setSelectedProjectId(p.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 text-[13px] font-mono flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#e0edd8] text-[#06530b] font-bold'
                              : 'text-[#334155] hover:bg-[#e4e6eb]'
                          }`}
                        >
                          <span className="truncate">{`${p.clientName} || ${p.profileName} || ${p.orderId}`}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#06530b] shrink-0 ml-2" />}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Section 1: Explain */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-['Roboto'] font-semibold text-[14px] text-[#06530b]">
              Explain <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Briefly describe the issue..."
                rows={3}
                className="w-full bg-[#ebebeb] border border-[#d6d6d6] rounded-[6px] p-[10px] text-[14px] text-[#333333] placeholder:text-[#b3b3b3] focus:outline-none focus:border-[#06530b] resize-none font-['Roboto']"
                required
              />
            </div>
          </div>

          {/* Section 2: Add Link */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-['Roboto'] font-semibold text-[14px] text-[#06530b]">
              Add Link
            </label>
            <div className="flex items-center gap-2 bg-[#ebebeb] border border-[#d6d6d6] rounded-[6px] px-3 py-2">
              <LinkIcon className="size-4 text-[#06530b] shrink-0" />
              <input
                type="text"
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                onKeyDown={handleKeyDownLink}
                placeholder="Enter url here if applicable..."
                className="w-full bg-transparent text-[14px] text-[#333333] placeholder:text-[#b3b3b3] focus:outline-none font-['Roboto']"
              />
              {linkInput.trim() && (
                <button
                  type="button"
                  onClick={handleAddLink}
                  className="text-xs font-semibold text-[#06530b] hover:underline"
                >
                  Add
                </button>
              )}
            </div>

            {/* Added Links List */}
            {links.length > 0 && (
              <div className="flex flex-col gap-1.5 pt-1">
                {links.map((link, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2 text-[13px] text-[#474747] font-['Roboto']">
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="truncate hover:underline text-blue-600 max-w-[400px]"
                    >
                      {link}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleRemoveLink(idx)}
                      className="text-red-500 hover:text-red-700 p-0.5"
                    >
                      <X className="size-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 3: File Upload Area */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            multiple
            className="hidden"
          />
          <div
            onClick={() => fileInputRef.current?.click()}
            className="bg-[#f0f0f0] border-1.5 border-dashed border-[#d6d6d6] hover:border-[#06530b] rounded-[6px] p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors group min-h-[80px]"
          >
            <div className="flex items-center gap-3">
              <UploadCloud className="size-7 text-[#06530b] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-['Roboto'] font-semibold text-[14px] text-[#06530b]">
                  Drag & drop here or <span className="underline">browse files</span>
                </p>
                <p className="font-['Roboto'] text-[11px] text-[#474747] mt-0.5">
                  or click to browse from your computer
                </p>
              </div>
            </div>
          </div>

          {/* Selected files list */}
          {files.length > 0 && (
            <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
              {files.map((file, idx) => (
                <div key={idx} className="bg-white border border-[#d6d6d6] px-2.5 py-1 rounded-[6px] text-xs font-medium text-[#333] flex items-center gap-2">
                  <FileText className="size-3.5 text-[#06530b]" />
                  <span className="truncate max-w-[180px]">{file.name}</span>
                  <span className="text-[10px] text-gray-400">({file.size})</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(idx)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Divider line */}
          <div className="h-px bg-[#d6d6d6] w-full mt-1" />

          {/* Footer Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#383838]/10 hover:bg-[#383838]/20 text-[#383838] font-['Roboto'] text-[14px] font-normal px-[18px] py-[7px] rounded-full transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#06530b] hover:bg-emerald-900 text-white font-['Roboto'] text-[14px] font-medium px-[18px] py-[7px] rounded-full shadow-sm transition-colors cursor-pointer"
            >
              Add Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
