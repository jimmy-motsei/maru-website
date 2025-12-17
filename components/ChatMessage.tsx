'use client';

import { Message } from '@/lib/types';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

// Solid dark color palette matching ProactiveChatWidget
const COLORS = {
  background: '#2D2D2D',
  backgroundLight: '#3A3A3A',
  backgroundLighter: '#404040',
  text: '#FFFFFF',
  textSecondary: '#B8B8B8',
  accent: '#22d3ee',
  accentDark: '#050505',
  userBubble: '#22d3ee',
};

interface ChatMessageProps {
  message: Message;
  isLastMessage?: boolean;
}

export default function ChatMessage({ message, isLastMessage }: ChatMessageProps) {
  const isBot = message.role === 'assistant';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div className={`flex ${isBot ? 'flex-row' : 'flex-row-reverse'} max-w-[80%] items-start gap-2`}>
        {/* Avatar */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: isBot ? COLORS.accent : COLORS.backgroundLighter,
            color: isBot ? COLORS.accentDark : COLORS.textSecondary,
          }}
        >
          {isBot ? <Bot size={18} /> : <User size={18} />}
        </div>

        {/* Message Content */}
        <div
          className="px-4 py-3 rounded-2xl"
          style={{
            backgroundColor: isBot ? COLORS.backgroundLight : COLORS.userBubble,
            color: isBot ? COLORS.text : COLORS.accentDark,
            borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
          }}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          
          {/* Timestamp */}
          <p 
            className="text-xs mt-1"
            style={{ 
              color: isBot ? COLORS.textSecondary : 'rgba(0,0,0,0.5)',
              opacity: 0.8,
            }}
          >
            {new Date(message.timestamp).toLocaleTimeString('en-ZA', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Typing indicator component with solid background
 */
export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex justify-start mb-4"
    >
      <div className="flex items-start gap-2">
        <div 
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: COLORS.accent }}
        >
          <Bot size={18} style={{ color: COLORS.accentDark }} />
        </div>
        <div 
          className="px-4 py-3 rounded-2xl"
          style={{ 
            backgroundColor: COLORS.backgroundLight,
            borderRadius: '4px 16px 16px 16px',
          }}
        >
          <div className="flex gap-1.5">
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ 
                backgroundColor: COLORS.accent,
                animation: 'typing 1.4s infinite',
                animationDelay: '0ms',
              }} 
            />
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ 
                backgroundColor: COLORS.accent,
                animation: 'typing 1.4s infinite',
                animationDelay: '200ms',
              }} 
            />
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ 
                backgroundColor: COLORS.accent,
                animation: 'typing 1.4s infinite',
                animationDelay: '400ms',
              }} 
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes typing {
          0%, 60%, 100% { 
            opacity: 0.3;
            transform: scale(0.8);
          }
          30% { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </motion.div>
  );
}
