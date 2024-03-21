import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

//Utils
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { COLORS, images } from "../styles/global";
import { Theming } from "../styles/global";
import sizes from "../utils/sizes";

//Types
interface InvoiceScreenProps {
  route: {
    params: {
      Item: {
        id: number;
        nifEmitente: string;
        nifAdquirente: string;
        paisAdquirente: string;
        typeOfDoc: string;
        docState: string;
        date: string;
        uIdDoc: string;
        aTCUD: string;
        taxCountryRegion: string;
        basePriceNotIva: string;
        iva: string;
        taxValue: string;
        totalValue: string;
        codeControl: string;
        certificateNumber: number;
      };
    };
  };
}

export default function InvoiceScreen({ route }: InvoiceScreenProps) {
  const { Item } = route.params;

  return (
    <View>
      <Text>ID: {Item.id}</Text>
      <Text>NIF Emitente: {Item.nifEmitente}</Text>
      <Text>NIF Adquirente: {Item.nifAdquirente}</Text>
      <Text>Pais Adquirente: {Item.paisAdquirente}</Text>
      <Text>Tipo de Documento: {Item.typeOfDoc}</Text>
      <Text>Estado do Documento: {Item.docState}</Text>
      <Text>Data: {Item.date}</Text>
      <Text>Uid do Documento: {Item.uIdDoc}</Text>
      <Text>ATCUD: {Item.aTCUD}</Text>
      <Text>Região de País de Tributação: {Item.taxCountryRegion}</Text>
      <Text>Base de Preço (sem IVA): {Item.basePriceNotIva}</Text>
      <Text>IVA: {Item.iva}</Text>
      <Text>Valor do Imposto: {Item.taxValue}</Text>
      <Text>Valor Total: {Item.totalValue}</Text>
      <Text>Código de Controle: {Item.codeControl}</Text>
      <Text>Número do Certificado: {Item.certificateNumber}</Text>
      <Text>Número do Certificado: ola</Text>
    </View>
  );
}
