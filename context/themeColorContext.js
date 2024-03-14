import React, { createContext, ReactNode } from "react";
import { useColorScheme, StyleSheet } from "react-native";
import { Theming } from "../styles/global";

// Interface
// interface ThemeColorContextProps {
//   colorScheme: string | null;
//   themeContainerStyle: Record<string, any>;
//   themeTextStyle: Record<string, any>;
// }

// interface ThemeColorProviderProps {
//   children: ReactNode;
// }

export const ThemeColorContext = createContext();

export const ThemeColorProvider = ({ children }) => {
  const colorScheme = useColorScheme();


  // Container
  const themeContainerStyle =
    colorScheme === "light" ? Theming.lightContainer : Theming.darkContainer;

  // Text
  const themeTextStyle =
    colorScheme === "light" ? Theming.lightThemeText : Theming.darkThemeText;

  return (
    <ThemeColorContext.Provider
      value={{
        colorScheme,
        themeContainerStyle,
        themeTextStyle,
      }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
};
