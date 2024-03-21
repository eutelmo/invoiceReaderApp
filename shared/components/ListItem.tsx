import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

//Utils
import { COLORS, images } from "../../styles/global";
import { Theming } from "../../styles/global";
import sizes from "../../utils/sizes";

//Types
interface ListItemProps {
  Item: {
    id: string;
    title: string;
  };
}


export default function ListItem(props: ListItemProps) {
  const truncateString = (str: string, maxLength: number): string => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        console.log(props.Item);
      }}
    >
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>{truncateString(props.Item.title, 20)}</Text>
          <Image source={images.icons["view"]} style={[styles.iconBack]} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: sizes.scaleHeightSize(12),
    marginVertical: sizes.scaleHeightSize(2),
    marginHorizontal: sizes.scaleWidthSize(8),
    width: sizes.scaleWidthSize(290),
    borderColor: COLORS.accent[500],
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "RegularFont",
    fontSize: sizes.FONT_SIZE_14,
  },
  iconBack: {
    height: sizes.scaleHeightSize(20),
    width: sizes.scaleWidthSize(20),
    marginRight: sizes.scaleWidthSize(5),
    resizeMode: "contain",
  },
});
