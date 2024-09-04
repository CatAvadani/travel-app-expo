import CategoryButtons from '@/components/CategoryButtons';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Home = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('All');

  const onCategoryChange = (category: string) => {
    setCategory(category);
    console.log('Category:', category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <Pressable onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800',
                }}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  borderRadius: 50,
                }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => {}} style={{ marginRight: 20 }}>
              <Ionicons
                style={styles.notificationIcon}
                name='notifications'
                size={20}
                color={Colors.primaryColor}
              />
            </Pressable>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingText}>Discover Your Next Adventure!</Text>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name='search' size={18} color={Colors.primaryColor} />
            <TextInput placeholder='Search...' />
          </View>
          <Pressable onPress={() => {}}>
            <Ionicons
              name='options'
              size={28}
              color={Colors.primaryColor}
              style={{
                backgroundColor: Colors.secondaryColor,
                padding: 10,
                borderRadius: 5,
              }}
            />
          </Pressable>
        </View>

        <CategoryButtons onCategoryChange={onCategoryChange} />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 20,
  },
  notificationIcon: {
    backgroundColor: Colors.white,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    padding: 10,
    borderRadius: 100,
    marginTop: 10,
  },
  searchContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginRight: 10,
  },
});
