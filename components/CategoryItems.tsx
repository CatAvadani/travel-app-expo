import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { DestinationCard } from './DestinationCard';

export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  category: string;
}

interface CategoryItemsProps {
  destinations: Destination[];
  category: string;
}

const CategoryItems = ({ destinations, category }: CategoryItemsProps) => {
  const [loading, setLoading] = useState(false);

  const item = useEffect(() => {
    console.log('Category:', category);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  return (
    <View>
      <FlatList
        data={loading ? [] : destinations}
        renderItem={({ item }) => <DestinationCard destination={item} />}
        keyExtractor={(destination) => destination.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({});
