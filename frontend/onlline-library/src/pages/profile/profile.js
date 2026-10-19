export const profile = {
  name: "Clara Jensen",
  fellowship: "Oxford Bodleian Fellowship #LUM-8842 • Member since Oct 2021",
  tier: "ENDOWED SCHOLAR TIER",
  folio: "FELLOWSHIP FOLIO #LUM-8842",
  photo: "clara-profile.png",
};

// ---- Stat cards ----
export const stats = [
  { id: "time", label: "CUMULATIVE TIME", icon: "hourglass", value: "428", unit: "hrs", footer: { icon: "trend", text: "+18.4% from last trimester", tone: "accent" } },
  { id: "vols", label: "VOLUMES READ", icon: "book", value: "84", unit: "vols", footer: { text: "Pacing: ~2.8 volumes / month", tone: "muted" } },
  { id: "streak", label: "ACTIVE STREAK", icon: "flame", value: "14", unit: "days", footer: { icon: "check", text: "Daily quota achieved today", tone: "dark" } },
  { id: "notes", label: "MARGINALIA & NOTES", icon: "pen", value: "312", unit: "notes", footer: { text: "18 citations cross-referenced", tone: "muted" } },
];

// ---- Reading velocity chart ----
export const chartRanges = ["2024 (Annual)", "Trimester", "Weekly"];

export const chartData = {
  "2024 (Annual)": [
    { label: "Jan", value: 540 }, { label: "Feb", value: 695 }, { label: "Mar", value: 615 }, { label: "Apr", value: 785 },
    { label: "May", value: 950 }, { label: "Jun", value: 670 }, { label: "Jul", value: 875 }, { label: "Aug", value: 1380 },
    { label: "Sep", value: 715 }, { label: "Oct", value: 1400 }, { label: "Nov", value: 920, state: "current" }, { label: "Dec", value: 450, state: "future" },
  ],
  Trimester: [
    { label: "Jan–Apr", value: 2635 }, { label: "May–Aug", value: 3875 }, { label: "Sep–Dec", value: 3485 },
  ],
  Weekly: [
    { label: "Mon", value: 120 }, { label: "Tue", value: 95 }, { label: "Wed", value: 140 }, { label: "Thu", value: 110 },
    { label: "Fri", value: 165 }, { label: "Sat", value: 210 }, { label: "Sun", value: 180 },
  ],
};

export const velocityMeta = {
  peakWindow: "22:00 — 01:30 (Late Vigil)",
  formats: [
    { label: "E-Pub", pct: 60, color: "#07241a" },
    { label: "Audio", pct: 25, color: "#9a4522" },
    { label: "Print", pct: 15, color: "#486458" },
  ],
};

// ---- Thematic distribution ----
export const genres = [
  { name: "Dark Academia & Gothic", pct: 35, color: "#07241a", note: "29 volumes read • Donna Tartt, Umberto Eco" },
  { name: "Literary Fiction", pct: 28, color: "#9a4522", note: "23 volumes read • Woolf, Sebald, Calvino" },
  { name: "Stoic & Ancient Philosophy", pct: 20, color: "#486458", note: "17 volumes read • Seneca, Aurelius, Epictetus" },
  { name: "Historical Chronicles", pct: 17, color: "#727974", note: "15 volumes read • Mantel, Graves, Yourcenar" },
];

// ---- Honors ----
export const honors = [
  { id: 1, icon: "pen", pill: "FELLOWSHIP CLASS I", pillTone: "neutral", title: "Master Annotator", desc: "Synthesized over 300 authoritative marginal notes cross-referenced by peer archive fellows.", date: "Conferred Nov 2023", result: "Tier III • Max", resultTone: "dark" },
  { id: 2, icon: "medal", pill: "RARE DISTINCTION", pillTone: "rare", title: "Classicist Canon Completer", desc: "Exhaustively read every core volume in the Great Classical Antiquity & Hellenic Codex list.", date: "Conferred Feb 2024", result: "100% Verified", resultTone: "accent" },
  { id: 3, icon: "moon", pill: "HABITUAL MASTERY", pillTone: "neutral", title: "Night Owl Scholar", desc: "Logged in excess of 150 consecutive quiet-hour sessions between the hours of 10 PM and 2 AM.", date: "Conferred Aug 2024", result: "Perpetual", resultTone: "dark" },
  { id: 4, icon: "trophy", pill: "PACING GOAL (84/100)", pillTone: "neutral", title: "Centurion Reader", desc: "On track to achieve the 100 Bound Volumes milestone within a single scholarly calendar year.", progress: { value: 84, total: 100 } },
];

// ---- Settings ----
export const settingsDefaults = {
  autoSync: true,
  publicFolio: true,
  communalLayer: true,
  analyticsSharing: false,
};

export const privacyOptions = [
  { key: "publicFolio", title: "Public Scholar Folio", desc: "Allow other registered archive scholars to view reading shelves" },
  { key: "communalLayer", title: "Marginalia Communal Layer", desc: "Make annotated chapter notes discoverable in public monographs" },
  { key: "analyticsSharing", title: "Pacing Analytics Sharing", desc: "Share anonymous reading metrics with archive research studies" },
];

export const STORAGE_TOTAL_GB = 10;
export const STORAGE_INITIAL_GB = 1.8;
export const STORAGE_AFTER_PURGE_GB = 1.2;
