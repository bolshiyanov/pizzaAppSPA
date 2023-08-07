import { Link, Stack  } from 'expo-router';
import React from 'react';
import Indicator from "@/src/components/common/Indicator";

import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
} from 'react-native';

import data from '@/data/menu/drinksData/drinksAlcoholData';

import { AlcoholInterface } from '@/types/drinksType';

const AlcoholPage = () => {
  
  const renderItem = ({ item }: { item: AlcoholInterface   }) => (
    
      <Link href={`/menu/drinks/beverages/${item.name}`} asChild>
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
        <Indicator id={item.id} />
      </Pressable>
    </Link>
    
  );

  return (
    <FlatList
      data={data}
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
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
});


export default AlcoholPage;
