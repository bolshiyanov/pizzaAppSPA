// button.tsx

import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";

import { Feather } from "@expo/vector-icons";

import { tintColorLight } from "@/constants/Colors";

interface ButtonProps {
  id: string;
  path: string;
}

export default function Button(props: ButtonProps) {
  const { id, path } = props;

  const router = useRouter();

  const handlePressBack = () => {
    router.replace(path as any);
  };

  const { addToWishList, removeFromWishList } = wishListSlice.actions;

  const { items: wishList } = useAppSelector((state) => state.wishListReducer);

  const dispatch = useAppDispatch();

  const subscribe = () => {
    dispatch(addToWishList(id));
  };

  const unsubscribe = () => {
    dispatch(removeFromWishList(id));
  };

  const hasItemInWishList = wishList.includes(id);

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.firstButton}>
        <Pressable
          style={hasItemInWishList ? styles.buttonRemove : styles.button}
          onPress={handlePressBack}
        >
          <Feather name="arrow-left-circle" size={24} color="white" />
        </Pressable>
      </View>

      <View style={styles.secondButton}>
        <Pressable
          style={hasItemInWishList ? styles.buttonRemove : styles.button}
          onPress={hasItemInWishList ? unsubscribe : subscribe}
        >
          <Text style={styles.text}>
            {hasItemInWishList ? "Remove from wish list" : "Add to wish list"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 1,
  },
  firstButton: {
    width: "20%",
    marginRight: 1,
    height: 48,
  },
  secondButton: {
    width: "80%",
    height: 48,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: tintColorLight,
  },
  buttonRemove: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#cccccc",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "tintColorLight",
  },
});
