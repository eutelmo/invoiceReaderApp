import { ReactNode, useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//utils
import sizes from "../../../utils/sizes";
import { useNavigation } from "@react-navigation/native";

//Context
import { ThemeColorContext } from "../../../context/themeColorContext";

interface HomePageComponentProps {
  text: string;
  image: number;
  verifactionForNavigation: number;
}

export default function HomePageComponent(props: HomePageComponentProps) {
  const { themeTextStyle } = useContext(ThemeColorContext);

  //Utils navigation
  const navigation = useNavigation();

  function testing() {
    switch (props.verifactionForNavigation) {
      case 1: {
        console.log("Camera");
        break;
      }
      case 2: {
        navigation.navigate("ListScreen" as never);
        break;
      }
      case 3: {
        console.log("Out");
        break;
      }
    }
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
