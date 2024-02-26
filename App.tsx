import { StatusBar, useColorScheme } from "react-native";
import { StyleSheet, Text, View } from "react-native";

// Fonts
import { useFonts } from "expo-font";

// Styles
import { COLORS } from "./styles/global";

//Components
import Home from "./Home";
import LoadingScreen from "./screens/LoadingScreen";
import { ThemeColorProvider } from "./context/themeColorContext";

export default function App() {
  //Fonts Import loader
  const [loaded, fontError] = useFonts({
    RegularFont: require("./assets/fonts/OpenSans-Regular.ttf"),
    SemiBoldFont: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    BoldFont: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  //Status Bar
  let colorScheme = useColorScheme();
  const STYLES = ["default", "dark-content", "light-content"];
  const statusBarStyle =
    colorScheme === "light" ? "dark-content" : "light-content";

  //Loading
  if (!loaded && !fontError) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ThemeColorProvider>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.neutral[500]}
          barStyle={statusBarStyle}
        />
        <Home />
      </ThemeColorProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
