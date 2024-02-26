import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingIcon from "./shared/loadingIcon/loadingIcon";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App to start working on your app!</Text>
      </View>
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
