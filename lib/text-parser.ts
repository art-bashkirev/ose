interface Gap {
  id: string
  type: "blank" | "underline" | "numbered"
}

/**
 * Parses text and identifies different types of gaps
 * - **WORD** for bold gaps (to be replaced with underscores)
 * - ____ for underlined gaps
 * - [1], [2], etc. for numbered gaps
 */
export function parseTextWithGaps(text: string): {
  formattedText: string
  gaps: Gap[]
} {
  const gaps: Gap[] = []

  // Replace **WORD** with underscores
  let formattedText = text.replace(/\*\*([^*]+)\*\*/g, (match, word, index) => {
    const gapId = `gap-${gaps.length}`
    gaps.push({ id: gapId, type: "blank" })
    return `<span class="gap-blank" data-gap-id="${gapId}">__________</span>`
  })

  // Replace existing underscores
  formattedText = formattedText.replace(/_{3,}/g, (match, index) => {
    const gapId = `gap-${gaps.length}`
    gaps.push({ id: gapId, type: "underline" })
    return `<span class="gap-underline" data-gap-id="${gapId}">__________</span>`
  })

  // Replace numbered gaps like [1]
  formattedText = formattedText.replace(/\[(\d+)\]/g, (match, number) => {
    const gapId = `gap-${number}`
    gaps.push({ id: gapId, type: "numbered" })
    return `<span class="gap-numbered" data-gap-id="${gapId}">${number}</span>`
  })

  return { formattedText, gaps }
}
