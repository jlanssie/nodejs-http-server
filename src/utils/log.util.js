export const COLORS = {
  dim: 2,
  red: 31,
  green: 32,
  yellow: 33,
  magenta: 35,
  cyan: 36,
};

export function getColoredString(name, str) {
  const code = COLORS[name];
  return code ? `\x1b[${code}m${str}\x1b[0m` : str;
}

export function getColoredStatusString(status) {
  const statusCode = Number(status);
  const statusStr = String(status).padEnd(6);

  if (statusCode >= 500) return getColoredString("red", statusStr);
  if (statusCode >= 400) return getColoredString("yellow", statusStr);
  if (statusCode >= 300) return getColoredString("cyan", statusStr);
  if (statusCode >= 200) return getColoredString("green", statusStr);
  return statusStr;
}
