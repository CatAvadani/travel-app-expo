import Colors from '@/constants/Colors';
import { useFavoriteDestinations } from '@/store/FavoritesContext';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Destination } from './CategoryItems';

export const DestinationCard = ({
  destination,
}: {
  destination: Destination;
}) => {
  const { favoritesDestinations } = useFavoriteDestinations();

  const isFavorite = favoritesDestinations.some(
    (fav) => fav.id === destination.id
  );

  const { toggleFavorite } = useFavoriteDestinations();
  const handlePress = () => {
    toggleFavorite(destination);
  };

  return (
    <Link href={`/details/${destination.id}`} asChild>
      <Pressable>
        <View style={styles.item}>
          <Image source={{ uri: destination.image }} style={styles.image} />
          <Pressable onPress={handlePress} style={styles.bookmark}>
            <MaterialCommunityIcons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={Colors.white}
            />
          </Pressable>
          <Text style={styles.itemText} numberOfLines={1} ellipsizeMode="tail">
            {destination.name}
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
              <Text
                style={styles.itemsLocationText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {destination.location}
              </Text>
            </View>
            <Text style={styles.itemsPriceText}>{destination.price}Kr</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

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
    top: 20,
    right: 20,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
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
    width: 100,
  },
  itemsPriceText: {
    fontSize: 14,
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
});
