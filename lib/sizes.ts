export const handleSizes = (
  measureWidth: number,
  width: number,
  widthLimit: boolean
) => {
  if (widthLimit && width > 1024) return '375px'
  return Math.trunc(measureWidth).toString() + 'px'
}
