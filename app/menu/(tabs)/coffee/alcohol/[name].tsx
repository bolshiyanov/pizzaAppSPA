import { useLocalSearchParams } from "expo-router";
import React from "react";

import { View, StyleSheet, Image, Text } from "react-native";


import data from "@/data/menu/coffeeData/coffeeAlcohol";
import { currencySymbol } from "@/data/settings/currency";
import { ScrollView } from "react-native-gesture-handler";

import Button from "@/src/components/common/Button";

const CoffeeDetails = () => {
  const { name } = useLocalSearchParams();
  const selectedName = Array.isArray(name) ? name[0] : name;

  const item = data.find((c) => c.name.toString() === selectedName);

  const path = "/menu/coffee/alcohol/";

  return (
    <ScrollView style={styles.container}>
      
      
      {item && (
        <>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.detailsContainer}>
            {item.alcohol && (
              <Text style={styles.detailsTitle}>
                Alcohol:
                <Text style={styles.detailsText}>&nbsp;{item.alcohol}</Text>
              </Text>
            )}

            <Button id={item.id} path={path} />

            {item.descritions && (
              <>
                <Text style={styles.detailsTitle}>Details:</Text>
                <Text style={styles.detailsText}>{item.descritions}</Text>
              </>
            )}
            <Text style={styles.detailsTitle}>
              Price:{" "}
              <Text style={styles.detailsPrice}>
                &nbsp;{item.price}&nbsp;{currencySymbol}&nbsp;
              </Text>
            </Text>
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

export default CoffeeDetails;
