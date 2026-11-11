import { getLocalized } from "./langHelper";

export default function exportCitations(items, lang = "en") {
  if (!Array.isArray(items) || items.length === 0) return;

  const text = items
    .map((b, i) => {
      const author = getLocalized(b.author, lang);
      const title = getLocalized(b.title, lang);
      const badge = getLocalized(b.badge, lang);
      const format = getLocalized(b.format, lang);
      return `${i + 1}. ${author}. "${title}". ${badge ? `[${badge}] ` : ""}${format}.`;
    })
    .join("\n\n");

  // Add UTF-8 BOM so text files with Persian/Arabic script display correctly in Windows Notepad and other tools
  const blob = new Blob(["\uFEFF" + text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `bargin-citations-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
