import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import data from "@/data/menu/drinksData/drinksBeveragesData";
import { currencySymbol } from "@/data/settings/currency";

import { ScrollView } from "react-native-gesture-handler";

import Button from "@/src/components/common/Button";

const BeveragesDetails = () => {
  const { name } = useLocalSearchParams();
  const selectedName = Array.isArray(name) ? name[0] : name;

  const item = data.find((c) => c.name.toString() === selectedName);
  const path = "/menu/drinks/beverages/";

  return (
    <ScrollView style={styles.container}>
      {item && (
        <>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.detailsContainer}>
            {item.type && (
              <Text style={styles.detailsTitle}>
                Type:
                <Text style={styles.detailsText}>&nbsp;{item.type}</Text>
              </Text>
            )}
            {item.marca && (
              <Text style={styles.detailsTitle}>
                Marca:
                <Text style={styles.detailsText}>&nbsp;{item.marca}</Text>
              </Text>
            )}

            <Button id={item.id} path={path} />

            {item.descritions && (
              <>
                <Text style={styles.detailsTitle}>Details:</Text>
                <Text style={styles.detailsText}>{item.descritions}</Text>
              </>
            )}

            {item.sizeSmall && (
              <Text style={styles.detailsTitle}>
                Price of {item.sizeSmall}:{" "}
                <Text style={styles.detailsPrice}>
                  &nbsp;{item.priceSmall}&nbsp;{currencySymbol}&nbsp;
                </Text>
              </Text>
            )}

            {item.sizeMidl && (
              <Text style={styles.detailsTitle}>
                Price of {item.sizeMidl}:{" "}
                <Text style={styles.detailsPrice}>
                  &nbsp;{item.priceMidl}&nbsp;{currencySymbol}&nbsp;
                </Text>
              </Text>
            )}

            {item.sizeBig && (
              <Text style={styles.detailsTitle}>
                Price of {item.sizeBig}:{" "}
                <Text style={styles.detailsPrice}>
                  &nbsp;{item.priceBig}&nbsp;{currencySymbol}&nbsp;
                </Text>
              </Text>
            )}
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 16,
  },
  detailsContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailsPrice: {
    fontSize: 18,
    backgroundColor: "#2f95dc",
    color: "#ffffff",
    borderRadius: 10,
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 4,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "transparent",
    opacity: 0.8,
  },
});

export default BeveragesDetails;
