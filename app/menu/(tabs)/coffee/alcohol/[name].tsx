import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import coffeeAlcohol from "@/data/menu/coffee/coffeeAlcohol";
import { currencySymbol } from "@/data/settings/currency";

import { ScrollView } from "react-native-gesture-handler";

const CoffeeDetails = () => {
  const { name } = useLocalSearchParams();
  const selectedName = Array.isArray(name) ? name[0] : name;

  const item = coffeeAlcohol.find((c) => c.name.toString() === selectedName);
  const handlePressBack = () => {
    router.replace("/menu/coffee/alcohol/");
  };

  return (
    <ScrollView style={styles.container}>
      {item && (
        <>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>
              Alcohol:
              <Text style={styles.detailsText}>&nbsp;{item.alcohol}</Text>
            </Text>
            <Text style={styles.detailsTitle}>Details:</Text>
            <Text style={styles.detailsText}>{item.descritions}</Text>
            <Text style={styles.detailsTitle}>
              Price:{" "}
              <Text style={styles.detailsPrice}>
                &nbsp;{item.price}&nbsp;{currencySymbol}&nbsp;
              </Text>
            </Text>
          </View>
        </>
      )}

      <TouchableOpacity style={styles.backButton} onPress={handlePressBack}>
        <Ionicons name="ios-arrow-back" size={30} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={handlePressBack}>
        <Ionicons name="ios-arrow-back" size={26} color="#FFFFFF" />
      </TouchableOpacity>
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
    fontWeight: '400',
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
