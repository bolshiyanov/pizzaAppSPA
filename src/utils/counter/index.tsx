import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useAppSelector } from "@/src/utils/hooks/redux";
import { tintColorLight } from '@/constants/Colors';

export default function Counter() {

  const { count: wishList } = useAppSelector((state) => state.wishListReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{wishList}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tintColorLight ,
    borderRadius: 12,
    position: 'absolute',
    height: 18,
    weight: 18,
    top: 0,
    right: 7
  },
  title: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingVertical: 3,
    paddingHorizontal: 5
  }
});
