# Portfolio - Davi Bisewski

Portfólio pessoal com chatbot alimentado por Google Gemini API.

## 🔑 Configuração da API

### Variáveis de Ambiente

```env
VITE_GEMINI_API_KEY=sua_chave_aqui
```

### Monitorar Quota da API

- [Google AI Studio - API Keys](https://aistudio.google.com/app/apikey)
- [Google Cloud Console - Quotas](https://console.cloud.google.com/quotas)
- [Google Cloud Console - Usage](https://console.cloud.google.com/iam-admin/quotas)

**Free Tier Limits:**
- 15 requisições/minuto
- 1 milhão de tokens/dia
- Recarrega todo dia à 00h UTC

Para aumentar os limites: Link uma conta de Billing (não cobra enquanto estiver dentro da quota gratuita).

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
