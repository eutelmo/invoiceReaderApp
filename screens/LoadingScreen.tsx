import React, { useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import { useColorScheme } from "react-native";
import { COLORS } from "../styles/global";
import { Theming } from "../styles/global";
import LoadingIcon from "../shared/loadingIcon/loadingIcon";

export default function LoadingScreen() {
  const colorScheme = useColorScheme()

  // const colorScheme: string = "dark";

  const themeContainerStyle =
    colorScheme === "light" ? Theming.lightContainer : Theming.darkContainer;

  return (
    <View style={[styles.centerContent, themeContainerStyle]}>
      <LoadingIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 30,
    fontFamily: "BoldFont",
  },
});
