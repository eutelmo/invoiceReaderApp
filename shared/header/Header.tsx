import { ReactNode, useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//utils
import sizes from "../../utils/sizes";
import { images } from "../../styles/global";

//Context
import { ThemeColorContext } from "../../context/themeColorContext";


export default function HomePageComponent() {

  return (
    <>
       <View style={styles.container}>
        <Image style={styles.tinyLogo} source={images.icons["QRImage"]} />
        <Text style={styles.text}>QR App</Text>
      </View>
    </>
  )

}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: sizes.scaleWidthSize(10),
    flexDirection: "row",
    alignItems: "center",
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
