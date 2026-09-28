export default function ThemeCard({ theme }) {
  return (
    <div className="flex flex-col justify-center gap-3 rounded-xl items-center p-4 bg-[#F5F3F0] w-[210px] h-[162px]">
      <div className="flex justify-center items-center rounded-xl bg-white w-12 h-12">
        <img className="w-5" src={theme.icon} alt={theme.name} />
      </div>
      <h5>{theme.name}</h5>
      <span>{theme.works}</span>
    </div>
  );
}
