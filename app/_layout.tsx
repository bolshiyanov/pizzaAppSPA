import { Drawer } from "@/src/utils/Drawer";
import { Link} from 'expo-router';
import { Pressable } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';


export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  return (
    <Drawer >
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
            <Link href='/menu/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="gittip"
                    size={32}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
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
  );
}