import { ThemeDefinition } from "vuetify";
import colors from "tailwindcss/colors.js";

export const BLUE_THEME = "blueTheme";
export const blueTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#040A14",
    surface: "#091427",
    primary: colors.blue[500],
    "primary-lighten-1": colors.blue[400],
    "primary-lighten-2": colors.blue[300],
    "primary-lighten-3": colors.blue[200],
    "primary-lighten-4": colors.blue[100],
    "primary-darken-1": colors.blue[600],
    "primary-darken-2": colors.blue[700],
    "primary-darken-3": colors.blue[800],
    "primary-darken-4": colors.blue[900],
  },
};
