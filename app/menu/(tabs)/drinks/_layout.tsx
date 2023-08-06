import { MaterialTopTabs } from "@/src/utils/navigations/material-top-tabs";
export const unstable_settings = {
    initialRouteName: 'beverages',
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

