import React, { useState, useRef, useEffect } from 'react';

import {
  X,
  ArrowUp,
  Sparkles,
  User,
  Briefcase,
  Code2,
  Phone,
} from 'lucide-react';

import AiIcon from '../../assets/img/ai.png';

import TypewriterText from '../../components/chatbot/TypewriterText';

import AnimatedOrb from '../../components/chatbot/AnimatedOrb';

import {
  CHATBOT_ANIMATIONS,
} from '../../components/scroll/chatbotAnimations';

import { SYSTEM_PROMPT } from '../../components/scroll/chatbotKnowledge';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const quickMessages = [
    {
      label: 'Quem é você?',
      text: 'Quem é você?',
      icon: <User size={14} />,
    },
    {
      label: 'Projetos',
      text: 'Me conta sobre La Casa Di Frango',
      icon: <Briefcase size={14} />,
    },
    {
      label: 'Skills',
      text: 'Quais tecnologias você usa?',
      icon: <Code2 size={14} />,
    },
    {
      label: 'Contato',
      text: 'Como posso entrar em contato?',
      icon: <Phone size={14} />,
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? 'hidden'
      : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const systemPrompt = SYSTEM_PROMPT;

  const handleSendMessage = async (
    messageText = null
  ) => {
    const textToSend =
      messageText || inputValue.trim();

    if (!textToSend || !apiKey) return;

    setMessages((prev) => [
      ...prev,
      {
        type: 'user',
        text: textToSend,
      },
    ]);

    setInputValue('');

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${systemPrompt}\n\nPergunta do usuário: ${textToSend}`,
                  },
                ],
              },
            ],
            generationConfig: {
              maxOutputTokens: 1024,
              temperature: 0.7,
            },
          }),
        }
      );

      const data = await response.json();

      const botResponse =
        data?.candidates?.[0]?.content?.parts?.[0]
          ?.text ||
        'Não consegui gerar uma resposta agora.';

      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: botResponse,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: 'Erro ao processar sua mensagem.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();

      handleSendMessage();
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      {!isOpen && (
        <div className="fixed bottom-7 left-1/2 z-40 -translate-x-1/2">
          <button
            onClick={() => setIsOpen(true)}
            className="
              group
              relative
              flex
              cursor-pointer
              items-center
              gap-3
              overflow-hidden
              rounded-full
              border
              border-white/10
              bg-black
              px-4
              py-2
              sm:px-5
              sm:py-3
              text-sm
              font-medium
              text-white
              shadow-[0_10px_40px_rgba(0,0,0,0.45)]
              transition-all
              duration-300
              active:scale-95
              sm:hover:-translate-y-1
              sm:hover:bg-gray-900
            "
          >
            <div
              className="
                relative
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
              "
            >
              <img
                src={AiIcon}
                alt="AI"
                className="h-4 w-4 object-contain"
              />
            </div>

            <span>Saiba mais</span>

            <Sparkles
              size={14}
              className="
                opacity-70
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />
          </button>
        </div>
      )}

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/40
          backdrop-blur-sm
          transition-all
          duration-500
          ${
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      />

      {/* CHAT */}
      <div
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-full
          w-full
          sm:w-96
          md:max-w-[420px]
          flex-col
          border-l
          border-black/5
          bg-white
          transition-transform
          duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            isOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-center
            justify-end
            border-b
            border-black/5
            px-3
            py-3
            sm:px-5
            sm:py-5
          "
        >
          <button
            onClick={() => setIsOpen(false)}
            className="
              flex
              h-11
              w-11
              cursor-pointer
              items-center
              justify-center
              rounded-2xl
              border
              border-black/5
              bg-white
              text-gray-600
              transition-all
              duration-300
              active:scale-95
              sm:hover:scale-105
              sm:hover:text-black
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* HERO */}
        {messages.length === 0 && (
          <div
            className="
              flex
              flex-col
              items-center
              px-4
              py-6
              sm:px-8
              sm:pt-8
              sm:pb-6
            "
          >
            {/* Sphere */}
            <AnimatedOrb />

            {/* TEXT */}
            <div className="max-w-[320px] text-center">
              <TypewriterText
                text="Olá, eu sou o assistente do Davi."
                isActive={isOpen}
                className="
                  text-xl
                  sm:text-2xl
                  md:text-[24px]
                  font-semibold
                  leading-[1.2]
                  tracking-[-0.03em]
                  text-black
                "
              />

              <p
                className="
                  animate-fade-text
                  mt-2
                  sm:mt-3
                  text-xs
                  sm:text-[13px]
                  leading-6
                  text-gray-500
                "
              >
                Faça perguntas sobre projetos,
                tecnologias, experiências ou
                formas de contato.
              </p>
            </div>
          </div>
        )}

        {/* MESSAGES */}
        <div
          className="
            chatbot-scroll
            flex-1
            overflow-y-auto
            px-3
            py-2
            sm:px-4
            sm:py-3
          "
        >
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`
                  animate-message
                  flex
                  ${
                    message.type === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                  }
                `}
              >
                <div
                  className={`
                    max-w-[85%]
                    rounded-2xl
                    sm:rounded-3xl
                    px-3
                    py-2
                    sm:px-4
                    sm:py-3
                    text-xs
                    sm:text-[14px]
                    leading-6
                    sm:leading-7
                    ${
                      message.type === 'user'
                        ? 'bg-black text-white'
                        : 'bg-zinc-100 text-zinc-800'
                    }
                  `}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-2xl
                    bg-gray-100
                    px-4
                    py-3
                  "
                >
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className="
                        h-2
                        w-2
                        animate-bounce-soft
                        rounded-full
                        bg-gray-500
                      "
                      style={{
                        animationDelay: `${dot * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* QUICK ACTIONS */}
        {messages.length === 0 && (
          <div
            className="
              border-t
              border-black/5
              px-3
              py-2
              sm:px-4
              sm:py-2
            "
          >
            <p
              className="
                mb-1
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-gray-500
              "
            >
              Sugestões
            </p>

            <div className="grid grid-cols-2 gap-2">
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleSendMessage(msg.text)
                  }
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-black/5
                    bg-white
                    px-3
                    py-2
                    sm:px-4
                    sm:py-3
                    text-xs
                    sm:text-sm
                    font-medium
                    text-gray-700
                    transition-all
                    duration-300
                    active:scale-95
                    active:bg-gray-100
                    sm:hover:-translate-y-1
                    sm:hover:bg-gray-50
                    sm:hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      sm:h-7
                      sm:w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-100
                    "
                  >
                    {msg.icon}
                  </span>

                  <span>{msg.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* INPUT */}
        <div
          className="
            border-t
            border-black/5
            bg-white
            px-3
            py-2
            sm:px-4
            sm:py-2
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              rounded-xl
              sm:rounded-2xl
              border
              border-black/5
              bg-white
              p-2
              sm:p-2
            "
          >
            <input
              type="text"
              value={inputValue}
              disabled={isLoading}
              placeholder="Sua pergunta..."
              onChange={(e) =>
                setInputValue(e.target.value)
              }
              onKeyDown={handleKeyPress}
              className="
                flex-1
                bg-transparent
                px-2
                sm:px-3
                py-2
                text-sm
                sm:text-base
                text-gray-800
                outline-none
                placeholder:text-gray-400
              "
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={
                isLoading || !inputValue.trim()
              }
              className="
                flex
                h-10
                w-10
                sm:h-11
                sm:w-11
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                sm:rounded-xl
                bg-black
                text-white
                transition-all
                duration-300
                active:scale-90
                sm:hover:scale-105
                sm:hover:bg-gray-900
                disabled:pointer-events-none
                disabled:opacity-40
              "
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>

      <style>{CHATBOT_ANIMATIONS}</style>
    </>
  );
};

export default ChatBot;