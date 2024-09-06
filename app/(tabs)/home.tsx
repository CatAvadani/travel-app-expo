import CategoryButtons from '@/components/CategoryButtons';
import CategoryItems from '@/components/CategoryItems';
import GroupDestinations from '@/components/GroupDestinations';
import Colors from '@/constants/Colors';
import { destinationsList } from '@/data/destinations';
import { groupsDestinations } from '@/data/groups';
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
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
                name="notifications"
                size={20}
                color={Colors.primaryColor}
              />
            </Pressable>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingText}>Discover Your Next Adventure!</Text>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={18} color={Colors.primaryColor} />
              <TextInput placeholder="Search..." />
            </View>
            <Pressable onPress={() => {}}>
              <Ionicons
                name="options"
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

          <CategoryItems destinations={destinationsList} category={category} />
          <GroupDestinations listings={groupsDestinations} />
        </ScrollView>
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
    fontSize: 28,
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
    marginVertical: 10,
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
