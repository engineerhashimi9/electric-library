// خروجی ساده‌ی ارجاعات به‌صورت فایل متنی
export default function exportCitations(items) {
  const text = items
    .map((b, i) => `${i + 1}. ${b.author}. ${b.title}. ${b.badge}. ${b.format.toLowerCase()}.`)
    .join("\n");
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "favorites-citations.txt";
  a.click();
  URL.revokeObjectURL(url);
}
