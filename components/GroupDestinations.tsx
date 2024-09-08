import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface GroupDestinationsProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
}

const { width } = Dimensions.get('window');

const GroupDestinations = ({
  listings,
}: {
  listings: GroupDestinationsProps[];
}) => {
  const renderItem = ({ item }: { item: GroupDestinationsProps }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.textOverlay}>
          <Text style={styles.itemText}>{item.name}</Text>
          <View style={styles.ratings}>
            <Ionicons name="star" size={20} color={Colors.white} />
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
  container: {
    flexDirection: 'row',
    width: width - 50,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 150,
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
    color: Colors.white,
    marginBottom: 8,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRating: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
    marginLeft: 5,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'flex-start',
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
  },
});
