import React, { useRef, useEffect } from "react";
import { Animated, Easing, Image, StyleSheet } from "react-native";

import { images } from "../../styles/global";

import sizes from "../../utils/sizes";

export default function LoadingIcon() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <Image
        style={styles.tinyLogo}
        source={images.icons["loading"]} ///change icon Here
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: sizes.FONT_SIZE_20,
    height: sizes.FONT_SIZE_20,
  },
});
