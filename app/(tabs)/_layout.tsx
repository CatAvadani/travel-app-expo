import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
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
            <Ionicons name='search' size={28} color={color} />
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
