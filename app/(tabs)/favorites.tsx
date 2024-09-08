import FavoriteDestinationCard from '@/components/FavoriteDestinationCard';
import Colors from '@/constants/Colors';
import { useFavoriteDestinations } from '@/store/FavoritesContext';
import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const Page = () => {
  const { favoritesDestinations } = useFavoriteDestinations();
  const router = useRouter();

  if (!favoritesDestinations) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Your Favorites',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <View
                style={{
                  padding: 10,
                  marginLeft: 5,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </Pressable>
          ),
        }}
      />
      <View style={styles.container}>
        {!favoritesDestinations || favoritesDestinations.length === 0 ? (
          <Text style={styles.emptyText}>Your List is Empty!</Text>
        ) : (
          <FlatList
            data={favoritesDestinations.filter((item) => item && item.id)}
            renderItem={({ item }) =>
              item ? <FavoriteDestinationCard destination={item} /> : null
            }
            keyExtractor={(item) =>
              item?.id?.toString() ?? Math.random().toString()
            }
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: 10,
  },
  emptyText: {
    fontSize: 28,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },

  backButton: {
    marginLeft: 30,
  },
});
