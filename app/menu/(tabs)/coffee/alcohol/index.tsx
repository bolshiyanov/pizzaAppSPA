import { Link, Stack  } from 'expo-router';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
} from 'react-native';

import coffeeAlcohol from '@/data/menu/coffee/coffeeAlcohol';

import { CoffeeItem } from '@/types/coffeeType';

const CoffeePage = () => {
  
  const renderItem = ({ item }: { item: CoffeeItem }) => (
    
      <Link href={`/menu/coffee/alcohol/${item.name}`} asChild>
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
      </Pressable>
    </Link>
    
  );

  return (
    <FlatList
      data={coffeeAlcohol}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  city: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  name: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});


export default CoffeePage;
