// ─────────────────────────────────────────────
//  useChatbot.js
//  Hook com toda a lógica de estado e chamadas à API Gemini.
//  Nenhum JSX aqui — só JavaScript puro.
// ─────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react';
import { SYSTEM_PROMPT } from './chatbotKnowledge';

const API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const INITIAL_MESSAGE = {
  type: 'bot',
  text: 'Olá! Sou o assistente do Davi. Como posso te ajudar?',
  isInitial: true,
};

export function useChatbot() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const [isOpen, setIsOpen]       = useState(false);
  const [messages, setMessages]   = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef            = useRef(null);

  // Scroll para a última mensagem sempre que o array muda
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Bloqueia scroll do body enquanto o drawer está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const openChat  = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  const sendMessage = async (messageText = null) => {
    const text = (messageText || inputValue).trim();
    if (!text) return;

    if (!apiKey) {
      console.error('VITE_GEMINI_API_KEY não configurada em .env.local');
      return;
    }

    // Adiciona mensagem do usuário e limpa o input
    setMessages(prev =>
      prev.filter(m => !m.isInitial).concat({ type: 'user', text })
    );
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `${SYSTEM_PROMPT}\n\nPergunta: ${text}` }],
          }],
          generationConfig: { maxOutputTokens: 1024, temperature: 0.7 },
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error?.message || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        'Não consegui gerar uma resposta. Tente novamente.';

      setMessages(prev => [...prev, { type: 'bot', text: reply }]);
    } catch (err) {
      console.error('Gemini API error:', err);

      let msg = 'Erro ao processar sua mensagem.';
      if (err.message.includes('429'))
        msg = 'Muitas requisições. Aguarde alguns segundos e tente novamente.';
      else if (err.message.toLowerCase().includes('api key'))
        msg = 'Chave de API inválida. Verifique o arquivo .env.local.';

      setMessages(prev => [...prev, { type: 'bot', text: msg }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const isInitialState =
    messages.length === 1 && messages[0].isInitial;

  return {
    isOpen,
    openChat,
    closeChat,
    messages,
    inputValue,
    setInputValue,
    isLoading,
    isInitialState,
    messagesEndRef,
    sendMessage,
    handleKeyDown,
  };
}