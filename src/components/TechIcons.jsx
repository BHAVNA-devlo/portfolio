import React from 'react';

// Custom inline SVG components for each technology logo.
// These are crafted to look premium and scale cleanly.

export const JavaIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Java Coffee Cup Logo */}
    <path d="M6 11c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M18 11h1.5a2.5 2.5 0 0 1 0 5H18" />
    <path d="M5 20h14" />
    <path d="M12 2c0 1.5-1 2.5-1 4" />
    <path d="M15 3c0 1-1 2-1 3" strokeDasharray="2 2" />
    <path d="M9 4c0 1 1 2 1 3" strokeDasharray="2 2" />
  </svg>
);

export const PythonIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Interlocking Snakes */}
    <path d="M11.87 2c-2.3 0-4.14 1.6-4.14 3.73v1.85h4.22v.6h-5.9C3.78 8.18 2 9.77 2 11.9c0 2.12 1.78 3.65 3.9 3.65h1.93v-2.72c0-2.03 1.83-3.73 4.14-3.73h4.15V5.73C16.12 3.6 14.18 2 11.87 2Zm-1.8 1.48a.74.74 0 1 1 0 1.48.74.74 0 0 1 0-1.48Z" />
    <path d="M12.13 22c2.3 0 4.14-1.6 4.14-3.73v-1.85h-4.22v-.6h5.9c2.27 0 4.05-1.59 4.05-3.72 0-2.12-1.78-3.65-3.9-3.65h-1.93v2.72c0 2.03-1.83 3.73-4.14 3.73H8v3.37C8 20.4 9.94 22 12.25 22Zm1.8-1.48a.74.74 0 1 1 0-1.48.74.74 0 0 1 0 1.48Z" fillOpacity="0.85" />
  </svg>
);

export const CppIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* C++ Symbol */}
    <path d="M12 6.5c-1-1.5-3-2.5-5-2.5a6 6 0 0 0 0 12c2 0 4-1 5-2.5" />
    <path d="M15 10.5h4M17 8.5v4" />
    <path d="M20 12.5h3M21.5 11v3" strokeWidth="1.25" />
  </svg>
);

export const JavascriptIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* JS Text & Shield */}
    <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.05" />
    <path d="M10 15h1a1.5 1.5 0 0 0 0-3h-1.5a1.5 1.5 0 0 1 0-3H11" />
    <path d="M15.5 9v4.5a1.5 1.5 0 0 1-3 0" />
  </svg>
);

export const ReactIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    {/* React Atomic Orbit */}
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
  </svg>
);

export const HtmlIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* HTML Bracket Shield */}
    <path d="M5 2l1.5 17L12 22l5.5-3L19 2H5Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M9 10h4.5l-.5 4.5-3 1.5-3-1.5v-1" />
    <path d="M15 6H8v3h7" />
  </svg>
);

export const CssIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* CSS Shield */}
    <path d="M5 2l1.5 17L12 22l5.5-3L19 2H5Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M14.5 9H8v3h6.5l-.5 4-2 1-2-1v-1" />
    <path d="M8 6h8" />
  </svg>
);

export const TailwindIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Tailwind Wave logo */}
    <path d="M12 5.5c-2.3 0-3.8 1.1-4.5 3.3.7-1.1 1.7-1.5 3-.9.7.3 1.2.8 1.8 1.4C13.2 10.3 14.5 11 16.5 11c2.3 0 3.8-1.1 4.5-3.3-.7 1.1-1.7 1.5-3 .9-.7-.3-1.2-.8-1.8-1.4-.9-1-2.2-1.7-4.2-1.7Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M7.5 12.5C5.2 12.5 3.7 13.6 3 15.8c.7-1.1 1.7-1.5 3-.9.7.3 1.2.8 1.8 1.4.9 1 2.2 1.7 4.2 1.7 2.3 0 3.8-1.1 4.5-3.3-.7 1.1-1.7 1.5-3 .9-.7-.3-1.2-.8-1.8-1.4-.9-1-2.2-1.7-4.2-1.7Z" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

export const SpringBootIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Spring Leaf Logo */}
    <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2Z" fill="currentColor" fillOpacity="0.03" />
    <path d="M12 6a6 6 0 0 1 6 6c0 3.5-3 6-6 6s-5-2-6-5c1-3 3-7 6-7Z" />
    <path d="M12 6c.5 2 0 4.5-1.5 6s-3.5 1.5-4.5 1" />
    <path d="M14.5 9c0 1.5-.5 3-1.5 4" />
  </svg>
);

export const NodejsIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Hexagon nodes */}
    <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 2v9m0 0l5.5-3M12 11l-5.5-3M12 11v9" strokeWidth="1" />
    <circle cx="12" cy="11" r="1.5" fill="currentColor" />
  </svg>
);

export const ExpressIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Fast API / Express minimalist letters */}
    <path d="M5 8h6M5 12h5M5 16h6" />
    <path d="M13 8l3 4.5-3 4.5M19 8l-3 4.5 3 4.5" />
  </svg>
);

export const MysqlIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Dual cylinders database */}
    <ellipse cx="12" cy="6" rx="7" ry="3" fill="currentColor" fillOpacity="0.08" />
    <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
    <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
  </svg>
);

