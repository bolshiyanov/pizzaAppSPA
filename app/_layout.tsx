import React from "react";

import { Provider } from "react-redux";
import { setupStore } from "@/store/store";

import { Drawer } from "@/src/utils/navigations/Drawer";
import { SplashScreen, Link } from "expo-router";
import { Pressable } from "react-native";

import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Counter from "@/src/utils/counter";

import { useFonts } from 'expo-font';

const store = setupStore();

export const unstable_settings = {
  initialRouteName: "index",
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();



export default function RootLayout() {

  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "React-Expo SPA APP",
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
