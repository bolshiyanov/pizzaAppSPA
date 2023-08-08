import React from "react";

import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";

import { tintColorLight } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const { removeFromWishList } = wishListSlice.actions;

import data from "@/data/menu/coffeeData/coffeeAlcohol";

import { CoffeeAlcoholInterface} from "@/types/coffeeType";

const Page = () => {
  const { items: wishList } = useAppSelector((state) => state.wishListReducer);


  const wishCaffeAlcoholDataNew = data.filter((item) =>
    wishList.includes(item.id)
  );
  const dispatch = useAppDispatch();

  const unsubscribe = (id: string) => {
    dispatch(removeFromWishList(id));
  };
  const renderItem = ({ item }: { item: CoffeeAlcoholInterface }) => (
    
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subTitle}>Coffee with alcohol</Text>
        </View>
        <TouchableOpacity style={styles.deleteIcon} onPress={() => unsubscribe(item.id)}>
          <MaterialCommunityIcons
            name="delete-circle"
            size={28}
            color={tintColorLight}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
    
  );

  return (
    <FlatList
      data={wishCaffeAlcoholDataNew}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    width: "100%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    color: "gray",
  },
  deleteIcon: {
    position: "absolute",
    right: 0,
  },
});

export default Page;
