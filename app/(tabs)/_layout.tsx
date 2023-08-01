import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import  Entypo from '@expo/vector-icons/Entypo';   
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */


export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Pizzas',
          tabBarIcon: () => <FontAwesome5 name="pizza-slice" size={24} color="black" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="gittip"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="salad"
        options={{
          title: 'Salad',
          tabBarIcon: () => <Entypo name="bowl" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="dessert"
        options={{
          title: 'Dessert',
          tabBarIcon: () => <MaterialCommunityIcons name="cupcake" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="drinks"
        options={{
          title: 'Drinks',
          tabBarIcon: () => <MaterialIcons name="local-drink" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="coffee"
        options={{
          title: 'Coffee',
          tabBarIcon: () => <FontAwesome name="coffee" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
