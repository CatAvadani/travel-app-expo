import CategoryButtons from '@/components/CategoryButtons';
import CategoryItems from '@/components/CategoryItems';
import GroupDestinations from '@/components/GroupDestinations';
import Colors from '@/constants/Colors';
import { destinationsList } from '@/data/destinations';
import { groupsDestinations } from '@/data/groups';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
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
  const [searchText, setSearchText] = useState('');

  const onCategoryChange = (category: string) => {
    setCategory(category);
  };

  // Function to filter based on both category and search text
  const filterDestinations = () => {
    return destinationsList.filter((destination) => {
      const matchesCategory =
        category === 'All' || destination.category === category;
      const matchesSearchText = destination.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return matchesCategory && matchesSearchText;
    });
  };

  const filteredDestinations = filterDestinations();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <Pressable onPress={() => {}} style={styles.headerLeftContainer}>
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
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.black,
                  fontWeight: 'bold',
                }}
              >
                Hi, Cat!
              </Text>
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
          <Text style={styles.headingText}>
            Let's Plan Your Perfect Getaway!
          </Text>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={18} color={Colors.primaryColor} />
              <TextInput
                placeholder="Search..."
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                style={{ flex: 1 }}
              />
            </View>
            <Pressable onPress={() => {}}>
              <MaterialIcons
                name="tune"
                size={28}
                color={Colors.white}
                style={{
                  backgroundColor: Colors.secondaryColor,
                  padding: 10,
                  borderRadius: 5,
                }}
              />
            </Pressable>
          </View>

          <CategoryButtons onCategoryChange={onCategoryChange} />
          {filteredDestinations.length === 0 ? (
            <Text style={styles.emptyMessage}>
              No destinations found, try a different search!
            </Text>
          ) : (
            <CategoryItems
              destinations={filteredDestinations}
              category={category}
            />
          )}

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
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 20,
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    gap: 10,
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
  emptyMessage: {
    textAlign: 'center',
    marginVertical: 40,
    fontSize: 16,
    color: 'gray',
  },
});
