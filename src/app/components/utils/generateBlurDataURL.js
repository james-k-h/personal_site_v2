export function generateBlurDataURL(width = 10, height = 10) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='${width}' height='${height}' fill='%23ccc' filter='url(%23b)'/%3E%3C/svg%3E`;
}
