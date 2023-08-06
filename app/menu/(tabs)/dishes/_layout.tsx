import { MaterialTopTabs } from "@/src/utils/material-top-tabs";
export const unstable_settings = {
    initialRouteName: 'first',
  };

export default function Layout() {
  return (
    <MaterialTopTabs
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/material-top-tab-navigator#options
        }
      }
    />
  );
}

