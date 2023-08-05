import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import  Entypo from '@expo/vector-icons/Entypo';   
import {  Tabs } from 'expo-router';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Snack',
          tabBarIcon: () => <FontAwesome5 name="pizza-slice" size={24} color="black" />,
          
        }}
      />
      <Tabs.Screen
        name="dishes"
        options={{
          title: 'Dishes',
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
          title: 'Hot',
          tabBarIcon: () => <FontAwesome name="coffee" size={24} color="black" />,
        }}
      />
      
    </Tabs>
  );
}