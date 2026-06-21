/* =========================================================
   Laiz Gabriely — Portfolio JS
   ========================================================= */

// SVG icon set (lucide-style)
const I = {
  code: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  github: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  ext: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  briefcase: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
  award: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
  cap: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
  ghLarge: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  message: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
  arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
  ghSm: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  liSm: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
  mailSm: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
};

// ===== Skills =====
const skills = [
  { name: "HTML", category: "Linguagem", icon: "< / >" },
  { name: "JavaScript", category: "Linguagem", icon: "JS" },
  { name: "TypeScript", category: "Linguagem", icon: "TS" },

  { name: "React", category: "Framework", icon: "⚛" },
  { name: "Next.js", category: "Framework", icon: "▲" },

  { name: "Node.js", category: "Backend", icon: "⬢" },
 

  { name: "PostgreSQL", category: "Banco de Dados", icon: "🐘" },

  { name: "CSS", category: "Estilização", icon: "{ }" },
  { name: "Sass", category: "Estilização", icon: "#" },
  { name: "Tailwind CSS", category: "Estilização", icon: "≈" },

  { name: "Git", category: "Ferramenta", icon: "⎇" },
  { name: "GitHub", category: "Plataforma", icon: "★" },

 { name: "NPM", category: "Ferramenta", icon: "⬡" },
  { name: "Pacote Office", category: "Ferramenta", icon: "⊞" }
];

document.getElementById("skills-grid").innerHTML = skills.map(s => `
  <div class="skill neon-border reveal">
    <div class="ico">${s.icon}</div>
    <div class="name">${s.name}</div>
    <div class="cat">${s.category}</div>
  </div>
`).join("");

// ===== Projects =====
const projects = [
  {
    title: "Unipet",
    desc: "E-commerce totalmente intuitivo e com facil interação para o usuario voltado para o nicho de PETSHOP.",
    tags: ["HTML", "CSS", "JS", "SQL"],
    image: "Images/unipet.jpeg",
    github: "https://github.com/laizgabriely/unipet/",
    demo: "https://laizgabriely.github.io/unipet/",
    featured: true,
  },
 
];
document.getElementById("projects-grid").innerHTML = projects.map(p => `
  <article class="project neon-border reveal${p.featured ? " featured" : ""}">
    <div class="thumb">
      <img src="${p.image}" alt="${p.title}" loading="lazy" width="1080" height="1080" />
    </div>
    <div class="project-body">
      <h3>${p.title}</h3>
      <p class="desc">${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag glass">${t}</span>`).join("")}</div>
      <div class="project-foot">
        <a class="btn-tag glass" href="${p.github}" target="_blank" rel="noreferrer">${I.github} Código</a>
        ${p.demo ? `<a class="btn-demo" href="${p.demo}" target="_blank" rel="noreferrer">Demo ${I.ext}</a>` : ""}
      </div>
    </div>
  </article>
`).join("");

// ===== Timeline =====
const items = [

  { year: "2026 - Atual", title: "Estagiária de PCM", org: "Porto Sudeste",
    desc: "Atuação no Planejamento e Controle da Manutenção (PCM), contribuindo para o acompanhamento de processos, análise de indicadores e suporte à eficiência operacional.",
    icon: I.award, cat: "CARGO ATUAL" },
  { year: "2025", title: "Estagiária de Tecnologia e Inovação", org: "Flypay Instituição Financeira LTDA. ",
    desc: "Atuação como estagiária, apoiando processos internos e operacionais, com foco em aprendizado prático, organização de demandas e desenvolvimento de habilidades técnicas e comportamentais no ambiente corporativo.",
    icon: I.briefcase, cat: "Experiência" },
  { year: "2023", title: "Engenharia de Software", org: "Graduação · Estácio de Sá",
    desc: "Início da graduação em Engenharia de Software, com desenvolvimento de competências em tecnologia, análise de sistemas, desenvolvimento de software.",
    icon: I.cap, cat: "Formação" },
  { year: "2022 - 2024", title: "Atendente Comercial", org: "South & Co",
    desc: "Atuei no atendimento ao cliente, suporte às vendas e organização de processos comerciais, desenvolvendo habilidades de comunicação, relacionamento interpessoal e resolução de problemas.",
    icon: I.cap, cat: "Trabalho" },
];
document.getElementById("timeline").innerHTML = items.map(it => `
  <div class="tl-item reveal">
    <div class="tl-dot">
      <span class="ping"></span>
      <div class="icon-wrap glass-strong" style="color: var(--neon-cyan)">${it.icon}</div>
    </div>
    <div class="tl-card neon-border">
      <div class="row">
        <span class="tl-year">${it.year}</span>
        <span class="tl-cat">${it.cat}</span>
      </div>
      <h3>${it.title}</h3>
      <p class="tl-org">${it.org}</p>
      <p class="tl-desc">${it.desc}</p>
    </div>
  </div>
`).join("");

// ===== Contact =====
const channels = [
  { icon: I.mail, label: "E-mail", value: "laiz.gabriely@outlook.com", href: "mailto:laiz.gabriely@outlook.com" },
  { icon: I.linkedin, label: "LinkedIn", value: "linkedin.com/in/laizgabriely", href: "https://www.linkedin.com/in/laiz-gabriely-184818200/" },
  { icon: I.ghLarge, label: "GitHub", value: "github.com/laizgabriely", href: "https://github.com/laizgabriely" },

];
document.getElementById("channels").innerHTML = channels.map(c => `
  <a class="channel neon-border" href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
    <div class="channel-ico glass" style="color: var(--neon-cyan)">${c.icon}</div>
    <div class="channel-body">
      <div class="channel-label">${c.label}</div>
      <div class="channel-value">${c.value}</div>
    </div>
    <div class="channel-arrow">${I.arrow}</div>
  </a>
`).join("");

// Socials
document.getElementById("socials").innerHTML = [I.ghSm, I.liSm, I.mailSm]
  .map(svg => `<a class="social glass" href="#contato">${svg}</a>`).join("");

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
