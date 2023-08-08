import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "DESSERT",
        headerTitleStyle: {
          fontWeight: "400",
        },
      }}
    >
      <Stack.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "300",
          },
        }}
      />
    </Stack>
  );
}
