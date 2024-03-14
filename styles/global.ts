import { StyleSheet } from "react-native";

export const images = {
  icons: {
    cloud: require("../assets/icons/cloud-computing.png"),
    errorCloud: require("../assets/icons/error-load.png"),
    loading: require("../assets/icons/loading.png"),
    doorIcon: require("../assets/icons/opened-door-aperture.png"),
    search: require("../assets/icons/search.png"),
    addIcon: require("../assets/icons/plus.png"),
    QRImage: require("../assets/icons/QRImage.png"),

  },
};

export const COLORS = {
  black: "#000000",
  white: "#ffffff",
  gray: "#fdfdfd",
  success: "#a0d468",
  danger: "#D44848",
  error: "#FAA19B",
  warning: "#E07F20",

  out: "rgba(212, 72, 72, 0.4)",
  in: "rgba(72, 212, 91, 0.4)",
  cardSelect: "rgba(0, 71, 186, 0.12)",
  assistentCard: {
    light: "rgba(51, 51, 51, 0.08)",
    dark: "rgba(255, 255, 255, 0.08)",
  },

  backgroundLight: "#ffffff",
  backgroundDark: "#0F182D",

  neutral: {
    50: "#E7E7E7",
    100: "#C2C2C2",
    150: "#D9D9D9",
    200: "#999999",
    300: "#707070",
    400: "#525252",
    500: "#333333",
    600: "#2E2E2E",
    700: "#272727",
    800: "#202020",
    900: "#141414",
    A4: "rgba(51,51,51,0.04)",
    A8: "rgba(51,51,51,0.08)",
    A12: "rgba(51,51,51,0.12)",
    A20: "rgba(51,51,51,0.20)",
    A32: "rgba(51,51,51,0.32)",
    A48: "rgba(51,51,51,0.48)",
    A64: "rgba(51,51,51,0.64)",
    A72: "rgba(51,51,51,0.72)",
    A88: "rgba(51,51,51,0.88)",
    //dark
    dark: {
      50: "#E7E7E7",
      100: "rgba(255,255,255,0.08)",
      150: "rgba(255,255,255,0.12)",
      200: "#999999",
      300: "rgba(255,255,255,0.64)",
      400: "#525252",
      500: "rgba(255,255,255,0.88)",
      600: "#2E2E2E",
      700: "#272727",
      800: "#202020",
      900: "#141414",
      A4: "rgba(255,255,255,0.04)",
      A8: "rgba(255,255,255,0.08)",
      A12: "rgba(255,255,255,0.12)",
      A20: "rgba(255,255,255,0.20)",
      A32: "rgba(255,255,255,0.32)",
      A48: "rgba(255,255,255,0.48)",
      A64: "rgba(255,255,255,0.64)",
      A72: "rgba(255,255,255,0.72)",
      A88: "rgba(255,255,255,0.88)",
    },
  },
  accent: {
    50: "#E0E9F7",
    100: "#B3C8EA",
    200: "#80A3DD",
    300: "#4D7ECF",
    400: "#2663C4",
    500: "#0047BA",
    600: "#0040B3",
    700: "#0037AB",
    800: "#002FA3",
    900: "#002094",
    A4: "rgba(0,71,186,0.04)",
    A8: "rgba(0,71,186,0.08)",
    A12: "rgba(0,71,186,0.12)",
    A20: "rgba(0,71,186,0.20)",
    A32: "rgba(0,71,186,0.32)",
    A48: "rgba(0,71,186,0.48)",
    A64: "rgba(0,71,186,0.64)",
    A72: "rgba(0,71,186,0.72)",
    A88: "rgba(0,71,186,0.88)",
    dark: {
      50: "#ECF2FA",
      100: "#D1DEF2",
      200: "#B3C8EB",
      300: "#94B2E2",
      400: "#7DA1DC",
      500: "#6691D6",
      600: "#668CD1",
      700: "#6687CD",
      800: "#6682C8",
      900: "#6679BF",
      A4: "rgba(102,145,214,0.04)",
      A8: "rgba(102,145,214,0.08)",
      A12: "rgba(102,145,214,0.12)",
      A20: "rgba(102,145,214,0.20)",
      A32: "rgba(102,145,214,0.32)",
      A48: "rgba(102,145,214,0.48)",
      A64: "rgba(102,145,214,0.64)",
      A72: "rgba(102,145,214,0.72)",
      A88: "rgba(102,145,214,0.88)",
    },
  },
};

export const Theming = StyleSheet.create({
  //LIGHT Container
  lightContainer: {
    backgroundColor: COLORS.backgroundLight,
  },

  //LIGHT Text
  lightThemeText: {
    color: COLORS.neutral[500],
  },

  // ||-------------------------- DARK ---------------------------------||

  //DARK Container
  darkContainer: {
    backgroundColor: COLORS.backgroundDark,
  },

  //DARK Text
  darkThemeText: {
    color: COLORS.neutral.dark[500],
  },
});
