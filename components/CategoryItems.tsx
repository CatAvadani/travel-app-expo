import Colors from '@/constants/Colors';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Destination {
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

  useEffect(() => {
    console.log('Category:', category);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderItem = ({ item }: { item: Destination }) => {
    return (
      <Link href={`/details/${item.id}`} asChild>
        <Pressable>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color={Colors.white}
              />
            </View>
            <Text
              style={styles.itemText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={styles.itemsLocationText}>{item.location}</Text>
              </View>
              <Text style={styles.itemsPriceText}>{item.price}Kr</Text>
            </View>
          </View>
        </Pressable>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        data={loading ? [] : destinations}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  bookmark: {
    position: 'absolute',
    top: 185,
    right: 20,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 10,
    width: 200,
  },
  itemsLocationText: {
    fontSize: 14,
    color: Colors.black,
    marginLeft: 5,
  },
  itemsPriceText: {
    fontSize: 14,
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
});
