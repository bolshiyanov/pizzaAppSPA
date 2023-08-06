import React from "react";

import { Provider } from "react-redux";
import { setupStore } from "@/store/store";

import { Drawer } from "@/src/utils/navigations/Drawer";
import { Link } from "expo-router";
import { Pressable } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Counter from "@/src/utils/counter";

export const unstable_settings = {
  initialRouteName: "index",
};

const store = setupStore();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Fermento",
          }}
        />
        <Drawer.Screen
          name="menu" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Menu",
            title: "Menu",
            headerRight: () => (
              <Link href="/menu/modal" asChild>
                <Pressable style={{position: 'relative'}}>
                  {({ pressed }) => (
                    <>
                      <FontAwesome
                        name="gittip"
                        size={32}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                      
      <Counter/>
                      
                    </>
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />

        <Drawer.Screen
          name="contacts" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Contact",
            title: "contact",
          }}
        />
      </Drawer>
    </Provider>
  );
}
