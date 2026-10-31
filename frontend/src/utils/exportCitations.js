const resolveStr = (val) => {
  if (!val) return "";
  if (typeof val === "string") return val;
  if (typeof val === "object") return val.en || val.fa || Object.values(val)[0] || "";
  return String(val);
};

// خروجی ساده‌ی ارجاعات به‌صورت فایل متنی
export default function exportCitations(items) {
  if (!Array.isArray(items)) return;
  const text = items
    .map((b, i) => {
      const author = resolveStr(b.author);
      const title = resolveStr(b.title);
      const badge = resolveStr(b.badge);
      const format = resolveStr(b.format).toLowerCase();
      return `${i + 1}. ${author}. ${title}. ${badge}. ${format}.`;
    })
    .join("\n");
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "favorites-citations.txt";
  a.click();
  URL.revokeObjectURL(url);
}
