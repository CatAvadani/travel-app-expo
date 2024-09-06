import { auth } from '@/config/firebase';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Page = () => {
  const router = useRouter();
  const handleSignOut = () => {
    // Sign out the user
    auth
      .signOut()
      .then(() => {
        console.log('User signed out');
        router.replace('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Pressable onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={{ color: 'white' }}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
