// لوگوی Bookora (بازسازی لوگوی Figma)
export default function BrandLogo({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1e3a2f" />
      <rect x="7" y="8" width="7.5" height="16" rx="1.5" fill="#fd9168" />
      <rect x="17.5" y="8" width="7.5" height="16" rx="1.5" fill="#ffffff" />
    </svg>
  );
}
