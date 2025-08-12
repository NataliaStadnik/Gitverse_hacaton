export function truncateText(text: string, limit: number): string {
  if (!text) return ''
  if (text.length <= limit) return text

  let truncated = text.slice(0, limit)

  const lastSpace = truncated.lastIndexOf(' ')
  if (lastSpace > 0) {
    truncated = truncated.slice(0, lastSpace)
  }

  return truncated + '…'
}
