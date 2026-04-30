const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char] || char);
}

export function escapeHtmlPreserveBreaks(input: string): string {
  return escapeHtml(input).replace(/\n/g, '<br>');
}

export function sanitizeIlikeTerm(input: string): string {
  return input
    .replace(/[%_]/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .trim();
}

export function escapeCsvCell(input: string): string {
  const value = input.replace(/"/g, '""');
  const safeValue = /^[=+\-@]/.test(value) ? `'${value}` : value;
  return `"${safeValue}"`;
}
