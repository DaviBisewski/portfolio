import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import AiIcon from '../../assets/img/ai.png';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Olá! Sou o assistente de IA do Davi. Clique em uma das opções abaixo ou faça sua pergunta.',
      isInitial: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const quickMessages = [
    { label: '👤 Quem é você?', text: 'Quem é você?' },
    { label: '🚀 Projetos', text: 'Me conta sobre La Casa Di Frango' },
    { label: '💻 Skills', text: 'Quais tecnologias você usa?' },
    { label: '📞 Contato', text: 'Como posso entrar em contato?' },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const systemPrompt = `Você é um assistente de IA pessoal de Davi Bisewski, um desenvolvedor web junior talentoso.

INFORMAÇÕES SOBRE DAVI:
- Nome Completo: Davi De Morais Bisewski
- Localização: Joinville, SC, Brasil
- Email: davimbisewski@gmail.com
- Telefone: +55 47 984828184
- GitHub: https://github.com/DaviBisewski

FORMAÇÃO ACADÊMICA:
- Técnico em Informática para Internet - Instituto Federal Catarinense (2023-2025)
- Engenharia de Software - Universidade Católica de Santa Catarina (2026 - Cursando)

EXPERIÊNCIA PROFISSIONAL:
- Freelancer em La Casa Di Frango (01/2026 - Presente)
  * Sistema de gestão que reduziu 50% o tempo de atendimento
  * App PWA com React, Vue e Django
  * Dashboard administrativo com relatórios em PDF/Excel

PROJETOS PRINCIPAIS:
1. La Casa Di Frango - E-commerce Fullstack (React, Vue, Django, PostgreSQL, Supabase)
2. Portfólio Interativo (React, GSAP, Framer Motion)
3. Fut Draft - Fullstack (Vue, Node.js, REST API)
4. Projeto de Conclusão de Curso - Dashboard com Django e Vue

COMPETÊNCIAS:
Frontend: React 19, Vue.js 3, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, GSAP, Framer Motion, PWA
Backend: Django 5, Node.js, Express, Python, REST API, JWT
Banco de Dados: PostgreSQL, SQL, Supabase
Ferramentas: Git, GitHub, Figma, Docker, Arquitetura Limpa

INSTRUÇÕES:
1. Seja amigável e profissional
2. Se perguntarem sobre contato: Email (davimbisewski@gmail.com) ou WhatsApp (+55 47 984828184)
3. Se perguntarem sobre projetos: Dê detalhes técnicos e impacto
4. Mantenha respostas concisas (máx 2-3 parágrafos)
5. Use português do Brasil`;

  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend || !apiKey) {
      if (!apiKey) alert('❌ VITE_GEMINI_API_KEY não configurada em .env.local');
      return;
    }
    setMessages(prev => prev.filter(msg => !msg.isInitial).concat({ type: 'user', text: textToSend }));
    setInputValue('');
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `${systemPrompt}\n\nPergunta do usuário: ${textToSend}` }] }],
            generationConfig: { maxOutputTokens: 1024, temperature: 0.7 },
          })
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Erro na API');
      }
      const data = await response.json();
      const botResponse = data.candidates[0]?.content?.parts[0]?.text || 'Desculpa, não consegui gerar uma resposta.';
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    } catch (error) {
      let errorMessage = '❌ Erro ao processar sua mensagem.';
      if (error.message.includes('429')) errorMessage = '⏱️ Muitas requisições. Tente novamente em alguns segundos.';
      else if (error.message.includes('API')) errorMessage = '❌ Erro de autenticação. Verifique sua chave em .env.local';
      else errorMessage += ' ' + error.message;
      setMessages(prev => [...prev, { type: 'bot', text: errorMessage }]);
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

  const stars = [
    { id: 0,  angle:   8, r: 20, size: 2.5, delay: 0.0,  dur: 2.2 },
    { id: 1,  angle:  32, r: 16, size: 1.5, delay: 0.7,  dur: 1.8 },
    { id: 2,  angle:  58, r: 22, size: 2.0, delay: 1.3,  dur: 2.5 },
    { id: 3,  angle:  88, r: 18, size: 1.5, delay: 0.3,  dur: 2.0 },
    { id: 4,  angle: 115, r: 20, size: 2.8, delay: 1.0,  dur: 1.9 },
    { id: 5,  angle: 142, r: 16, size: 1.5, delay: 0.5,  dur: 2.3 },
    { id: 6,  angle: 168, r: 21, size: 2.0, delay: 1.6,  dur: 2.1 },
    { id: 7,  angle: 198, r: 18, size: 1.5, delay: 0.2,  dur: 2.4 },
    { id: 8,  angle: 225, r: 20, size: 2.5, delay: 0.9,  dur: 1.7 },
    { id: 9,  angle: 252, r: 16, size: 1.5, delay: 1.4,  dur: 2.2 },
    { id: 10, angle: 278, r: 22, size: 2.0, delay: 0.6,  dur: 2.0 },
    { id: 11, angle: 308, r: 18, size: 1.5, delay: 1.1,  dur: 1.9 },
    { id: 12, angle: 335, r: 20, size: 2.8, delay: 0.4,  dur: 2.3 },
  ];

  const pillW = 160, pillH = 48, pad = 40;
  const svgW = pillW + pad * 2;
  const svgH = pillH + pad * 2;
  const pcx  = svgW / 2;
  const pcy  = svgH / 2;

  function starPos(angle, r) {
    const rad = (angle * Math.PI) / 180;
    const ex  = (pillW / 2) * Math.cos(rad);
    const ey  = (pillH / 2) * Math.sin(rad);
    const len = Math.sqrt(ex * ex + ey * ey) || 1;
    return {
      x: pcx + ex + (ex / len) * r,
      y: pcy + ey + (ey / len) * r,
    };
  }

  function starPath(x, y, s) {
    return `M${x},${y - s} L${x + s * 0.28},${y} L${x},${y + s} L${x - s * 0.28},${y} Z`;
  }

  return (
    <>
      {!isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Stars SVG */}
          <svg
            width={svgW}
            height={svgH}
            viewBox={`0 0 ${svgW} ${svgH}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              overflow: 'visible',
            }}
          >
            {stars.map(s => {
              const pos = starPos(s.angle, s.r);
              return (
                <path
                  key={s.id}
                  d={starPath(pos.x, pos.y, s.size)}
                  fill="white"
                  style={{
                    opacity: 0,
                    animation: `twinkle ${s.dur}s ${s.delay}s linear infinite`,
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                  }}
                />
              );
            })}
          </svg>

          {/* Button — lifts on hover, inner content also lifts */}
          <button
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Abrir chat com IA"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              height: '48px',
              padding: '0 28px',
              borderRadius: '9999px',
              border: 'none',
              background: hovered ? '#2e2e2e' : '#111111',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.01em',
              cursor: 'pointer',
              boxShadow: hovered
                ? '0 8px 24px rgba(0,0,0,0.55), 0 16px 48px rgba(0,0,0,0.4)'
                : '0 2px 12px rgba(0,0,0,0.5), 0 6px 32px rgba(0,0,0,0.35)',
              /* the whole button (shell) lifts slightly */
              transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
              transition: 'background 0.25s ease, box-shadow 0.3s ease, transform 0.25s ease',
            }}
          >
            {/* Inner content lifts an extra bit on top of the button lift */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'transform 0.25s ease',
              }}
            >
              <img src={AiIcon} alt="" style={{ width: 20, height: 20, objectFit: 'contain' }} />
              <span>Dúvidas?</span>
            </span>
          </button>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 40,
          }}
        />
      )}

      {/* Chat drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0, right: 0,
          height: '100%',
          width: '100%',
          maxWidth: '384px',
          background: '#fff',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Header */}
        <div style={{ borderBottom: '1px solid #e5e7eb', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={AiIcon} alt="IA" style={{ width: 24, height: 24, objectFit: 'contain' }} />
            <div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600, color: '#000' }}>Assistente</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Gemini AI</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{ padding: 8, borderRadius: 8, border: 'none', background: 'transparent', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.background = '#f3f4f6'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            aria-label="Fechar chat"
          >
            <X size={20} color="#4b5563" />
          </button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {messages.map((message, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start', animation: 'msgFade 0.25s ease-out' }}>
              <div style={{
                maxWidth: '80%',
                padding: '8px 16px',
                borderRadius: message.type === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                background: message.type === 'user' ? '#000' : '#f3f4f6',
                color: message.type === 'user' ? '#fff' : '#111',
              }}>
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ background: '#f3f4f6', padding: '8px 16px', borderRadius: '12px 12px 12px 0' }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[0, 0.1, 0.2].map((d, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#9ca3af', animation: `bounce 1s ${d}s infinite` }} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick messages */}
        {messages.some(msg => msg.isInitial) && messages.length === 1 && (
          <div style={{ padding: '12px 16px', background: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4b5563', marginBottom: 10 }}>Comece com:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(msg.text)}
                  style={{ background: '#fff', border: '1px solid #d1d5db', color: '#374151', borderRadius: 8, padding: '8px 12px', fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f9fafb'; e.currentTarget.style.borderColor = '#9ca3af'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#d1d5db'; }}
                >
                  {msg.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div style={{ borderTop: '1px solid #e5e7eb', padding: 16, background: '#fff' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua pergunta..."
              disabled={isLoading}
              style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: '0.875rem', outline: 'none', background: isLoading ? '#f3f4f6' : '#fff' }}
              onFocus={e => e.target.style.borderColor = '#000'}
              onBlur={e => e.target.style.borderColor = '#d1d5db'}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              style={{ background: isLoading || !inputValue.trim() ? '#d1d5db' : '#000', color: '#fff', border: 'none', borderRadius: 8, padding: '0 12px', cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}
              aria-label="Enviar"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%   { opacity: 0;   transform: scale(0.3); }
          25%  { opacity: 1;   transform: scale(1.15); }
          55%  { opacity: 0.6; transform: scale(0.85); }
          80%  { opacity: 0.9; transform: scale(1.05); }
          100% { opacity: 0;   transform: scale(0.3); }
        }
        @keyframes msgFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
};

export default ChatBot;