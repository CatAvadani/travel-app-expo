import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import Colors from '../../constants/Colors';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: '#998ae2',
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='compass' size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='category'
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='space-dashboard' size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                // backgroundColor: Colors.secondaryColor,
                padding: 12,
                borderRadius: 10,
                height: 50,
              }}
            >
              <Ionicons name='search-outline' size={28} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='bookmarks'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='bookmark' size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user' size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
