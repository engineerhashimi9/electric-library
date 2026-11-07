export const formatCount = (n) => {
  if (typeof n !== "number" || isNaN(n)) return n || "0";
  if (n >= 1000000) {
    return `${(n / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (n >= 1000) {
    return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(n);
};

export const formatFollowers = formatCount;
export const formatVotes = formatCount;

export default formatCount;
