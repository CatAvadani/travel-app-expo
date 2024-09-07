import BookingButtons from '@/components/BookingButtons';
import Colors from '@/constants/Colors';
import { destinationsList } from '@/data/destinations';
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const DestinationDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const destinationInfo = destinationsList.find((d) => d.id === Number(id));

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
              style={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                padding: 6,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {}}
              style={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                padding: 6,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <MaterialCommunityIcons name="heart-outline" size={20} />
              </View>
            </Pressable>
          ),
        }}
      />
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={{ uri: destinationInfo?.image }}
            style={styles.image}
          />
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {destinationInfo?.name}
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
              <Text style={styles.locationText}>
                {destinationInfo?.location}
              </Text>
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
                    {destinationInfo?.duration} Days
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
                  <Text style={styles.infoText}>
                    {destinationInfo?.duration}
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
                  <Ionicons name="star" size={20} color={Colors.primaryColor} />
                </View>
                <View>
                  <Text style={{ color: 'gray', fontSize: 12 }}>Rating</Text>
                  <Text style={styles.infoText}>{destinationInfo?.rating}</Text>
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
                {destinationInfo?.description}
              </Text>
            </View>
          </View>
        </ScrollView>
        <BookingButtons price={destinationInfo?.price} />
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
    height: 300,
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
    backgroundColor: '#ede8e8',
  },
});
