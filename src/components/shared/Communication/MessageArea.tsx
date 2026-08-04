import React, { useState, useRef, useEffect } from 'react';
import { Paperclip, Smile, Mic, Video, Phone, ChevronDown, MoreVertical, AlertTriangle, Send, Eye } from 'lucide-react';
import { Dropdown, DropdownItem } from '@/components/ui/Dropdown/Dropdown';
import { PanelType } from './CommunicationLayout';
import { useCountdown } from './useCountdown';

interface MessageAreaProps {
  activeData: any;
  messages: any[];
  onSendMessage: (text: string) => void;
  onOpenDetails: () => void;
  options: DropdownItem[];
  panel: PanelType;
}

import MarkUrgentModal from './MarkUrgentModal';

export default function MessageArea({ activeData, messages, onSendMessage, onOpenDetails, options, panel }: MessageAreaProps) {
  const [inputText, setInputText] = useState('');
  const [isUrgent, setIsUrgent] = useState<boolean>(activeData?.badges || false);
  const [activeStatus, setActiveStatus] = useState<string>('WIP');
  const [isUrgentModalOpen, setIsUrgentModalOpen] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const countdown = useCountdown(activeData?.deadline);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeStr = file.size > 1024 * 1024 
        ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` 
        : `${(file.size / 1024).toFixed(1)} KB`;
      onSendMessage(`📎 Attachment: ${file.name} (${sizeStr})`);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sync urgent state when active chat changes
  useEffect(() => {
    setIsUrgent(activeData?.badges || false);
  }, [activeData?.id]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText.trim());
      setInputText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!activeData) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#F8FAFC]">
        <p className="text-[#64748B] font-medium">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="h-[96px] px-6 flex justify-between items-center border-b border-[#E2E8F0] bg-white shrink-0">
        <div className="flex items-center gap-4 cursor-pointer min-w-0 flex-1" onClick={onOpenDetails}>
          <div className="w-12 h-12 rounded-full p-[2.5px] figma-avatar-ring relative shrink-0">
            <div className="w-full h-full rounded-full p-0.5 bg-white flex items-center justify-center overflow-hidden">
              <img src={activeData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-bold text-[#0F172A] text-lg mb-1 break-words">{activeData.name}</h2>
            {activeData.type === 'group' ? (
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 hidden sm:flex">
                  <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=50" alt="" />
                  <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=51" alt="" />
                  <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=52" alt="" />
                  <div className="w-6 h-6 rounded-full border border-white bg-green-700 text-white text-[10px] font-bold flex items-center justify-center">7+</div>
                </div>

                <div className="bg-[#06530B] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {countdown.formatted || '0D 00H 00M 00S'}
                </div>

                <Dropdown
                  align="left"
                  trigger={
                    <div className="flex items-center gap-1 bg-[#ECEEF2] text-[#282828] text-[10px] font-bold px-2 py-0.5 rounded cursor-pointer">
                      {activeStatus} <ChevronDown className="w-3 h-3 text-[#282828]" />
                    </div>
                  }
                  items={[
                    { label: 'WIP', onClick: () => setActiveStatus('WIP') },
                    { label: 'Urgent', onClick: () => setActiveStatus('Urgent') },
                    { label: 'Late', onClick: () => setActiveStatus('Late') },
                    { label: 'Delivered', onClick: () => setActiveStatus('Delivered') }
                  ]}
                />

                {/* Panel-specific URGENT badge */}
                {panel === 'employee' && (
                  <div className="flex items-center gap-1 bg-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                    <AlertTriangle className="w-3 h-3 text-white" /> URGENT
                    <Eye className="w-3 h-3 text-white ml-0.5" />
                  </div>
                )}

                {(panel === 'team-leader' || panel === 'service-line') && (
                  <div
                    className="flex items-center gap-1.5 bg-[#FEE2E2] text-[#EF4444] border border-[#FCA5A5] text-[10px] font-bold px-2 py-0.5 rounded cursor-pointer select-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isUrgent) {
                        setIsUrgentModalOpen(true);
                      } else {
                        setIsUrgent(false);
                      }
                    }}
                    title={isUrgent ? 'Click to remove urgent' : 'Click to mark urgent'}
                  >
                    URGENT
                    <div className={`w-7 h-3.5 rounded-full relative transition-colors duration-200 shrink-0 ${
                      isUrgent ? 'bg-red-500' : 'bg-gray-300'
                    }`}>
                      <div className={`absolute top-0.5 w-2.5 h-2.5 rounded-full bg-white shadow-sm transition-all duration-200 ${
                        isUrgent ? 'right-0.5' : 'left-0.5'
                      }`} />
                    </div>
                  </div>
                )}

                {panel === 'super-admin' && (
                  <div className="flex items-center gap-1 bg-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                    <AlertTriangle className="w-3 h-3 text-white" /> URGENT
                    <Eye className="w-3 h-3 text-white ml-0.5" />
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs text-[#94A3B8]">Last seen 4 minute ago</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <Video className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <Phone className="w-4 h-4" />
          </button>
          <Dropdown 
            align="right"
            trigger={
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            }
            items={options}
          />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => {
          const showDate = msg.date;
          const isFirstInSequence = index === 0 || messages[index - 1].sender !== msg.sender;

          return (
            <React.Fragment key={msg.id}>
              {showDate && (
                <div className="flex justify-center my-6">
                  <div className="bg-[#F8FAFC] text-[#64748B] text-[10px] font-bold px-3 py-1 rounded-full border border-[#E2E8F0]">
                    {msg.date}
                  </div>
                </div>
              )}
              
              <div className={`flex gap-3 ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                {!msg.isMe && (
                  isFirstInSequence ? (
                    <img src={msg.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover shrink-0" />
                  ) : (
                    <div className="w-8 shrink-0" />
                  )
                )}
                
                <div className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'} max-w-[70%]`}>
                  {msg.isMe ? (
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-xs font-bold text-[#0F172A]">You</span>
                      <span className="text-[10px] font-medium text-[#94A3B8]">{msg.time}</span>
                    </div>
                  ) : (
                    isFirstInSequence && (
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-xs font-bold text-[#0F172A]">{msg.sender}</span>
                        <span className="text-[10px] font-medium text-[#94A3B8]">{msg.time}</span>
                      </div>
                    )
                  )}

                  <div className="group relative flex items-center gap-2">
                    {msg.isMe && (
                      <button className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition-opacity">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    )}
                    <div className={`px-4 py-2.5 rounded-2xl text-sm ${msg.isMe ? 'bg-[#06530B] text-white rounded-tr-none' : 'bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] rounded-tl-none'}`}>
                      {msg.text}
                    </div>
                    {msg.isMe && (
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 bg-gray-100 shrink-0 select-none shadow-sm">
                        <img src={msg.avatar} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                    {!msg.isMe && (
                      <button className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition-opacity">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Message Footer */}
      <form 
        onSubmit={handleSend}
        className="px-6 py-4 border-t border-[#eaecf0] bg-white flex items-center justify-between gap-3 shrink-0"
      >
        <div className="flex gap-3.5 items-center flex-1">
          <button 
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-1 text-[#a19791] hover:text-slate-800 rounded-lg cursor-pointer shrink-0 transition-colors"
            title="Attach file"
          >
            <Paperclip className="w-5 h-5" />
          </button>

          <input 
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          <input 
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Your message....."
            className="flex-1 text-[14px] font-sans text-gray-800 focus:outline-none placeholder:text-gray-400 py-1"
          />
        </div>

        <div className="flex gap-3.5 items-center shrink-0">
          <button 
            type="button"
            className="p-1 text-[#a19791] hover:text-slate-800 rounded-lg cursor-pointer transition-colors"
            title="Add Emoji"
          >
            <Smile className="w-5 h-5" />
          </button>
          
          {inputText.trim() ? (
            <button 
              type="submit"
              className="p-1.5 bg-[#06530b] text-white rounded-lg cursor-pointer shadow-sm hover:bg-emerald-950 transition-colors"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          ) : (
            <button 
              type="button"
              className="p-1 text-[#a19791] hover:text-slate-800 rounded-lg cursor-pointer transition-colors"
              title="Voice Message"
            >
              <Mic className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>

      {/* Mark Project as Urgent Modal */}
      <MarkUrgentModal
        isOpen={isUrgentModalOpen}
        onClose={() => setIsUrgentModalOpen(false)}
        onConfirm={(explanation, notifyAll) => {
          setIsUrgent(true);
        }}
      />
    </div>
  );
}
