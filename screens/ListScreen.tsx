import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import { useColorScheme } from "react-native";
import { COLORS } from "../styles/global";
import { Theming } from "../styles/global";
import LoadingIcon from "../shared/loadingIcon/loadingIcon";
import CustomHeader from "../shared/header/GoBackHeader";

export default function ListScreen() {
  return (
    <>
      <CustomHeader />
      <View style={styles.centerContent}>
        <Text>Invoice List</Text>
      </View>
    </>
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
