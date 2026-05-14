// ─────────────────────────────────────────────
//  chatbotAnimations.js
//  Exporta:
//   • CHATBOT_STYLES  → string injetada em <style>
//   • starData        → array com posição/timing das estrelas
//   • starPos()       → calcula coordenada SVG de cada estrela
//   • starPath()      → gera o path SVG de uma estrela de 4 pontas
// ─────────────────────────────────────────────

// ── Dimensões do pill no SVG ──────────────────
export const PILL = { w: 160, h: 48, pad: 40 };
export const SVG_W = PILL.w + PILL.pad * 2; // 240
export const SVG_H = PILL.h + PILL.pad * 2; // 128
const PCX = SVG_W / 2; // center x
const PCY = SVG_H / 2; // center y

// ── Estrelas ao redor do botão ────────────────
export const starData = [
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

/** Calcula posição (x, y) no SVG para uma estrela */
export function starPos(angle, r) {
  const rad = (angle * Math.PI) / 180;
  const ex  = (PILL.w / 2) * Math.cos(rad);
  const ey  = (PILL.h / 2) * Math.sin(rad);
  const len = Math.sqrt(ex * ex + ey * ey) || 1;
  return {
    x: PCX + ex + (ex / len) * r,
    y: PCY + ey + (ey / len) * r,
  };
}

/** Gera o path de uma estrela de 4 pontas centrada em (x, y) com half-size s */
export function starPath(x, y, s) {
  return `M${x},${y - s} L${x + s * 0.28},${y} L${x},${y + s} L${x - s * 0.28},${y} Z`;
}

// ── Todos os @keyframes e classes do chatbot ──
export const CHATBOT_STYLES = `
  /* Estrelas */
  @keyframes twinkle {
    0%   { opacity: 0;   transform: scale(0.3); }
    25%  { opacity: 1;   transform: scale(1.15); }
    55%  { opacity: 0.6; transform: scale(0.85); }
    80%  { opacity: 0.9; transform: scale(1.05); }
    100% { opacity: 0;   transform: scale(0.3); }
  }

  /* Entrada das mensagens */
  @keyframes msgSlide {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .cb-msg-in { animation: msgSlide 0.28s ease-out both; }

  /* Typing dots */
  @keyframes cbBounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }

  /* Linha de separação animada no header do drawer */
  @keyframes lineGrow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  .cb-header-line {
    transform-origin: left;
    animation: lineGrow 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both;
  }

  /* Fade in do overlay */
  @keyframes overlayIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .cb-overlay {
    animation: overlayIn 0.3s ease both;
  }

  /* Quick pill hover */
  .cb-quick-btn {
    transition: background 0.2s, border-color 0.2s, transform 0.15s;
  }
  .cb-quick-btn:hover {
    background: #f4f4f4;
    border-color: #aaa;
    transform: translateY(-1px);
  }
  .cb-quick-btn:active { transform: scale(0.97); }

  /* Send button */
  .cb-send-btn {
    transition: background 0.2s, transform 0.15s;
  }
  .cb-send-btn:not(:disabled):hover { background: #333; }
  .cb-send-btn:not(:disabled):active { transform: scale(0.95); }

  /* Scrollbar fina dentro do drawer */
  .cb-messages::-webkit-scrollbar { width: 4px; }
  .cb-messages::-webkit-scrollbar-track { background: transparent; }
  .cb-messages::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 4px; }
`;