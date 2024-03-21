import { useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//routes
import AppStack from "./routes/AppStack";

//Utils
import sizes from "./utils/sizes";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Home() {
  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
    lockOrientation();
  }, []);

  return <AppStack />;
}
