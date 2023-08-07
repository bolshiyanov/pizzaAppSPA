import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppSelector } from "@/src/utils/hooks/redux";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { tintColorLight } from "@/constants/Colors";

interface IndicatorProps {
  id: string;
}

export default function Indicator(props: IndicatorProps) {
  const { id } = props;
  
  const { items: wishList } = useAppSelector((state) => state.wishListReducer);

  const hasItemInWishList = wishList.includes(id);

  if (!hasItemInWishList) {
    return null;
  }

  if (!id) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.icon1}>
        <FontAwesome name="heart" size={30} style={{ color: '#ffffff' }} />
      </View>
      <View style={styles.icon2}>
        <FontAwesome name="heart" size={26} style={{ color: tintColorLight }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  icon1: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  icon2: {
    position: "absolute",
    top: 2,
    right: 2,
  },
});
