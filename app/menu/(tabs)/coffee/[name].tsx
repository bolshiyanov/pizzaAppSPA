import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import coffee from "@/data/coffee";
import { ScrollView } from "react-native-gesture-handler";




const CoffeeDetails = () => {
  const { name } = useLocalSearchParams();
  const selectedName = Array.isArray(name) ? name[0] : name;

  const city = coffee.find((c) => c.name.toString() === selectedName);
  const handlePressBack = () => {
    router.replace("/menu/coffee/");
  };

  return (
    <ScrollView style={styles.container}>
      {city && (
        <>
          <Image style={styles.image} source={{ uri: city.image }} />
          <Text style={styles.name}>{city.name}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Details:</Text>
            <Text style={styles.detailsText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              purus euismod, vestibulum dolor a, pulvinar odio. Nunc suscipit
              felis eget est consequat, ac consequat metus aliquet. Vivamus
              faucibus libero sit amet semper molestie. Sed euismod ligula sit
              amet urna maximus dignissim. Praesent aliquam, nunc vel interdum
              dignissim, risus neque dignissim elit, id posuere mauris tortor at
              quam. Duis euismod lobortis enim, vel sollicitudin purus bibendum
              eu. Pellentesque luctus leo id elit congue faucibus. Morbi vel
              nulla enim.
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
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
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