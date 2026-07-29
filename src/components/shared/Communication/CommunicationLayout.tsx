import React, { useState, useEffect } from 'react';
import SidebarList from './SidebarList';
import MessageArea from './MessageArea';
import DetailsSidebar from './DetailsSidebar';
import CallDetailsArea from './CallDetailsArea';
import { ConfirmationModal } from '@/components/ui/Modal/ConfirmationModal';
import { UrgentActionModal } from '@/components/ui/Modal/UrgentActionModal';

export type PanelType = 'employee' | 'team-leader' | 'service-line' | 'super-admin' | 'sales';

interface ProfileInfo {
  name: string;
  role: string;
  avatar: string;
}

interface CommunicationLayoutProps {
  type: 'messages' | 'calls' | 'contacts' | 'favorites';
  panel?: PanelType;
  title?: string;
  profileInfo: ProfileInfo;
  items: any[];
  initialMessages?: any[];
}

export default function CommunicationLayout({ type, panel = 'employee', title, profileInfo, items, initialMessages = [] }: CommunicationLayoutProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Local state for isolated message feeds per activeId
  const [conversations, setConversations] = useState<Record<number, any[]>>({});

  // Modal States
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLeaveGroupModalOpen, setIsLeaveGroupModalOpen] = useState(false);
  const [isClearHistoryModalOpen, setIsClearHistoryModalOpen] = useState(false);
  const [isUrgentModalOpen, setIsUrgentModalOpen] = useState(false);

  const activeData = items.find(i => i.id === activeId);

  // Handle URL query parameter ?select=Name to select that item
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const selectName = params.get('select');
      if (selectName) {
        const found = items.find(i => i.name.toLowerCase() === selectName.toLowerCase());
        if (found) {
          setActiveId(found.id);
          // Clear query parameter from the browser URL address bar to avoid locking switches
          const newUrl = window.location.pathname;
          window.history.replaceState({}, '', newUrl);
          return;
        }
      }
    }
    // Default fallback to first item
    if (activeId === null && items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [items]);

  const currentMessages = activeId !== null
    ? (conversations[activeId] || (
        (type === 'messages' && activeId === 2)
          ? initialMessages
          : [
              {
                id: 1,
                sender: activeData?.name ?? 'User',
                time: '10:00 am',
                text: `Hello! I'm ${activeData?.name ?? 'User'}. How can I assist you today?`,
                avatar: activeData?.avatar ?? 'https://i.pravatar.cc/150',
                date: 'Today'
              }
            ]
      ))
    : [];

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.preview && item.preview.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (item.type && item.type.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSelect = (id: number) => {
    setActiveId(id);
    if (window.innerWidth < 1024) {
      setIsListOpen(false);
    }
    // Automatically open right panel for calls if needed, but keep the current state for messages/contacts
    if (type === 'calls') {
      setIsRightPanelOpen(true);
    }
  };

  const handleSendMessage = (text: string) => {
    if (activeId === null) return;
    
    const newMessage = {
      id: Date.now(),
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase(),
      text,
      avatar: profileInfo.avatar,
      isMe: true
    };
    
    setConversations(prev => ({
      ...prev,
      [activeId]: [...(prev[activeId] || currentMessages), newMessage]
    }));
  };

  const handleAction = (action: string) => {
    switch (action) {
      case 'clear': setIsClearHistoryModalOpen(true); break;
      case 'delete': setIsDeleteModalOpen(true); break;
      case 'leave': setIsLeaveGroupModalOpen(true); break;
      case 'urgent': setIsUrgentModalOpen(true); break;
    }
  };

  const getOptions = () => {
    if (type === 'messages') {
      return [
        { label: 'Mark all as read', onClick: () => {} },
        { label: 'Show unread chat', onClick: () => {} },
        { label: 'Show archives', warning: true, onClick: () => {} },
      ];
    }
    if (type === 'calls') {
      return [
        { label: 'Mark all as read', onClick: () => {} },
        { label: 'Show missed calls', onClick: () => {} },
        { label: 'Clear call history', danger: true, onClick: () => {} },
      ];
    }
    return [
      { label: 'Add new contact', onClick: () => {} },
      { label: 'Import contacts', onClick: () => {} },
    ];
  };

  const getHeaderOptions = () => {
    // "Mark as urgent" only available to super-admin, and only for group chats
    const urgentOption = (panel === 'super-admin' && activeData?.type === 'group')
      ? [{ label: 'Mark as urgent', danger: true, onClick: () => handleAction('urgent') }]
      : [];

    if (activeData?.type === 'individual') {
      return [
        { label: 'Mute chat', onClick: () => {} },
        { label: 'View info', onClick: () => setIsRightPanelOpen(true) },
        { label: 'Add favorite', onClick: () => {} },
        { label: 'Archive chat', onClick: () => {} },
        { label: 'Clear chat', danger: true, onClick: () => handleAction('clear') },
        { label: 'Delete chat', danger: true, onClick: () => handleAction('delete') }
      ];
    }
    return [
      { label: 'Mute chat', onClick: () => {} },
      { label: 'View info', onClick: () => setIsRightPanelOpen(true) },
      { label: 'Add favorite', onClick: () => {} },
      { label: 'Archive chat', onClick: () => {} },
      { label: 'Clear chat', danger: true, onClick: () => handleAction('clear') },
      { label: 'Leave group', danger: true, onClick: () => handleAction('leave') },
      ...urgentOption
    ];
  };

  const listTitle = title ?? (type === 'messages' ? 'Messages' : type === 'calls' ? 'Recent Call' : type === 'favorites' ? 'Favorites' : 'Contacts');

  return (
    <div className="flex h-full max-w-full overflow-hidden w-full">
      {/* Left Sidebar */}
      <div className={`w-full lg:w-[380px] border-r border-[#E2E8F0] flex-col h-full bg-white shrink-0 ${isListOpen ? 'flex' : 'hidden lg:flex'}`}>
        <div className="h-[96px] px-5 flex items-center gap-3 border-b border-[#E2E8F0] shrink-0">
          <div className="w-12 h-12 rounded-full border-2 border-green-500 p-0.5 shrink-0">
            <img src={profileInfo.avatar} alt="Me" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-bold text-[#0F172A] text-lg break-words">{profileInfo.name}</h2>
            <p className="text-xs text-[#64748B]">{profileInfo.role}</p>
          </div>
        </div>

        <div className="px-5 py-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {[1,2,3,4].map(i => (
            <div key={i} className="relative shrink-0">
              <img src={`https://i.pravatar.cc/150?u=${i+40}`} alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          ))}
          <div className="w-10 h-10 shrink-0 rounded-full bg-green-50 flex items-center justify-center text-green-700 font-bold text-xs shadow-sm">
            18+
          </div>
        </div>

        <SidebarList 
          title={listTitle}
          type={type}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          items={filteredItems}
          activeId={activeId}
          onSelect={handleSelect}
          options={getOptions()}
        />
      </div>

      {/* Middle/Right Area Container */}
      <div className={`flex-1 flex overflow-hidden relative ${activeData ? 'flex' : 'hidden lg:flex'}`}>
        
        {type === 'calls' ? (
          <CallDetailsArea 
            activeData={activeData}
            options={getOptions()}
          />
        ) : (
          <>
            {/* Messages Area */}
            <div className={`flex-1 ${isRightPanelOpen ? 'hidden xl:flex' : 'flex'}`}>
              <MessageArea 
                activeData={activeData}
                messages={currentMessages}
                onSendMessage={handleSendMessage}
                onOpenDetails={() => setIsRightPanelOpen(true)}
                options={getHeaderOptions()}
                panel={panel}
              />
            </div>
            
            {/* Right Sidebar Details */}
            {activeData && isRightPanelOpen && (
              <DetailsSidebar 
                activeData={activeData}
                onClose={() => setIsRightPanelOpen(false)}
                onAction={handleAction}
                panel={panel}
              />
            )}
          </>
        )}
      </div>

      {/* Modals */}
      {activeData && (
        <>
          <ConfirmationModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={() => console.log('Deleted item')}
            title={`Delete ${type === 'calls' ? 'call' : 'chat'} with ${activeData.name}?`}
            description="This action cannot be undone."
            confirmText="Delete"
          />
          <ConfirmationModal
            isOpen={isLeaveGroupModalOpen}
            onClose={() => setIsLeaveGroupModalOpen(false)}
            onConfirm={() => console.log('Left group')}
            title={`Leave group ${activeData.name}?`}
            description="You won't be able to see later messages."
            confirmText="Leave group"
          />
          <ConfirmationModal
            isOpen={isClearHistoryModalOpen}
            onClose={() => setIsClearHistoryModalOpen(false)}
            onConfirm={() => console.log('Cleared history')}
            title="Clear history?"
            description="All messages/history will be removed."
            confirmText="Clear"
          />
          <UrgentActionModal
            isOpen={isUrgentModalOpen}
            onClose={() => setIsUrgentModalOpen(false)}
            onConfirm={(explanation, notifyAll) => {
              console.log('Marked as urgent', { explanation, notifyAll });
            }}
          />
        </>
      )}
    </div>
  );
}
