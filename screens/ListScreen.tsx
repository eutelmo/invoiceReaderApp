import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from "react-native";

//Utils
import { COLORS } from "../styles/global";

//Components
import CustomHeader from "../shared/header/GoBackHeader";
import ListItem from "../shared/components/ListItem";
import sizes from "../utils/sizes";


export default function ListScreen() {
  const DATA = [
    {
      id: 2024020001,
      nifEmitente: "123456789 ", //A:
      nifAdquirente: "999999990", //B:
      paisAdquirente: "PT", //C:
      typeOfDoc: "FS", //D:
      docState: "N", //E:
      date: "20191231", //F:
      uIdDoc: "FT AB2019/0035", //G:
      aTCUD: "CSDF7T5H-0035", //H:
      taxCountryRegion: "PT",  //I1
      basePriceNotIva: "12000.00", //I2
      iva: "15000.00", //I3
      taxValue: "900.00", //I4
      totalValue: "11000.00", //I6,
      codeControl: "udER",
      certificateNumber: 196,
    },
    {
      id: 2024020002,
      nifEmitente: "123456789 ", //A:
      nifAdquirente: "999999990", //B:
      paisAdquirente: "PT", //C:
      typeOfDoc: "FS", //D:
      docState: "N", //E:
      date: "20191231", //F:
      uIdDoc: "FT AB2019/0035", //G:
      aTCUD: "CSDF7T5H-0035", //H:
      taxCountryRegion: "PT",  //I1
      basePriceNotIva: "12000.00", //I2
      iva: "15000.00", //I3
      taxValue: "900.00", //I4
      totalValue: "11000.00", //I6,
      codeControl: "udER",
      certificateNumber: 196,
    },
    {
      id: 2024020003,
      nifEmitente: "123456789 ", //A:
      nifAdquirente: "999999990", //B:
      paisAdquirente: "PT", //C:
      typeOfDoc: "FS", //D:
      docState: "N", //E:
      date: "20191231", //F:
      uIdDoc: "FT AB2019/0035", //G:
      aTCUD: "CSDF7T5H-0035", //H:
      taxCountryRegion: "PT",  //I1
      basePriceNotIva: "12000.00", //I2
      iva: "15000.00", //I3
      taxValue: "900.00", //I4
      totalValue: "11000.00", //I6,
      codeControl: "udER",
      certificateNumber: 196,
    }
  ];

  return (
    <>
      <CustomHeader />
      <View style={styles.centerContent}>
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index })=>{
              return (
                <ListItem Item={item}/>
              )
            }}
            keyExtractor={(item, index) => `${item.id}_${Date.now()}_${index}`}
          />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    paddingBottom: sizes.scaleHeightSize(20),
    marginTop: sizes.scaleHeightSize(10)
  },
  loadingText: {
    fontSize: 30,
    fontFamily: "BoldFont",
  },
});
