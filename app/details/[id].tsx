import BookingButtons from '@/components/BookingButtons';
import Colors from '@/constants/Colors';
import { destinationsList } from '@/data/destinations';
import { useFavoriteDestinations } from '@/store/FavoritesContext';
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

const DestinationDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const destination = destinationsList.find((d) => d.id === Number(id));
  const { favoritesDestinations, toggleFavorite } = useFavoriteDestinations();

  // Check if the destination is already a favorite
  const isFavorite = favoritesDestinations.some(
    (fav) => fav.id === destination?.id
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 8,
                  borderRadius: 50,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => destination && toggleFavorite(destination)}
              style={{
                padding: 6,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.secondaryColor,
                  padding: 6,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: Colors.white,
                }}
              >
                <MaterialCommunityIcons
                  name={isFavorite ? 'heart' : 'heart-outline'}
                  size={20}
                  color={Colors.white}
                />
              </View>
            </Pressable>
          ),
        }}
      />
      <View style={styles.container}>
        <Animated.ScrollView ref={scrollRef}>
          <Animated.Image
            source={{ uri: destination?.image }}
            style={[styles.image, imageAnimatedStyle]}
          />
          <View style={{ padding: 16, backgroundColor: Colors.white }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {destination?.name}
            </Text>
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
              <Text style={styles.locationText}>{destination?.location}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="clock-time-three"
                    size={22}
                    color={Colors.primaryColor}
                  />
                </View>
                <View>
                  <Text style={{ color: 'gray', fontSize: 12 }}>Duration</Text>
                  <Text style={styles.infoText}>
                    {destination?.duration} Days
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <View style={styles.icon}>
                  <Ionicons
                    name="people-sharp"
                    size={22}
                    color={Colors.primaryColor}
                  />
                </View>
                <View>
                  <Text style={{ color: 'gray', fontSize: 12 }}>Person</Text>
                  <Text style={styles.infoText}>{destination?.duration}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <View style={styles.icon}>
                  <Ionicons name="star" size={20} color={Colors.primaryColor} />
                </View>
                <View>
                  <Text style={{ color: 'gray', fontSize: 12 }}>Rating</Text>
                  <Text style={styles.infoText}>{destination?.rating}</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginVertical: 20,
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 16, lineHeight: 25 }}>
                {destination?.description}
              </Text>
            </View>
          </View>
        </Animated.ScrollView>
        <BookingButtons price={destination?.price} />
      </View>
    </>
  );
};

export default DestinationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
    objectFit: 'cover',
  },
  infoText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
    textTransform: 'capitalize',
  },
  locationText: {
    fontSize: 14,
    color: Colors.black,
    marginLeft: 5,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f0f0',
  },
});
