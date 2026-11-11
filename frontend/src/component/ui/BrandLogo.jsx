export default function BrandLogo({ className = "h-8 w-8", withText = false, textClassName = "text-xl font-extrabold text-[#0E6760]" }) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <div className={`bg-[#0E6760] rounded-xl flex items-center justify-center text-[#FFFFFF] font-extrabold shadow-library-sm shrink-0 ${className}`}>
        <svg viewBox="0 0 32 32" className="w-5/6 h-5/6" fill="none" aria-hidden="true">
          <rect x="5" y="6" width="9" height="20" rx="2.5" fill="#17A296" />
          <rect x="18" y="6" width="9" height="20" rx="2.5" fill="#E6F4F3" />
        </svg>
      </div>
      {withText && (
        <span className={textClassName}>
          Bargin
        </span>
      )}
    </div>
  );
}
