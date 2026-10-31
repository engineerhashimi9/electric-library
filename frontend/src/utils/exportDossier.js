// خروجی ساده‌ی «Scholarly Dossier» به‌صورت فایل متنی
export default function exportDossier({ profile, stats, genres, honors }) {
  const lines = [
    `SCHOLARLY DOSSIER — ${profile.name}`,
    profile.fellowship,
    "",
    "METRICS",
    ...stats.map((s) => `- ${s.label}: ${s.value} ${s.unit}`),
    "",
    "THEMATIC DISTRIBUTION",
    ...genres.map((g) => `- ${g.name}: ${g.pct}% (${g.note})`),
    "",
    "HONORS",
    ...honors.map((h) => `- ${h.title} — ${h.pill}`),
  ];
  const url = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/plain" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "scholarly-dossier.txt";
  a.click();
  URL.revokeObjectURL(url);
}
