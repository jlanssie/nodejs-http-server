const COLORS = {
  dim: 2,
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
  const statusCodeString = String(status).padEnd(6);

  if (statusCode >= 500) return getColoredString("magenta", statusCodeString);
  if (statusCode >= 400) return getColoredString("yellow", statusCodeString);
  if (statusCode >= 300) return getColoredString("cyan", statusCodeString);
  if (statusCode >= 200) return getColoredString("green", statusCodeString);

  return statusCodeString;
}
