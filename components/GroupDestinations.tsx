import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

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
        <View>
          <Text style={styles.itemText}>{item.name}</Text>
          <View style={styles.ratings}>
            <Ionicons name="star" size={20} color={Colors.primaryColor} />
            <Text style={styles.itemRating}>{item.rating}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={styles.title}>Top Travel Agencies</Text>
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
    marginRight: 10,
  },
  item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: 290,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    marginBottom: 8,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRating: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 5,
  },
});
