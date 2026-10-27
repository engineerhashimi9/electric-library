export default function BrandLogo({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#09261C" />
      <rect x="7" y="8" width="7.5" height="16" rx="1.5" fill="#10B981" />
      <rect x="17.5" y="8" width="7.5" height="16" rx="1.5" fill="#EAF4F0" />
    </svg>
  );
}
