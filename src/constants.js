// Importações de imagens de tecnologias
import Figma from './assets/img/figma.png';
import Github from './assets/img/github.png';
import Git from './assets/img/git.png';
import Mysql from './assets/img/mySQL.png';
import Django from './assets/img/django.png';
import ReactIcon from './assets/img/react.png';
import Vue from './assets/img/vue.png';
import JS from './assets/img/javascript.png';
import Python from './assets/img/python.png';
import Us from './assets/img/usa.png';

// URLs principais
export const SOCIAL_URLS = {
  github: 'https://github.com/DaviBisewski',
  linkedin: 'https://linkedin.com/in/davibisewski',
  instagram: 'https://instagram.com/davi_bisewski',
  whatsapp: 'https://wa.me/5547984828184?text=Olá Davi! Gostaria de saber mais sobre seu trabalho.',
  curriculum: '/Davi Bisewski.pdf',
};

// Menu links - Consolidado
export const MENU_LINKS = [
  { name: 'Projetos', href: '#projetos' },
  { name: 'Conhecimentos', href: '#conhecimentos' },
  { name: 'Contatos', href: '#contatos' },
  { name: 'WhatsApp', href: SOCIAL_URLS.whatsapp, target: '_blank', external: true },
  { name: 'Linkedin', href: SOCIAL_URLS.linkedin, target: '_blank', external: true },
  { name: 'Github', href: SOCIAL_URLS.github, target: '_blank', external: true },
];

// Tecnologias - Consolidado (antes estava duplicado em TechBar e Map)
export const TECHNOLOGIES = [
  { name: 'Figma', icon: Figma },
  { name: 'GitHub', icon: Github },
  { name: 'Git', icon: Git },
  { name: 'MySQL', icon: Mysql },
  { name: 'Django', icon: Django },
  { name: 'React', icon: ReactIcon },
  { name: 'Vue', icon: Vue },
  { name: 'JavaScript', icon: JS },
  { name: 'Python', icon: Python },
];

// Skills com incluindo idiomas
export const SKILLS = [
  ...TECHNOLOGIES,
  { name: 'Inglês', icon: Us },
];

// Animação - Valores reutilizáveis
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
};

export const ANIMATION_EASE = {
  smooth: 'power3.out',
  bounce: 'power4.out',
  smoothIn: 'power4.in',
};
