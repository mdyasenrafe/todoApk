import { TextStyle } from "react-native";
import { TypographyFont } from "../../../Theme/Typrography";

const BASE: TextStyle = {
  fontFamily: TypographyFont.regular,
  fontSize: 16,
};

const BOLD: TextStyle = {
  fontFamily: TypographyFont.bold,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 40,
  },
  h2: {
    ...BOLD,
    fontSize: 32,
  },
  h6: { ...BOLD, fontSize: 18 },
  p: {
    ...BASE,
  },
};
export type TextPresets = keyof typeof presets;
