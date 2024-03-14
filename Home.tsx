import { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//Context
import { ThemeColorContext } from "./context/themeColorContext";

//utils
import sizes from "./utils/sizes";

//Components
import HomePageComponent from "./shared/homePageComponent/HomePageComponent/homePageComponent";
import { images } from "./styles/global";
import MainHeader from "./shared/header/Header";

export default function Home() {
  const { themeContainerStyle } = useContext(ThemeColorContext);

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <MainHeader />
      <SafeAreaView>
        <HomePageComponent
          text="Adicionar despesas"
          image={images.icons["addIcon"]}
        />
        <HomePageComponent
          text="Consultar despesas"
          image={images.icons["search"]}
        />
        <HomePageComponent text="Sair" image={images.icons["doorIcon"]} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  demoText: {
    fontFamily: "RegularFont",
    fontSize: sizes.FONT_SIZE_12,
  },
});
