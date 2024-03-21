import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

//Utils
import sizes from "../../utils/sizes";
import { COLORS, images } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";

//Context
import { ThemeColorContext } from "../../context/themeColorContext";


//Types
interface CustomHeaderProps {
  onPressGoBack: () => void;
}

export default function CustomHeader({ onPressGoBack }: CustomHeaderProps) {
  //Context
  const {
    themeContainerStyle,
    themeTextStyle,
    themeBorderStyle,
    themeIconStyle,
  } = useContext(ThemeColorContext);

  //Utils
  const navigation = useNavigation();

  return (
    <>
      <View style={[styles.titleBox, themeBorderStyle]}>
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={onPressGoBack}>
            <View style={styles.btnContainer}>
              <Image
                source={images.icons["BackIcon"]}
                style={[styles.iconBack, themeIconStyle]}
              />
              <Text style={[styles.title, themeTextStyle]}>Voltar</Text>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: COLORS.accent.dark[400],
    padding: 10,
    borderBottomWidth: 1,
    width: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "BoldFont",
    fontSize: sizes.isTablet ? sizes.FONT_SIZE_21 : sizes.FONT_SIZE_14,
  },
  iconBack: {
    height: sizes.scaleHeightSize(19),
    width: sizes.scaleWidthSize(11),
    marginRight: sizes.scaleWidthSize(5),
    resizeMode: "contain",
  },
});
