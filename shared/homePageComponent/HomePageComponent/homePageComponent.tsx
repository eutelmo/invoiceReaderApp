import { ReactNode, useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//utils
import sizes from "../../../utils/sizes";
import { images } from "../../../styles/global";

//Context
import { ThemeColorContext } from "../../../context/themeColorContext";

interface HomePageComponentProps {
  text: string;
  image: number;
  
}

export default function HomePageComponent(props: HomePageComponentProps) {
  const { themeTextStyle } = useContext(ThemeColorContext);


  function testing() {
    console.log(props.text);
  }
  return (
    <TouchableOpacity onPress={testing}>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={props.image} />
        <Text style={[styles.text, themeTextStyle]}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
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
