// Color constants for AI Hairstyle Studio
export const FEATURE_COLORS = [
  { bgColor: '#ffd6e0', iconColor: '#d63384' }, // Soft pink
  { bgColor: '#e6d5f7', iconColor: '#9775fa' }, // Soft lavender
  { bgColor: '#d4e5ff', iconColor: '#5c7cfa' }, // Soft blue
  { bgColor: '#c3fae8', iconColor: '#20c997' }, // Soft mint
  { bgColor: '#ffe8cc', iconColor: '#fd7e14' }, // Soft peach
  { bgColor: '#e5dbff', iconColor: '#7950f2' }, // Soft purple
] as const;

export const STEP_GRADIENTS = [
  'from-[#ffd6e0] to-[#e83e8c]', // Pink gradient
  'from-[#e6d5f7] to-[#9775fa]', // Lavender gradient
  'from-[#d4e5ff] to-[#5c7cfa]', // Blue gradient
] as const;

export const STEP_SHADOWS = [
  'rgba(214, 51, 132, 0.25)', // Pink shadow
  'rgba(151, 117, 250, 0.25)', // Lavender shadow
  'rgba(92, 124, 250, 0.25)', // Blue shadow
] as const;

// Helper functions
export function getFeatureColor(index: number) {
  return FEATURE_COLORS[index % FEATURE_COLORS.length];
}

export function getStepGradient(index: number) {
  return STEP_GRADIENTS[index % STEP_GRADIENTS.length];
}

export function getStepShadow(index: number) {
  return STEP_SHADOWS[index % STEP_SHADOWS.length];
}
