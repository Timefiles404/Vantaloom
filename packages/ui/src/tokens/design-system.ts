export const colorModes = ["light", "dark"] as const;
export type ColorMode = (typeof colorModes)[number];

export const materialModes = ["solid", "glass"] as const;
export type MaterialMode = (typeof materialModes)[number];

export const densityModes = ["compact", "comfortable"] as const;
export type DensityMode = (typeof densityModes)[number];

export const radiusScale = {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "10px",
  xl: "14px"
} as const;
