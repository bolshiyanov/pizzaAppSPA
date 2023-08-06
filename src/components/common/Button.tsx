import React from "react";

import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";

import { View, Text, StyleSheet, Pressable } from "react-native";
import { tintColorLight } from "@/constants/Colors";

interface ButtonProps {
  id: string;
}

export default function Button(props: ButtonProps) {
  const { id } = props;

  const { addToWishList } = wishListSlice.actions;

  const { items: wishList } = useAppSelector((state) => state.wishListReducer);

  const dispatch = useAppDispatch();

  const hasAddedToWishList = () => {
    dispatch(addToWishList(id));
  };

  const hasItemInWishList = wishList.includes(id);

  const Separator = () => <View style={styles.separator} />;
  if (hasItemInWishList) {
    return <Separator />;
  }

  return (
    <>
      <Pressable style={styles.button} onPress={hasAddedToWishList}>
        <Text style={styles.text}>Add to wish list</Text>
      </Pressable>
      <Separator />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: tintColorLight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
