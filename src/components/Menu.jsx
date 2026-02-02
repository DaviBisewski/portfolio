import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Usando lucide-react para o ícone de fechar

const menuLinks = [
  { name: 'Projetos', href: '#projetos' },
  { name: 'Conhecimentos', href: '#conhecimentos' },
  { name: 'Contatos', href: '#contatos' },
  { name: 'WhatsApp', href: 'https://wa.me/5547984828184?text=Olá Davi! Gostaria de saber mais sobre seu trabalho.', target: '_blank', external: true },
  { name: 'Linkedin', href: 'https://linkedin.com/in/davibisewski', target: '_blank', external: true },
  { name: 'Github', href: 'https://github.com/DaviBisewski', target: '_blank', external: true },
];

export default function Menu({ isOpen, onClose }) {

     const handleLinkClick = (e, href, isExternal) => {
    if (!isExternal) {
      e.preventDefault();}

       const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);

       onClose();
      
        if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 600); // Aguarda a animação de saída do menu (0.6s)
      }
    }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-[#0a0c10] text-white flex flex-col"
        >
          {/* Header do Menu */}
          <div className="flex items-center justify-between px-6 lg:px-16 py-6">
            <div className="leading-tight text-gray-500">
              <p className="font-bold text-2xl group-hover:text-white">DAVI BISEWSKI</p>
              <p className="text-sm group-hover:text-white">Desenvolvedor Júnior</p>
            </div>

            {/* Botão Fechar */}
            <button
              onClick={onClose}
              className="cursor-pointer flex items-center gap-2 text-sm font-bold uppercase tracking-widest group transition-colors hover:text-gray-400"
            >
              FECHAR
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <X size={24} />
              </motion.div>
            </button>
          </div>

         {/* Links do Menu */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4">MENU</p>
            <nav className="flex flex-col items-center">
              {menuLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  onClick={(e) => handleLinkClick(e, link.href, link.external)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1, 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className="text-4xl md:text-6xl font-bold text-gray-500 hover:text-white transition-colors duration-300 py-2 relative group"
                >
                  <span className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></span>
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>
          {/* Footer do Menu */}
          <div className="py-8 text-center text-[10px] text-gray-600 uppercase tracking-widest">
            © 2026 Davi De Morais Bisewski. 
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}