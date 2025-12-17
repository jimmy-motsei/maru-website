'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minus } from 'lucide-react';
import ChatMessage, { TypingIndicator } from './ChatMessage';
import LeadCaptureForm from './LeadCaptureForm';
import { Message, LeadData } from '@/lib/types';

// Storage keys
const STORAGE_KEYS = {
  DISMISSED: 'maru-chat-dismissed',
  MINIMIZED: 'maru-chat-minimized',
  CHAT_STARTED: 'maru-chat-started',
};

// Challenge options for greeting
const CHALLENGE_OPTIONS = [
  { id: 'lead-gen', label: 'Lead Generation', message: "I'm interested in improving our lead generation" },
  { id: 'sales-auto', label: 'Sales Automation', message: "I'd like to learn about sales automation" },
  { id: 'crm-setup', label: 'CRM Setup', message: "I need help with CRM setup and optimization" },
  { id: 'browsing', label: 'Just Browsing', message: "I'm just exploring your services" },
];

// Chat widget states
type ChatState = 'minimized' | 'greeting' | 'active';

interface ProactiveChatWidgetProps {
  triggerOnScroll?: boolean; // For homepage
  scrollTargetId?: string;   // Section ID to observe
  triggerDelay?: number;     // Delay in ms
}

export default function ProactiveChatWidget({
  triggerOnScroll = false,
  scrollTargetId = 'process',
  triggerDelay = 500,
}: ProactiveChatWidgetProps) {
  const [chatState, setChatState] = useState<ChatState>('minimized');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [isOnLightBackground, setIsOnLightBackground] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const bgObserverRef = useRef<IntersectionObserver | null>(null);

  // Check if greeting should auto-show
  const shouldShowGreeting = useCallback((): boolean => {
    if (typeof window === 'undefined') return false;
    
    // Check if user dismissed within 24 hours
    const dismissedTime = localStorage.getItem(STORAGE_KEYS.DISMISSED);
    if (dismissedTime && (Date.now() - parseInt(dismissedTime)) < 86400000) {
      return false;
    }
    
    // Check if minimized this session
    if (sessionStorage.getItem(STORAGE_KEYS.MINIMIZED) === 'true') {
      return false;
    }
    
    // Check if chat already started this session
    if (sessionStorage.getItem(STORAGE_KEYS.CHAT_STARTED) === 'true') {
      return false;
    }
    
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    
    return true;
  }, []);

  // Homepage: Intersection Observer for scroll-based trigger
  useEffect(() => {
    if (!triggerOnScroll || hasTriggered) return;
    
    const targetElement = document.getElementById(scrollTargetId);
    if (!targetElement) return;
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setHasTriggered(true);
            setTimeout(() => {
              if (shouldShowGreeting()) {
                setChatState('greeting');
              }
            }, triggerDelay);
            observerRef.current?.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    
    observerRef.current.observe(targetElement);
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, [triggerOnScroll, scrollTargetId, triggerDelay, hasTriggered, shouldShowGreeting]);

  // Non-homepage: Time-based trigger
  useEffect(() => {
    if (triggerOnScroll || hasTriggered) return;
    
    // Wait for document to be fully loaded
    if (document.readyState !== 'complete') {
      const handleLoad = () => {
        setTimeout(() => {
          if (shouldShowGreeting()) {
            setChatState('greeting');
            setHasTriggered(true);
          }
        }, 3000);
      };
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    } else {
      const timer = setTimeout(() => {
        if (shouldShowGreeting()) {
          setChatState('greeting');
          setHasTriggered(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [triggerOnScroll, hasTriggered, shouldShowGreeting]);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Background color detection for chat widget styling
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Find all sections with white backgrounds
    const whiteSections = document.querySelectorAll(
      'section.bg-white, [class*="bg-white"]'
    );
    
    if (whiteSections.length === 0) return;
    
    // Create observer to detect when chat widget overlaps with white sections
    const checkBackgroundColor = () => {
      const chatPosition = {
        bottom: 20, // 20px from bottom
        right: 20,  // 20px from right
      };
      
      const viewportHeight = window.innerHeight;
      const chatY = viewportHeight - chatPosition.bottom - 30; // approximate center of chat icon
      const chatX = window.innerWidth - chatPosition.right - 30;
      
      let isOnWhite = false;
      
      whiteSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if chat widget overlaps with this section
        if (
          chatY >= rect.top &&
          chatY <= rect.bottom
        ) {
          isOnWhite = true;
        }
      });
      
      setIsOnLightBackground(isOnWhite);
    };
    
    // Check on scroll
    const handleScroll = () => {
      requestAnimationFrame(checkBackgroundColor);
    };
    
    // Initial check
    checkBackgroundColor();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [chatState]);

  // Initialize chat with greeting
  const initializeChat = useCallback((initialMessage?: string) => {
    sessionStorage.setItem(STORAGE_KEYS.CHAT_STARTED, 'true');
    
    const greeting: Message = {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm the Maru AI Assistant. How can I help you grow your business today? 🚀",
      timestamp: new Date(),
    };
    
    if (initialMessage) {
      const userMsg: Message = {
        id: '2',
        role: 'user',
        content: initialMessage,
        timestamp: new Date(),
      };
      setMessages([greeting, userMsg]);
      // Trigger bot response
      handleBotResponse([greeting, userMsg]);
    } else {
      setMessages([greeting]);
    }
  }, []);

  // Handle option button click
  const handleOptionClick = (option: typeof CHALLENGE_OPTIONS[0]) => {
    setChatState('active');
    initializeChat(option.message);
  };

  // Handle minimize
  const handleMinimize = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEYS.MINIMIZED, 'true');
    }
    setShowBadge(true);
    setChatState('minimized');
  };

  // Handle dismiss (close)
  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEYS.DISMISSED, Date.now().toString());
    setChatState('minimized');
  };

  // Handle icon click - always opens chat
  const handleIconClick = () => {
    // Clear flags when user manually opens
    sessionStorage.removeItem(STORAGE_KEYS.MINIMIZED);
    localStorage.removeItem(STORAGE_KEYS.DISMISSED);
    
    if (messages.length > 0) {
      // Resume existing chat
      setChatState('active');
    } else {
      // Start fresh chat directly
      setChatState('active');
      initializeChat();
    }
  };

  // Handle bot response
  const handleBotResponse = async (currentMessages: Message[]) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: currentMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);

      // Show lead form after conversation
      if (currentMessages.length >= 5 && !showLeadForm) {
        if (checkIfShouldShowForm(data.response)) {
          setTimeout(() => setShowLeadForm(true), 1000);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again or email us at hello@maruonline.com",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle send message
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    handleBotResponse(updatedMessages);
  };

  const checkIfShouldShowForm = (response: string): boolean => {
    const keywords = ['consultation', 'schedule', 'book', 'contact', 'speak', 'connect', 'pricing', 'quote'];
    return keywords.some((keyword) => response.toLowerCase().includes(keyword));
  };

  const handleLeadSubmit = async (leadData: Partial<LeadData>) => {
    try {
      const transcript = messages.map((m) => `${m.role === 'user' ? 'Visitor' : 'Bot'}: ${m.content}`).join('\n');

      const fullLeadData: LeadData = {
        ...leadData as LeadData,
        conversationTranscript: transcript,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        timestamp: new Date(),
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullLeadData),
      });

      if (!response.ok) throw new Error('Failed to submit lead');

      setShowLeadForm(false);

      const confirmationMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Thank you, ${leadData.name}! 🎉 Our team will reach out to you at ${leadData.email} within 24 hours. Is there anything else I can help you with?`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, confirmationMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Sorry, there was an error. Please email us directly at hello@maruonline.com",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  // Animation variants
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    },
    exit: { scale: 0, opacity: 0 }
  };

  const greetingVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.34, 1.56, 0.64, 1] // bounce
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const chatVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.95 }
  };

  return (
    <>
      {/* State 1: Minimized Icon */}
      <AnimatePresence>
        {chatState === 'minimized' && (
          <motion.button
            key="chat-icon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleIconClick}
            className={`fixed bottom-5 right-5 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
              isOnLightBackground 
                ? 'bg-[#050505] shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
                : 'bg-[#22d3ee]'
            }`}
            style={{ 
              animation: isOnLightBackground ? 'none' : 'pulse-glow 2s ease-in-out infinite',
            }}
            aria-label="Open chat assistant"
          >
            <MessageCircle 
              size={28} 
              className={isOnLightBackground ? 'text-white' : 'text-[#050505]'} 
            />
            {/* Notification badge if minimized from greeting */}
            {showBadge && (
              <span className={`absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 ${
                isOnLightBackground ? 'border-white' : 'border-[#050505]'
              }`} />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* State 2: Greeting Bubble */}
      <AnimatePresence>
        {chatState === 'greeting' && (
          <motion.div
            key="greeting-bubble"
            variants={greetingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-label="Chat assistance"
            aria-live="polite"
            className="fixed bottom-5 right-5 z-50 w-[320px] max-w-[calc(100vw-40px)] md:w-[320px]"
          >
            <div className="bg-[#111111] border border-white/10 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Header */}
              <div className="px-4 pt-4 pb-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#22d3ee] rounded-full flex items-center justify-center">
                    <MessageCircle size={20} className="text-[#050505]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Maru AI</h3>
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Online
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleMinimize}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Minimize chat"
                  >
                    <Minus size={16} />
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close chat"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-lg font-semibold text-white mb-2">
                  👋 Ready to level up your marketing?
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Quick question: What's your biggest growth challenge right now?
                </p>

                {/* Option Buttons - 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {CHALLENGE_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionClick(option)}
                      className="px-3 py-2.5 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* State 3: Active Chat */}
      <AnimatePresence>
        {chatState === 'active' && (
          <motion.div
            key="active-chat"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-5 right-5 z-50 w-[400px] max-w-[calc(100vw-40px)] h-[600px] max-h-[calc(100vh-40px)] glass rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#050505] to-[#111111] px-5 py-4 flex items-center justify-between border-b border-[#22d3ee]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#22d3ee] rounded-full flex items-center justify-center">
                  <MessageCircle size={22} className="text-[#050505]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Maru AI Assistant</h3>
                  <p className="text-xs text-gray-400">Responds instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleMinimize}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Minimize chat"
                >
                  <Minus size={18} />
                </button>
                <button
                  onClick={() => setChatState('minimized')}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Close chat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isLoading && <TypingIndicator />}

              <AnimatePresence>
                {showLeadForm && (
                  <LeadCaptureForm
                    onSubmit={handleLeadSubmit}
                    onClose={() => setShowLeadForm(false)}
                  />
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-5 py-4 border-t border-gray-800">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-[#050505] border border-gray-700 rounded-lg focus:border-[#22d3ee] focus:outline-none text-white placeholder-gray-500 disabled:opacity-50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-[#22d3ee] text-[#050505] rounded-lg hover:bg-[#5cc5d1] disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Maru Online
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse animation styles */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.4);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(34, 211, 238, 0);
          }
        }
      `}</style>
    </>
  );
}
