import { useState } from "react";
import {
  profile as initialProfile, stats, genres, honors, settingsDefaults,
  chartRanges, chartData, STORAGE_INITIAL_GB, STORAGE_AFTER_PURGE_GB,
} from "../pages/profile/profile";
import exportDossier from "@/utils/exportDossier";

export default function useProfile() {
  const [name, setName] = useState(initialProfile.name);
  const [editing, setEditing] = useState(false);
  const [lastArchived, setLastArchived] = useState("24 mins ago");
  const [range, setRange] = useState(chartRanges[0]);
  const [settings, setSettings] = useState(settingsDefaults);
  const [cacheGb, setCacheGb] = useState(STORAGE_INITIAL_GB);
  const [toast, setToast] = useState(null);

  const notify = (message) => setToast({ id: Date.now(), message });
  const closeToast = () => setToast(null);

  const toggleSetting = (key) => setSettings((s) => ({ ...s, [key]: !s[key] }));

  const saveName = (value) => {
    const v = value.trim();
    if (!v) return;
    setName(v);
    setEditing(false);
    notify("Profile updated");
  };

  const syncArchive = () => {
    setLastArchived("just now");
    notify("Archive synchronized");
  };

  const purgeCache = () => {
    if (cacheGb <= STORAGE_AFTER_PURGE_GB) return notify("No non-annotated data to purge");
    const freed = (cacheGb - STORAGE_AFTER_PURGE_GB).toFixed(1);
    setCacheGb(STORAGE_AFTER_PURGE_GB);
    notify(`Local cache purged — ${freed} GB freed`);
  };

  const openAccountSettings = () =>
    document.getElementById("account-settings")?.scrollIntoView({ behavior: "smooth", block: "start" });

  const exportData = () => {
    exportDossier({ profile: { ...initialProfile, name }, stats, genres, honors });
    notify("Scholarly dossier exported");
  };

  return {
    name, editing, openEdit: () => setEditing(true), closeEdit: () => setEditing(false), saveName,
    lastArchived, syncArchive,
    range, setRange, series: chartData[range],
    settings, toggleSetting,
    cacheGb, purgeCache,
    openAccountSettings, exportData,
    manageBilling: () => notify("Billing portal isn't connected in this demo"),
    toast, closeToast,
  };
}
