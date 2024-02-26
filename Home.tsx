import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeColorContext } from "./context/themeColorContext";

//utils
import sizes from "./utils/sizes";

export default function Home() {
  const { themeContainerStyle } = useContext(ThemeColorContext);

  return (
    <>
      <View style={[styles.container, themeContainerStyle]}>
        <Text style={styles.demoText}>
          Open up App to start working on your app!
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  demoText: {
    fontFamily: "RegularFont",
    fontSize: sizes.FONT_SIZE_12,
  },
});
