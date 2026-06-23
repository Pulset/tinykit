// Allow plain side-effect CSS imports like `import './sleepflow.css'`.
// Next.js only ships type declarations for CSS Modules (`*.module.css`),
// so we declare plain `*.css` here to satisfy `noUncheckedSideEffectImports`.
declare module '*.css';
