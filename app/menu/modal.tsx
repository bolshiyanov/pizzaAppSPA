import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { useAppSelector } from "@/src/utils/hooks/redux";

import { Text, View } from "react-native";
import Counter from "@/src/utils/counter";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favorite list
      </Text>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
