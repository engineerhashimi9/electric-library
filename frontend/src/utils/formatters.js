export const formatFollowers = (n) => {
  if (typeof n !== "number") return n;
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n;
};

export const formatVotes = (n) => {
  if (typeof n !== "number") return n;
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n;
};
