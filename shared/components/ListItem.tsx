// @ts-nocheck
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

//Utils
import { COLORS, images } from "../../styles/global";
import { Theming } from "../../styles/global";
import sizes from "../../utils/sizes";
import { useNavigation } from "@react-navigation/native";

//Types
interface ListItemProps {
  Item: {
    id: number;
    nifEmitente: string; //A:
    nifAdquirente: string; //B:
    paisAdquirente: string; //C:
    typeOfDoc: string; //D:
    docState: string; //E:
    date: string; //F:
    uIdDoc: string; //G:
    aTCUD: string; //H:
    taxCountryRegion: string; //I1
    basePriceNotIva: string; //I2
    iva: string; //I3
    taxValue: string; //I4
    totalValue: string; //I6
    codeControl: string;
    certificateNumber: number;
  };
}

export default function ListItem(props: ListItemProps) {
  //Utils
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("InvoiceScreen", { Item: props.Item });
      }}
    >
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>{props.Item.id}</Text>
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
