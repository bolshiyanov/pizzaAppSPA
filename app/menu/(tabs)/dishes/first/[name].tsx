import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import data from "@/data/menu/dishesData/dishesFirstData";
import { currencySymbol } from "@/data/settings/currency";

import { ScrollView } from "react-native-gesture-handler";

import Button from "@/src/components/common/Button";

const DishesFirstDetails = () => {
  const { name } = useLocalSearchParams();
  const selectedName = Array.isArray(name) ? name[0] : name;

  const item = data.find((c) => c.name.toString() === selectedName);
  
  const path = "/menu/dishes/first/" 

  return (
    <ScrollView style={styles.container}>
      {item && (
        <>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.name}>
            {item.name}&nbsp;
            {item.type && <Text style={styles.name}>{item.type}</Text>}
          </Text>
          <View style={styles.detailsContainer}>
            {item.ingredients && (
              <Text style={styles.detailsTitle}>
                Ingredients:
                <Text style={styles.detailsText}>&nbsp;{item.ingredients}</Text>
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
                Price {item.sizeSmall}:{" "}
                <Text style={styles.detailsPrice}>
                  &nbsp;{item.priceSmall}&nbsp;{currencySymbol}&nbsp;
                </Text>
              </Text>
            )}

            {item.sizeMidl && (
              <Text style={styles.detailsTitle}>
                Price {item.sizeMidl}:{" "}
                <Text style={styles.detailsPrice}>
                  &nbsp;{item.priceMidl}&nbsp;{currencySymbol}&nbsp;
                </Text>
              </Text>
            )}
            {item.sizeBig && (
              <Text style={styles.detailsTitle}>
                Price {item.sizeBig}:{" "}
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
    fontWeight: "300",
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

export default DishesFirstDetails;

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  
  return Promise.resolve(data.map((item) => ({ name: item.name })));
}