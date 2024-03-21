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
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item 1234512341232121212221",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
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
