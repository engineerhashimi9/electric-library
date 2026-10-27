/**
 * Helper to safely extract localized text from an object or string.
 * Supports:
 * - String: returns the string as is.
 * - Object: returns obj[lang] || obj.en || obj.fa || fallback.
 */
export function getLocalized(val, lang = "en") {
  if (val === null || val === undefined) return "";
  if (typeof val === "object") {
    return val[lang] || val.en || val.fa || Object.values(val)[0] || "";
  }
  return String(val);
}
