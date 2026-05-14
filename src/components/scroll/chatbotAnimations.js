export const CHATBOT_ANIMATIONS = `
  .animate-message {
    animation: messageIn .35s cubic-bezier(0.16,1,0.3,1);
  }

  @keyframes messageIn {
    from {
      opacity: 0;
      transform: translateY(10px) scale(.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes bounceSoft {
    0%,100% {
      transform: translateY(0);
      opacity: .5;
    }

    50% {
      transform: translateY(-4px);
      opacity: 1;
    }
  }

  .animate-bounce-soft {
    animation: bounceSoft 1s infinite;
  }

  .chatbot-scroll::-webkit-scrollbar {
    width: 4px;
  }

  .chatbot-scroll::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.12);
    border-radius: 999px;
  }

  .chatbot-scroll::-webkit-scrollbar-track {
    background: transparent;
  }

  /* ===================================
     HERO AI SPHERE
  =================================== */

  @keyframes sphereIn {
    0% {
      opacity: 0;
      transform: scale(.6) translateY(30px);
      filter: blur(10px);
    }

    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
      filter: blur(0px);
    }
  }

  .animate-sphere-in {
    animation: sphereIn 1s cubic-bezier(0.16,1,0.3,1);
  }

  @keyframes spinSlow {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spinSlow 12s linear infinite;
  }

  @keyframes spinReverse {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0deg);
    }
  }

  .animate-spin-reverse {
    animation: spinReverse 8s linear infinite;
  }

  @keyframes pulseSoft {
    0%,100% {
      opacity: .35;
      transform: scale(1);
    }

    50% {
      opacity: .7;
      transform: scale(1.08);
    }
  }

  .animate-pulse-soft {
    animation: pulseSoft 4s ease-in-out infinite;
  }

  @keyframes fadeText {
    from {
      opacity: 0;
      transform: translateY(15px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-text {
    animation: fadeText .8s .5s ease both;
  }
`;