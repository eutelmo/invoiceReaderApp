import { ReactNode, useContext } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//utils
import sizes from "../../utils/sizes";
import { COLORS, images } from "../../styles/global";

//Context
import { ThemeColorContext } from "../../context/themeColorContext";

export default function MainHeader() {
  return (
    <>
      <SafeAreaView style={styles.headerBody}>
        <Image style={styles.tinyLogo} source={images.icons["QRImage"]} />
        <Text style={styles.text}>QR App</Text>
        <Image style={styles.tinyLogo} source={images.icons["QRImage"]} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  headerBody: {
    flex: 0.1,
    padding: sizes.scaleWidthSize(10),
    marginBottom: sizes.scaleWidthSize(10),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.accent.dark[400],
  },
  tinyLogo: {
    width: sizes.WIDTH_40,
    height: sizes.HEIGHT_40,
    resizeMode: "contain",
  },
  text: {
    marginLeft: sizes.scaleWidthSize(5),
    fontFamily: "RegularFont",
    fontSize: sizes.FONT_SIZE_20,
  },
});
