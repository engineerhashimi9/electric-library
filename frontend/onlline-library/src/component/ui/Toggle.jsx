export default function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]/50 border ${checked ? "bg-[#10B981] border-[#10B981]" : "bg-[#EAF4F0] border-[#DDECE6]"}`}
    >
      <span
        className={`absolute top-0.5 h-4.5 w-4.5 rounded-full shadow transition-all duration-200 ${checked ? "left-[22px] bg-[#FFFFFF]" : "left-0.5 bg-[#6B9080]"}`}
      />
    </button>
  );
}
