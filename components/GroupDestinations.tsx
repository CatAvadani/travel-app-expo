import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface GroupDestinationsProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
}

const GroupDestinations = ({
  listings,
}: {
  listings: GroupDestinationsProps[];
}) => {
  const renderItem = ({ item }: { item: GroupDestinationsProps }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Top Travel Agencies</Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupDestinations;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
  },
});