export const PostgresqlIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Elephant Trunk / Relational Structure */}
    <path d="M12 2a10 10 0 0 0-8.6 15.1L5 22l5.1-1.6c.6.2 1.3.4 1.9.4a10 10 0 0 0 10-10 10 10 0 0 0-10-8.8Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M8 9a4 4 0 0 1 7-2v5c0 2-2 3-5 3" />
    <path d="M12 11c1 0 2-.5 2-1.5S13 8 12 8h-2v3h2Z" fill="currentColor" />
  </svg>
);

export const MongodbIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Droplet Leaf leaf shape */}
    <path d="M12 2c0 0 7 4 7 10 0 4.5-3.5 8-7 10-3.5-2-7-5.5-7-10 0-6 7-10 7-10Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 2v20" />
    <path d="M9 11c1-1.5 2-2.5 3-2.5s2 1 3 2.5" />
  </svg>
);

export const PandasIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Stylized grid / data table */}
    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" fillOpacity="0.05" />
    <path d="M9 4v16M15 4v16M4 9h16M4 15h16" />
  </svg>
);

export const NumpyIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Isometric matrix cubes */}
    <path d="M4 8l8-4 8 4v8l-8 4-8-4V8Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M4 8l8 4 8-4M12 12v8" />
    <path d="M8 6v8m8-8v8" strokeWidth="1" strokeDasharray="1.5 1.5" />
  </svg>
);

export const ScikitlearnIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Overlapping scatter nodes and fit curves */}
    <path d="M4 18c4-4 8-6 16-6" strokeWidth="2" />
    <circle cx="6" cy="14" r="1.5" fill="currentColor" />
    <circle cx="12" cy="11" r="1.5" fill="currentColor" />
    <circle cx="17" cy="8" r="1.5" fill="currentColor" />
    <path d="M4 20h16M4 4v16" strokeWidth="1" strokeOpacity="0.5" />
  </svg>
);

export const TensorflowIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Isometric orange box frame */}
    <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 2v9m-8-4.5L12 11m8-4.5L12 11" strokeWidth="1" />
    <path d="M8 14.5l4-2.25 4 2.25" />
  </svg>
);

export const GenaiIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* AI glowing stars/nodes */}
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Z" fill="currentColor" fillOpacity="0.08" />
    <path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83" />
  </svg>
);

export const GitIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Branching nodes */}
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M6 9v6M9 18h6c1.5 0 3-1.5 3-3" />
  </svg>
);

export const GithubIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Octocat silhouette */}
    <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.87 8.2 6.84 9.5.5.08.66-.23.66-.5v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.1-1.47-1.1-1.47-.9-.6.08-.6.08-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.9 1 .1-.65.35-1.07.64-1.32-2.2-.25-4.53-1.1-4.53-4.9 0-1.08.38-1.96 1-2.65-.1-.26-.43-1.27.1-2.62 0 0 .83-.27 2.72 1 .8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.88-1.28 2.7-1 2.7-1 .54 1.35.2 2.36.1 2.62.63.7 1 1.57 1 2.65 0 3.82-2.34 4.65-4.57 4.9.36.3.68.9.68 1.8v2.7c0 .28.16.59.67.5C19.14 20.2 22 16.4 22 12A10 10 0 0 0 12 2Z" fill="currentColor" fillOpacity="0.05" />
  </svg>
);

export const LinkedinIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* LinkedIn custom outline logo */}
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const VscodeIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* VS Code folding ribbon logo */}
    <path d="M18.5 3L12 8.5V16L18.5 21L21 19.5V4.5L18.5 3Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M3 16.5L7 12L3 7.5L5.5 6L12 11.5L5.5 18L3 16.5Z" />
    <path d="M12 11.5L18.5 3M12 11.5L18.5 21" />
  </svg>
);

export const DockerIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Whale carrying containers */}
    <path d="M2 14c2.5 1.5 5 1.5 7.5.5C12 13 14 13.5 16.5 14.5c2.5 1 4.5.5 5.5-.5H2Z" fill="currentColor" fillOpacity="0.08" />
    <path d="M8 10h2v2H8v-2ZM11 10h2v2h-2v-2ZM14 10h2v2h-2v-2ZM8 7h2v2H8V7ZM11 7h2v2h-2V7ZM14 7h2v2h-2V7ZM17 7h2v2h-2V7Z" />
    <path d="M22 13.5c-.8.8-2 1-3.5 1" />
  </svg>
);

export const PostmanIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Rocket launch */}
    <path d="M4.5 16.5L12 3l7.5 13.5H4.5Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 3v13.5M9 12h6" />
    <path d="M7 19.5h10M9.5 22h5" />
  </svg>
);

export const DefaultIcon = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// Map technology names to their SVG components.
const iconMap = {
  java: JavaIcon,
  python: PythonIcon,
  'c++': CppIcon,
  javascript: JavascriptIcon,
  react: ReactIcon,
  html: HtmlIcon,
  css: CssIcon,
  tailwind: TailwindIcon,
  'spring boot': SpringBootIcon,
  'node.js': NodejsIcon,
  express: ExpressIcon,
  mysql: MysqlIcon,
  postgresql: PostgresqlIcon,
  mongodb: MongodbIcon,
  pandas: PandasIcon,
  numpy: NumpyIcon,
  'scikit-learn': ScikitlearnIcon,
  tensorflow: TensorflowIcon,
  genai: GenaiIcon,
  git: GitIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  'vs code': VscodeIcon,
  docker: DockerIcon,
  postman: PostmanIcon
};

export const getTechIcon = (name) => {
  const normalized = name.toLowerCase().trim();
  return iconMap[normalized] || DefaultIcon;
};
