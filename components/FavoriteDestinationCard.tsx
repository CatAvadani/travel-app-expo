import Colors from '@/constants/Colors';
import { useFavoriteDestinations } from '@/store/FavoritesContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Destination } from './CategoryItems';

interface FavoriteDestinationCardProps {
  destination: Destination;
}
const { width } = Dimensions.get('window');

const FavoriteDestinationCard = ({
  destination,
}: FavoriteDestinationCardProps) => {
  const { toggleFavorite } = useFavoriteDestinations();

  const handlePress = () => {
    toggleFavorite(destination);
  };

  return (
    <Link href={`/details/${destination.id}`} asChild>
      <Pressable>
        <View style={styles.container}>
          <View>
            <Image style={styles.image} source={{ uri: destination.image }} />
            <Pressable onPress={handlePress} style={styles.favoriteIcon}>
              <MaterialCommunityIcons
                name="heart"
                size={20}
                color={Colors.white}
              />
            </Pressable>
          </View>
          <View style={{ gap: 5 }}>
            <Text
              style={styles.itemText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {destination.name}
            </Text>
            <View style={styles.location}>
              <Ionicons name="location" size={20} color={Colors.primaryColor} />
              <Text
                style={styles.locationText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {destination.location}
              </Text>
            </View>

            <View style={styles.ratings}>
              <View style={styles.ratings}>
                <Ionicons name="star" size={20} color={Colors.primaryColor} />
                <Text style={styles.itemRating}>{destination.rating}</Text>
              </View>
              <Text style={styles.price}>
                {destination.price} Kr
                <Text style={{ color: '#cececf', fontSize: 10 }}>
                  /per person
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default FavoriteDestinationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: width - 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
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
    color: Colors.black,
    width: 200,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primaryColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
    width: 200,
  },
  location: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemRating: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 5,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 20,
    backgroundColor: Colors.secondaryColor,
    padding: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
