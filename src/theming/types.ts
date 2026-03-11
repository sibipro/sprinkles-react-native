export interface SprinklesColorPalette {
  DEFAULT: string;
  background: {
    DEFAULT: string;
    hover: string;
    alt: string;
  };
  foreground: {
    DEFAULT: string;
    heading: string;
    label: string;
    inverted: string;
  };
  outline: string;
}

export interface SprinklesTheme {
  background: {
    DEFAULT: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  foreground: {
    DEFAULT: string;
    heading: string;
    label: string;
  };
  border: {
    DEFAULT: string;
    alt: string;
    secondary: string;
    tertiary: string;
  };
  popover: {
    DEFAULT: string;
    foreground: string;
  };
  tooltip: {
    DEFAULT: string;
    foreground: string;
  };
  toast: {
    DEFAULT: string;
    foreground: string;
    danger: {
      DEFAULT: string;
      foreground: string;
    };
  };
  actionbar: {
    DEFAULT: string;
    foreground: string;
  };
  dialog: {
    DEFAULT: string;
    foreground: string;
    backdrop: string;
  };
  ring: string;
  shadow: string;
  outline: string;
  accent: {
    DEFAULT: string;
    foreground: string;
  };
  primary: SprinklesColorPalette;
  brand: SprinklesColorPalette;
  success: SprinklesColorPalette;
  info: SprinklesColorPalette;
  warn: SprinklesColorPalette;
  danger: SprinklesColorPalette;
  stock: {
    available: string;
    substitution: string;
    unavailable: string;
    unknown: string;
  };
}

export const TONES = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
export type Tone = (typeof TONES)[number];
